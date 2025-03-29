"use client";

import { useEffect, useState } from "react";
import { useMyContext } from "@/core/context/context";

export default function Finalizar() {
  const [dispositivo, setDispositivo] = useState("mobile");
  const [funcionalidades, setFuncionalidades] = useState([
    {
      id: 1,
      titulo: "musica",
      descricao: "Música",
      selecionado: false,
    },
    {
      id: 2,
      titulo: "senha",
      descricao: "Senha",
      selecionado: false,
    },
    {
      id: 3,
      titulo: "revelacao",
      descricao: "Revelação",
      selecionado: false,
    },
    {
      id: 4,
      titulo: "video",
      descricao: "Vídeo",
      selecionado: false,
    },
    {
      id: 5,
      titulo: "sticker",
      descricao: "Sticker",
      selecionado: false,
    },
    {
      id: 6,
      titulo: "fotos",
      descricao: "Fotos",
      selecionado: false,
    },
  ]);

  const { userData } = useMyContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(userData);
    }
  }, []);

  const handleCategoriaClick = (id) => {
    setFuncionalidades((prevFuncionalidades) =>
      prevFuncionalidades.map((func) =>
        func.id === id ? { ...func, selecionado: !func.selecionado } : func
      )
    );
  };

  const handleMove = (direction) => {
    // Lógica para navegar entre layouts
    console.log(`Moving ${direction > 0 ? "forward" : "backward"}`);
  };

  return (
    <>
      <main className="min-h-[93vh] h-full container mx-auto px-8 flex flex-col">
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

        {/* adicionais */}
        <section className="flex flex-col lg:flex-row justify-between items-start gap-[20%] h-full">
          {/* categorias */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-4xl">Adicionais</h2>

            {funcionalidades.map((funcionalidade) => (
              <button
                type="button"
                key={funcionalidade.id}
                className="flex flex-row gap-2"
                onClick={() => handleCategoriaClick(funcionalidade.id)}
              >
                <img
                  src={`/img/funcionalidades/${funcionalidade.titulo}.png`}
                  alt={funcionalidade.titulo}
                  className="w-auto h-6"
                  width={24}
                  height={24}
                />
                <span className={funcionalidade.selecionado ? "font-bold" : ""}>
                  {funcionalidade.descricao}
                </span>
              </button>
            ))}
          </div>

          <div className="w-full h-full min-h-[60vh] flex flex-col justify-between">
            <div className="flex flex-row gap-6 items-center justify-between">
              <div className="flex flex-row gap-6">
                <span className="text-4xl font-bold">1.</span>
                <h2 className="text-4xl">
                  Escolha o layout da <br />
                  página.
                </h2>
              </div>

              <div className="flex flex-row gap-2">
                <button type="button" onClick={() => setDispositivo("mobile")}>
                  <img
                    src="/img/funcionalidades/celular.png"
                    alt="Mobile"
                    className={`w-auto h-12 ${
                      dispositivo === "mobile" ? "" : "bg-gray-100 opacity-50"
                    }`}
                    width={48}
                    height={48}
                  />
                </button>

                <div className="w-[0.20rem] bg-foreground"></div>

                <button type="button" onClick={() => setDispositivo("desktop")}>
                  <img
                    src="/img/funcionalidades/desktop.svg"
                    alt="Desktop"
                    className={`w-auto h-12 ${
                      dispositivo === "desktop" ? "" : "bg-gray-100 opacity-50"
                    }`}
                    width={48}
                    height={48}
                  />
                </button>
              </div>
            </div>

            {/* layouts */}
            <div className="h-full flex grow py-8">
              <button
                type="button"
                className="text-7xl"
                onClick={() => handleMove(-1)}
              >
                {" "}
                &#60;{" "}
              </button>
              <div className="grow relative">
                <div className="h-full w-[50%] absolute inset-0 m-auto bg-slate-800 z-50 rounded-standart"></div>
                <div className="h-[75%] rounded-standart w-[25%] absolute left-1/2 z-0 translate-x-1/2 top-1/2 bg-slate-400 transform -translate-y-1/2"></div>
                <div className="h-[75%] rounded-standart w-[25%] absolute top-1/2 translate-x-1/2 bg-slate-400 transform -translate-y-1/2"></div>
              </div>
              <button
                type="button"
                className="text-7xl"
                onClick={() => handleMove(1)}
              >
                {" "}
                &#62;{" "}
              </button>
            </div>

            <div className="flex flex-row gap-6 items-center justify-between w-full h-auto">
              <button
                type="button"
                className="font-bold text-3xl py-2 px-4 rounded-standart text-background bg-foreground"
                onClick={() => handleMove(-1)}
              >
                &#60; Voltar
              </button>
              <button
                type="button"
                className="font-bold text-3xl py-2 px-4 rounded-standart text-background bg-foreground"
                onClick={() => handleMove(1)}
              >
                Próximo &#62;
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
