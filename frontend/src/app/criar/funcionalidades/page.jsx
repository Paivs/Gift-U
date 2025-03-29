"use client";

import { useEffect, useState } from "react";
import funcionalidadesDados from "../../../../public/dados/funcionalidades.json";
import "./style.css";
import ModalFuncao from "./modalFuncao/modalFuncao";
import { useMyContext } from "@/core/context/context";
import { useRouter } from "next/navigation";

export default function Funcionalidades() {
  const router = useRouter();
  const { userData, addFuncionalidade, removeFuncionalidade } = useMyContext();
  
    const [notification, setNotification] = useState({
    message: "",
    type: "",
  });
  
  const [filteredFuncionalidades, setFilteredFuncionalidades] = useState([]);
  const [funcionalidadesSelecionadas, setFuncionalidadesSelecionadas] = useState([]);
  const [categorias, setCategorias] = useState([
    {
      id: 0,
      titulo: "geral",
      descricao: "Todos",
      valor: "geral",
      selecionado: true,
    },
    {
      id: 1,
      titulo: "amor",
      descricao: "Aos apaixonados",
      valor: "amor",
      selecionado: false,
    },
    {
      id: 2,
      titulo: "jogos",
      descricao: "Jogos",
      valor: "jogo",
      selecionado: false,
    },
    {
      id: 3,
      titulo: "aniversario",
      descricao: "Aniversário",
      valor: "aniversario",
      selecionado: false,
    },
  ]);
  const [selecionado, setSelecionado] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Carrega as funcionalidades e marca as selecionadas
  useEffect(() => {
    const dados = Object.values(funcionalidadesDados).map((dado) => {
      if (userData.funcionalidades) {
        const funcionalidadeEncontrada = userData.funcionalidades.find(
          (funcionalidade) => funcionalidade.id === dado.id
        );
        if (funcionalidadeEncontrada) {
          dado.selecionado = funcionalidadeEncontrada.selecionado;
        }
      }
      return dado;
    });
    setFuncionalidadesSelecionadas(dados);
    setFilteredFuncionalidades(dados); // Inicialmente, todas as funcionalidades são exibidas
  }, []);

  // Filtra as funcionalidades com base na categoria selecionada
  useEffect(() => {
    // Verifica se "geral" está selecionado
    const geralSelecionado = categorias.some((cat) => cat.valor === "geral" && cat.selecionado);
  
    if (geralSelecionado) {
      // Se "geral" estiver selecionado, exibe todas as funcionalidades
      setFilteredFuncionalidades(funcionalidadesSelecionadas);
    } else {
      // Filtra as funcionalidades com base nas categorias selecionadas
      const categoriasSelecionadas = categorias
        .filter((cat) => cat.selecionado)
        .map((cat) => cat.valor);
  
      const filtradas = funcionalidadesSelecionadas.filter((func) =>
        categoriasSelecionadas.some((cat) => func.tags.includes(cat))
      );
      setFilteredFuncionalidades(filtradas);
    }
  }, [categorias, funcionalidadesSelecionadas]);


  // Abre o modal com as informações da funcionalidade
  function handleInfo(id) {
    setSelecionado(funcionalidadesSelecionadas[id]);
    setIsModalOpen(true);
  }

  // Marca/desmarca uma funcionalidade como selecionada
  function handleSelection(id, selecionar) {
    setFuncionalidadesSelecionadas((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, selecionado: selecionar } : item
      )
    );
  }

  // Adiciona/remove uma funcionalidade da lista de selecionadas
  function handleFunctionSelection(id) {
    handleSelection(id, !funcionalidadesSelecionadas[id].selecionado); // Inverte o estado de seleção
    if (funcionalidadesSelecionadas[id].selecionado) {
      removeFuncionalidade(id);
    } else {
      addFuncionalidade(funcionalidadesSelecionadas[id]);
    }
  }

  // Remove uma funcionalidade da lista de selecionadas
  function handleItemRemove(id) {
    // Marca a funcionalidade como não selecionada no estado local
    setFuncionalidadesSelecionadas((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, selecionado: false } : item
      )
    );
  
    // Remove a funcionalidade do contexto (userData)
    removeFuncionalidade(id);
  }

  // Seleciona/deseleciona uma categoria
  function handleCategoriaClick(id) {
    setCategorias((prevState) => {
      // Cria um novo estado com as categorias atualizadas
      const novasCategorias = prevState.map((cat) => {
        if (id === 0) {
          // Se for o "geral", marca apenas ele e desmarca os outros
          return { ...cat, selecionado: cat.id === 0 };
        } else {
          // Se for outra categoria, desmarca o "geral" e inverte o estado da categoria clicada
          if (cat.id === 0) {
            return { ...cat, selecionado: false }; // Desmarca o "geral"
          }
          if (cat.id === id) {
            return { ...cat, selecionado: !cat.selecionado }; // Inverte o estado da categoria clicada
          }
          return cat; // Mantém o estado das outras categorias
        }
      });
  
      // Verifica se todas as categorias estão desmarcadas
      const todasDesmarcadas = novasCategorias.every((cat) => !cat.selecionado);
  
      // Se todas estiverem desmarcadas, seleciona o "geral" (categorias[0])
      if (todasDesmarcadas) {
        return novasCategorias.map((cat) =>
          cat.id === 0 ? { ...cat, selecionado: true } : cat
        );
      }
  
      return novasCategorias;
    });
  }

  // Avança para a próxima etapa se pelo menos uma funcionalidade estiver selecionada
  function handleNextStep() {
    
    
    if (funcionalidadesSelecionadas.filter(funcionalidade => funcionalidade.selecionado).length <= 0) {
      showNotification("Selecione pelo menos uma funcionalidade", "error");
      return;
    }

    if (typeof window !== "undefined") {
      router.push("/criar/personalizar");
    }
  }

  return (
    <>
      <ModalFuncao
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        funcionalidade={selecionado}
      />

      <section className="tela container mx-auto px-8 flex flex-col" >
        {/* Chamada */}
        <div className="flex flex-col md:flex-row justify-between items-center my-8 gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-5xl">Crie seu presente</h2>
            <p className="text-xl">
              Selecione as funções que você vai querer <br className="hidden md:block" /> no seu site.{" "}
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

        <section className="flex flex-col lg:flex-row justify-between items-start gap-[10%] lg:gap-[5%] grow lg:overflow-y-auto">
          {/* Categorias */}
          <div className="flex flex-col gap-2 lg:sticky top-0">
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

          {/* Funcionalidades */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 w-full">
            {filteredFuncionalidades.length > 0 &&
              filteredFuncionalidades.map((funcionalidade) => (
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

        {/* Funcionalidades Selecionadas */}
        <div
          className="container mx-auto flex flex-col items-center justify-center my-8"
          style={{ zIndex: 9999 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-start w-full">
            <h3 className="me-4 font-bold text-3xl py-4">Selecionados:</h3>
            <div className="flex flex-row gap-4 flex-wrap">
              {funcionalidadesSelecionadas.length > 0 &&
                funcionalidadesSelecionadas
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