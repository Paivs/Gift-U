"use client";
import { useState, useRef } from "react";
import ConjuntoBalao from "./conjuntoBalao";

export default function Balao() {
  const [step, setStep] = useState(0);

  const maxIndex = 2;
  const minIndex = 0;

  const [idade, setIdade] = useState(0);

  const [baloes, setBaloes] = useState([
    {
      mensagem: "",
      cor: "#FF0000",
    },
  ]);

  function handleMove(i) {
    const newStep = Math.min(Math.max(step + i, minIndex), maxIndex);
    setStep(newStep);
  }

  function handleAddBalao() {
    if (baloes.length === 8) {
      alert("Só é possível adicionar até 8 balões!");
      return;
    }
    const gerarCorAleatoria = () => {
      let n = (Math.random() * 0xfffff * 1000000).toString(16);
      return "#" + n.slice(0, 6);
    };
    setBaloes((prevState) => [
      ...prevState,
      { mensagem: "", cor: gerarCorAleatoria() },
    ]);
  }

  return (
    <div className="w-full h-full flex flex-col gap-4">
      {step == 0 ? (
        <>
          {/* chamada */}
          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-row gap-6">
              <span className="text-4xl font-bold">1.</span>
              <h2 className="text-4xl">
                Quantos anos <br />o presenteado fará?
              </h2>
            </div>
            <img
              src="/img/funcionalidades/balao.png"
              alt=""
              className="w-auto h-16"
            />
          </div>

          <div className="grow h-full w-full flex flex-col gap-2 rounded-[20px] p-4 md:min-h-[40vh]">
            <input
              type="number"
              className="px-2 py-1 rounded-standart text-4xl"
              min={1}
              max={120}
              step={1}
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              name=""
              id=""
              placeholder="Digite aqui a idade"
            />
          </div>
        </>
      ) : null}

      {step == 1 ? (
        <>
          {/* chamada */}
          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-row gap-6">
              <span className="text-4xl font-bold">2.</span>
              <h2 className="text-4xl">
                Escolha a quantidade
                <br />e mensagens dos balões
              </h2>
            </div>
            <img
              src="/img/funcionalidades/balao.png"
              alt=""
              className="w-auto h-16"
            />
          </div>

          <div className="grow h-full w-full flex flex-col gap-2 rounded-[20px] p-4 md:min-h-[40vh]">
            <div className="md:max-h-[30vh] overflow-y-auto flex flex-col gap-3">
              {baloes.map((balao, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <span>Balão {index + 1}</span>
                  <div className="flex flex-row gap-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="rounded-standart px-2 py-1 w-full"
                      placeholder="Digite a mensagem aqui"
                      value={balao.mensagem}
                      onChange={(e) =>
                        setBaloes((prevState) => {
                          const newState = [...prevState];
                          newState[index].mensagem = e.target.value;
                          return newState;
                        })
                      }
                    />
                    <input
                      type="color"
                      name=""
                      id=""
                      className="rounded-standart h-10"
                      value={balao.cor}
                      onChange={(e) =>
                        setBaloes((prevState) => {
                          const newState = [...prevState];
                          newState[index].cor = e.target.value;
                          return newState;
                        })
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full flex flex-col my-4 items-center justify-content-center">
              <button
                type="button"
                onClick={handleAddBalao}
                className="px-3 py-1 w-fit font-bold text-2xl text-background bg-foreground rounded-full"
              >
                +
              </button>
            </div>
          </div>
        </>
      ) : null}

      {step == 2 ? (
        <>
          {/* chamada */}
          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-row gap-6">
              <span className="text-4xl font-bold">3.</span>
              <h2 className="text-4xl">
                Avalie como ficou e
                <br />
                edite se precisar
              </h2>
            </div>
            <img
              src="/img/funcionalidades/balao.png"
              alt=""
              className="w-auto h-16"
            />
          </div>
          <div className="grow h-full w-full flex flex-col gap-2 rounded-[20px] p-4 md:min-h-[40vh]">
            <ConjuntoBalao baloes={baloes} />
          </div>
        </>
      ) : null}

      {/* controle */}
      <div className="flex flex-row gap-6 items-center justify-between w-full h-auto">
        <button
          type="button"
          className="font-bold text-3xl py-2 px-4 rounded-standart text-background bg-foreground"
          onClick={() => {
            handleMove(-1);
          }}
        >
          &#60; Voltar
        </button>
        <button
          type="button"
          className="font-bold text-3xl py-2 px-4 rounded-standart text-background bg-foreground"
          onClick={() => {
            handleMove(1);
          }}
        >
          Próximo &#62;
        </button>
      </div>
    </div>
  );
}
