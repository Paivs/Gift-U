"use client";

import { useEffect, useState } from "react";
import { useMyContext } from "@/core/context/context";
import LayoutPage from "./layout/layoutPage";
import Fotos from "./fotos/fotos";
import Sticker from "./sticker/sticker";
import Video from "./video/video";
import Revelacao from "./revelacao/revelacao";
import Senha from "./senha/senha";
import Musica from "./musica/musica";

export default function Finalizar() {
  const [adicionais, setAdicionais] = useState([
    {
      id: 0,
      titulo: "musica",
      descricao: "Música",
      selecionado: false,
    },
    {
      id: 1,
      titulo: "senha",
      descricao: "Senha",
      selecionado: false,
    },
    {
      id: 2,
      titulo: "revelacao",
      descricao: "Revelação",
      selecionado: false,
    },
    {
      id: 3,
      titulo: "video",
      descricao: "Vídeo",
      selecionado: false,
    },
    {
      id: 4,
      titulo: "sticker",
      descricao: "Sticker",
      selecionado: false,
    },
    {
      id: 5,
      titulo: "fotos",
      descricao: "Fotos",
      selecionado: false,
    },
  ]);
  const [indiceAdicionais, setIndiceAdicionais] = useState(null);

  const { userData } = useMyContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(userData);
    }
  }, []);

  const componentesFuncionalidades = {
    layout: LayoutPage,
    musica: Musica,
    senha: Senha,
    revelacao: Revelacao,
    video: Video,
    sticker: Sticker,
    fotos: Fotos,
  };

  const ComponenteFuncionalidade = Object.values(adicionais)[indiceAdicionais]
    ? componentesFuncionalidades[
        Object.values(adicionais)[indiceAdicionais].titulo
      ]
    : null;

  const handleCategoriaClick = (id) => {
    if (id == indiceAdicionais) {
      setIndiceAdicionais(null);
      return;
    }
    setIndiceAdicionais(id);
  };

  return (
    <>
      <div className="min-h-[93vh] h-full container mx-auto px-8 flex flex-col">
        {/* chamada */}
        <div className="flex flex-col md:flex-row justify-between items-center my-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-5xl">Página principal</h2>
            <p className="text-xl">
              <span className="font-bold">Capriche</span> na página principal do
              site.
            </p>
          </div>

          <button
            type="button"
            className="px-8 py-1 rounded-full text-black bg-[#d2d2d2] font-bold text-3xl"
          >
            Pronto
          </button>
        </div>

        <section className="flex flex-col lg:flex-row justify-between items-start gap-[20%] h-full grow">
          {/* adicionais */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-4xl">Adicionais</h2>

            {adicionais.map((adicional) => (
              <div className="" key={adicional.id}>
                <button
                  type="button"
                  className={`flex flex-row gap-2 ${
                    adicional.id == indiceAdicionais
                      ? "font-bold bg-gray-200 px-2 py-1 rounded-standart w-full"
                      : ""
                  }`}
                  onClick={() => handleCategoriaClick(adicional.id)}
                >
                  <img
                    src={`/img/funcionalidades/${adicional.titulo}.png`}
                    alt={adicional.titulo}
                    className="w-auto h-6"
                    width={24}
                    height={24}
                  />
                  <span className={adicional.selecionado ? "font-bold" : ""}>
                    {adicional.descricao}
                  </span>
                </button>
              </div>
            ))}
          </div>

          <div className="grow flex flex-col">
            {ComponenteFuncionalidade && <ComponenteFuncionalidade />}
            {indiceAdicionais == null && <LayoutPage></LayoutPage>}
          </div>
        </section>
      </div>
    </>
  );
}
