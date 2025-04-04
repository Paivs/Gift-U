"use client";

import { useState } from "react";

export default function layoutPage() {
  const [dispositivo, setDispositivo] = useState("mobile");

  const handleMove = (direction) => {
    // Lógica para navegar entre layouts
    console.log(`Moving ${direction > 0 ? "forward" : "backward"}`);
  };

  return (
    <>
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
    </>
  );
}
