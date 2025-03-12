import Link from "next/link";

export default function footer() {
  return (
    <>
      <footer className="bg-[#f7f1f1]">
        <div className="container mx-auto flex flex-col lg:flex-row justify-center gap-16  p-4">

          <div className="flex items-center flex-col">
            <div className="flex items-center flex-row gap-2">
              <img src="\logo-2.png" alt="" className="w-auto h-12" />
              <h2 className="text-3xl font-bold">Gift U</h2>
            </div>
            <p>
              Transforme sentimentos em <br />
              presentes inesquecíveis
            </p>
          </div>

            <ul className="flex flex-col">
              <li className="font-bold mb-2">Links</li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/criar/funcionalidades">Criar</Link>
              </li>
              <li>
                <Link href="/faq">Central de Ajuda</Link>
              </li>
              <li>
                <Link href="/termos">Políticas</Link>
              </li>
              <li>
                <Link href="">Contato</Link>
              </li>
            </ul>

            <ul className="flex flex-col">
              <li className="font-bold mb-2">Nossas redes</li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="https://www.TikTok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
              </li>
            </ul>


          <div className="flex flex-col gap-2">
            <h2 className="font-bold">
              Seja o primerio a saber quando tiver novidades.
            </h2>
            <div className="flex items-center flex-row gap-2">
              <input type="text" name="" id="" className="py-2 px-4 bg-[#d2d2d2] rounded-standart" />
              <button type="button" className="py-2 px-4 bg-[#d2d2d2] rounded-standart">Enviar</button>
            </div>
          </div>
        </div>
        <div className="bg-[#d2d2d2] w-full p-2 items-center flex justify-center font-bold">
          <p>2025 Gift-U. Todos os direitos reservados</p>
        </div>
      </footer>
    </>
  );
}
