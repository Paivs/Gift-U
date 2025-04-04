import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { initializeApp, getApps } from "firebase/app";
import { v4 as uuidv4 } from "uuid";

export default class FirebaseService {
  constructor() {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    };

    // Evita inicializar múltiplas vezes
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    this.storage = getStorage(app);
  }

  async uploadFile(file) {
    const uniqueFileName = `${uuidv4()}_${file.name}`;
    const fileRef = ref(this.storage, `uploads/${uniqueFileName}`);

    try {
      await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(fileRef);
      return { url: downloadURL, tipo: file.type };
    } catch (error) {
      console.error("Erro ao fazer upload:", error);
      throw error;
    }
  }

  async uploadFiles(files) {
    return await Promise.all(files.map((file) => this.uploadFile(file)));
  }

  async removeFile(fileUrl) {
    const fileRef = ref(this.storage, fileUrl);
    try {
      await deleteObject(fileRef);
    } catch (error) {
      console.error("Erro ao remover arquivo:", error);
      throw error;
    }
  }

  async removeFiles(fileUrls) {
    return await Promise.all(fileUrls.map((url) => this.removeFile(url)));
  }
}
