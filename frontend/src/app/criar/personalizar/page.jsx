"use client";

import { useEffect, useState } from "react";
import QuebraCabeca from "./quebracabeca/quebracabeca";
import Balao from "./balao/balao";
import Link from "next/link";
import { useMyContext } from "@/core/context/context";

export default function Personalizacao() {
  // <QuebraCabeca/>

  const [funcionalidades, setFuncionalidades] = useState([]);
  const { userData, updateUserData } = useMyContext();

  const [filaFuncionalidades, setFilaFuncionalidades] = useState({});
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(userData)
      if(userData.funcionalidades){
        setFilaFuncionalidades(userData.funcionalidades); 

        setFuncionalidades(() => {
          return Object.values(userData.funcionalidades).map((funcionalidade) => ({
            id: funcionalidade.id,
            imagem: funcionalidade.imagem,
            titulo: funcionalidade.titulo,
            selecionado: false
          }))
        })

        setFuncionalidades((prevState) => 
          prevState.map((item) => 
            item.id === 0 ? { ...item, selecionado: true } : { ...item, selecionado: false }
          )
        );
      }
    }
  }, [userData]);

  const componentesFuncionalidades = {
    "Quebra Cabeça": QuebraCabeca,
    "Balao": Balao,
    // "Dado": Dado,
    // Vamos adicionando mais funções aqui
  };

  
  const ComponenteFuncionalidade = Object.values(filaFuncionalidades)[indice] ? componentesFuncionalidades[Object.values(filaFuncionalidades)[indice].titulo] : null;
  
  function handleCategoriaClick(id){
    setIndice(id);
    setFuncionalidades((prevState) => 
      prevState.map((item) => 
        item.id === id ? { ...item, selecionado: true } : { ...item, selecionado: false }
      )
    );
  }
  return (
    <>
      <section className="min-h-[93vh] h-full container mx-auto px-8 flex flex-col">
        {/* chamada */}
        <div className="flex flex-col md:flex-row justify-between items-center my-8">
          <div className="flex flex-col">
            <h2 className="font-bold text-5xl">Personalize seu site</h2>
            <p className="text-xl">
              Personalize cada detalhe do seu <br />
              presente, e torne-o{" "}
              <span className="font-bold">inesquecível!</span>
            </p>
          </div>

          <Link
            className="px-8 py-1 rounded-full text-black bg-[#d2d2d2] font-bold text-3xl"
            href={"/criar/finalizar"}
          >
            Pronto
          </Link>
        </div>

        <section className="flex flex-col lg:flex-row justify-between items-start gap-[20%] h-full">
          {/* categorias */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-4xl">Selecionados</h2>

            {Object.entries(funcionalidades).map(([key, funcionalidade]) => (
              <button
                type="button"
                key={key}
                className="flex flex-row gap-2"
                onClick={() => {
                  handleCategoriaClick(funcionalidade.id);
                }}
              >
                <img
                  src={`${funcionalidade.imagem}`}
                  alt={funcionalidade.titulo}
                  className="w-auto h-6"
                />
                <span className={funcionalidade.selecionado ? "font-bold" : ""}>
                  {funcionalidade.titulo}
                </span>
              </button>
            ))}
          </div>

          {/* funcionalidades em si */}
          <div className="w-full h-full">
            
            {ComponenteFuncionalidade && <ComponenteFuncionalidade />}

          </div>
        </section>
      </section>
    </>
  );
}
