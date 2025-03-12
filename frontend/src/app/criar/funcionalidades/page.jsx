"use client";

import { useEffect, useState } from "react";
import funcionalidadesDados from "../../../../public/dados/funcionalidades.json";
import "./style.css";
import ModalFuncao from "./modalFuncao/modalFuncao";
import { useMyContext } from "@/core/context/context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Notification from "@/components/notification/Notification";
import { useNotification } from "@/core/NotificationContext/NotificationContext";

export default function Funcionalidades() {
  const router = useRouter();

  const { showNotification } = useNotification();
  const { userData, updateUserData, addFuncionalidade, removeFuncionalidade  } = useMyContext();
  const [notification, setNotification] = useState({
    message: "",
    type: "",
  });
  const [funcionalidades, setFuncionalidades] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dados = Object.values(funcionalidadesDados).map((dado) => {
        const funcionalidadeEncontrada = userData.funcionalidades.find((funcionalidade) => funcionalidade.id === dado.id);
        if (funcionalidadeEncontrada) {
          dado.selecionado = funcionalidadeEncontrada.selecionado;
        }
        return dado;
      });

      setFuncionalidades(Object.values(dados));
    }

    // setFuncionalidades(funcionalidadesDados);
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const [categorias, setCategorias] = useState([
    {
      id: 1,
      titulo: "geral",
      descricao: "Todos",
      selecionado: true,
    },
    {
      id: 2,
      titulo: "amor",
      descricao: "Aos apaixonados",
      selecionado: false,
    },
    {
      id: 3,
      titulo: "jogos",
      descricao: "Jogos",
      selecionado: false,
    },
    {
      id: 4,
      titulo: "aniversario",
      descricao: "Aniversário",
      selecionado: false,
    },
  ]);
  const [selecionado, setSelecionado] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleInfo(id) {
    setSelecionado(funcionalidades[id]);
    setIsModalOpen(true);
  }

  function handleSelection(id, selecionar) {
    setFuncionalidades((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, selecionado: selecionar } : item
      )
    );
  }

  function handleFunctionSelection(id) {
    handleSelection(id, funcionalidades[id].selecionado ? false : true); // Marca como selecionado
    if(funcionalidades[id].selecionado) {
      removeFuncionalidade(id);
    } else {
      addFuncionalidade(funcionalidades[id]);
    }
  }

  function handleItemRemove(id) {
    handleSelection(id, false); // Marca como não selecionado
    removeFuncionalidade(id);
  }

  function handleCategoriaClick(id) {
    setCategorias((prevState) => ({
      ...prevState,
      [id - 1]: {
        ...prevState[id - 1],
        selecionado: !prevState[id - 1].selecionado,
      },
    }));
  }

  function handleNextStep() {
    const funcionalidadesSelecionadas = funcionalidades.filter(
      (funcionalidade) => funcionalidade.selecionado
    );
    if (funcionalidadesSelecionadas.length === 0) {
      // setNotification({
      //   message: "Selecione pelo menos uma funcionalidade",
      //   type: "error",
      // })

      showNotification("Notificação 1", "success");
      showNotification("Notificação 2", "warning");
      showNotification("Notificação 3", "error");

      return;
    }
    router.push("/criar/personalizar");
  }

  return (
    <>
      {/* <Notification message={notification.message} setMessage={setNotification} type={notification.type}/> */}

      <ModalFuncao
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        funcionalidade={selecionado}
      />

      <section className="min-h-[93vh] container mx-auto px-8 flex flex-col justify-evenly">
        {/* chamada */}
        <div className="flex flex-col md:flex-row justify-between items-center my-8">
          <div className="flex flex-col">
            <h2 className="font-bold text-5xl">Crie seu presente</h2>
            <p className="text-xl">
              Selecione as funções que você vai querer <br /> no seu site.{" "}
              <span className="font-bold">Hora de soltar a criatividade!</span>
            </p>
          </div>

          <button
            className={`px-8 py-1 rounded-full text-black bg-[#d2d2d2] font-bold text-3xl`}
            type="button"
            onClick={handleNextStep}
          >
            Pronto
          </button>
        </div>

        <section className="flex flex-col lg:flex-row justify-between items-start gap-[10%] lg:gap-[20%] ">
          {/* categorias */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-4xl">Categorias</h2>

            {categorias.map((categoria) => (
              <div key={categoria.id}>
                <button
                  type="button"
                  className="flex flex-row gap-2"
                  onClick={() => handleCategoriaClick(categoria.id)}
                >
                  <img
                    src={`/emojis/${categoria.titulo}.png`}
                    alt={categoria.titulo}
                    className="w-auto h-6"
                  />
                  <span className={categoria.selecionado ? "font-bold" : ""}>
                    {categoria.descricao}
                  </span>
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 max-h-[53vh] overflow-y-auto">
            {funcionalidades.length > 0 &&
              funcionalidades.map((funcionalidade) => (
                <div
                  key={funcionalidade.id}
                  className="rounded-[40px] flex flex-col gap-2 p-6 aspect-square justify-between w-full min-h-[250px] h-full transition-transform transform hover:scale-105"
                  style={{ backgroundColor: funcionalidade.cor }}
                >
                  <div className="flex flex-row justify-between items-center">
                    <button
                      type="button"
                      onClick={() => handleInfo(funcionalidade.id)}
                    >
                      <svg
                        className="text-white w-auto h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="15"
                          stroke="currentColor"
                          strokeWidth="1"
                          fill="none"
                        />
                        <line
                          x1="16"
                          y1="12"
                          x2="16"
                          y2="24"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle cx="16" cy="8" r="1.5" fill="currentColor" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      style={{ color: funcionalidade.cor }}
                      onClick={() => handleFunctionSelection(funcionalidade.id)}
                      className={`rounded-full border text-white w-6 h-6 ${
                        funcionalidade.selecionado ? "bg-white" : "border-white"
                      }`}
                    >
                      {funcionalidade.selecionado && <> &#x2713; </>}
                    </button>
                  </div>

                  <div className="flex w-full items-center justify-center">
                    <img
                      src={funcionalidade.imagem}
                      alt={funcionalidade.titulo}
                      className="w-[7rem] h-auto object-contain"
                    />
                  </div>

                  <h3 className="font-bold text-2xl text-white text-center">
                    {funcionalidade.titulo}
                  </h3>
                </div>
              ))}
          </div>
        </section>

        <div
          className=" container mx-auto flex flex-col  items-center justify-center mt-4"
          style={{ zIndex: 9999 }}
        >
          <div className="flex flex-row items-center justify-start w-full">
            <h3 className="me-4 font-bold text-3xl py-4">Selecionados:</h3>
            <div className="flex flex-row gap-4 overflow-x-auto">
              {funcionalidades.length > 0 &&
                funcionalidades
                  .filter((item) => item.selecionado)
                  .map((funcionalidadeUsuario) => (
                    <div
                      key={funcionalidadeUsuario.id}
                      className="rounded-full flex flex-row gap-4 px-2 py-1 items-center"
                      style={{ backgroundColor: funcionalidadeUsuario.cor }}
                    >
                      <img
                        src={funcionalidadeUsuario.imagem}
                        alt="Quebra-cabeça"
                        className="w-auto h-6"
                      />

                      <span className="font-bold text-white text-nowrap">
                        {funcionalidadeUsuario.titulo}
                      </span>

                      <button
                        type="button"
                        className="bg-background rounded-full px-2"
                        style={{ color: funcionalidadeUsuario.cor }}
                        onClick={() => {
                          handleItemRemove(funcionalidadeUsuario.id);
                        }}
                      >
                        X
                      </button>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
