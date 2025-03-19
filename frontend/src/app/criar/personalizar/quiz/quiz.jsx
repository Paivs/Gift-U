"use client";
import { useState } from "react";
export default function Quiz() {
  const [step, setStep] = useState(0);

  const maxIndex = 1;
  const minIndex = 0;

  const [idade, setIdade] = useState(0);

  const [perguntas, setPerguntas] = useState([
    {
      id: 0,
      pergunta: "",
      certa: 0,
      respostas: ["", ""],
    },
  ]);

  const [selectedQuestion, setSelectedQuestion] = useState(0);

  function handleMove(i) {
    const newStep = Math.min(Math.max(step + i, minIndex), maxIndex);
    setStep(newStep);
  }

  function handleLabelChange(index, value) {
    perguntas[index].pergunta = value;
    setPerguntas([...perguntas]);
  }

  function handleAddPergunta() {
    if (perguntas.length === 8) {
      alert("Só é possibile adicionar até 8 perguntas!");
      return;
    }
    perguntas.push({ id: perguntas.length, pergunta: "", respostas: ["", ""], certa: 0 });
    setPerguntas([...perguntas]);
  }

  function handleAddResposta(index) {
    if (perguntas[index].respostas.length === 5) {
      alert("Só é possibile adicionar até 5 respostas!");
      return;
    }
    perguntas[index].respostas.push("");
    setPerguntas([...perguntas]);
  }

  function handleRemovePergunta(index) {
    perguntas.splice(index, 1);
    setPerguntas([...perguntas]);
  }

  function handleRemoveResposta(indexPergunta, indexResposta) {
    if (indexResposta == perguntas[indexPergunta].certa)
      perguntas[indexPergunta].certa = 0;
    perguntas[indexPergunta].respostas.splice(indexResposta, 1);
    setPerguntas([...perguntas]);
  }

  function handleAnswerChange(indexPergunta, indexResposta, value) {
    perguntas[indexPergunta].respostas[indexResposta] = value;
    setPerguntas([...perguntas]);
  }

  function handleAnswerCorrect(index, indexResposta) {
    perguntas[index].certa = indexResposta;
    setPerguntas([...perguntas]);
  }

  return (
    <div className="w-full h-full flex flex-col gap-4">
      {step == 0 ? (
        <>
          {/* chamada */}
          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-row gap-6">
              <span className="text-4xl font-bold">1.</span>
              <h2 className="text-4xl">Crie as perguntas</h2>
            </div>
            {/* <img
              src="/img/funcionalidades/quiz.png"
              alt=""
              className="w-auto h-16"
            /> */}
          </div>

          <div className="grow h-full w-full flex flex-col gap-2 rounded-[20px] p-4 md:min-h-[40vh]">
            <div className="flex flex-row w-full border-foreground justify-between">
              <div className="flex">
                {perguntas.map((pergunta, index) => (
                  <div
                    className={`px-2 py-1 rounded-t-standart border-t-2 border-s-2 border-e-2 border-foreground ${selectedQuestion != index ? "border-b-2" : ""}`}
                    key={index}
                  >
                    <button type="button" onClick={() => setSelectedQuestion(index)}>
                    <span>0{index + 1}</span>
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-b-2 border-foreground grow"></div>

              <button
                type="button"
                className="px-2 py-1 rounded-t-standart border-t-2 border-s-2 border-e-2 border-foreground bg-foreground text-background"
                onClick={() => {
                  handleAddPergunta();
                }}
              >
                +
              </button>
            </div>


              <div className="flex flex-col gap-2">
                <label
                  htmlFor="pergunta01"
                  className="flex flex-col gap-2 text-2xl"
                >
                  Pergunta 0{selectedQuestion + 1}
                  <input
                    type="text"
                    id={`pergunta0${selectedQuestion}`}
                    name={`pergunta0${selectedQuestion}`}
                    value={perguntas[selectedQuestion].pergunta}
                    placeholder="Digite o enunciado aqui"
                    className="w-full px-1 rounded-standart"
                    onChange={(e) => handleLabelChange(selectedQuestion, e.target.value)}
                  />
                </label>

                <div className="flex flex-col gap-4">
                  <span className="text-2xl">Respostas</span>
                  {perguntas[selectedQuestion].respostas.map((resposta, indexResposta) => (
                    <div
                      className="flex flex-row gap-4 items-center w-full"
                      key={indexResposta}
                    >
                      <button
                        type="button"
                        className={`h-5 w-5 rounded-full border-2 border-foreground ${
                          perguntas[selectedQuestion].certa === indexResposta
                            ? "bg-foreground"
                            : ""
                        }`}
                        onClick={() =>
                          handleAnswerCorrect(selectedQuestion, indexResposta)
                        }
                      ></button>

                      <div className="relative w-full">
                        <input
                          type="text"
                          id={`resposta0${indexResposta}`}
                          className="w-full px-1 pe-12 rounded-standart py-2"
                          name={`resposta0${indexResposta}`}
                          placeholder={`Resposta ${indexResposta + 1}`}
                          value={resposta}
                          onChange={(e) =>
                            handleAnswerChange(
                              selectedQuestion,
                              indexResposta,
                              e.target.value
                            )
                          }
                        />

                        <button
                          type="button"
                          className="absolute top-1/2 transform -translate-y-1/2 right-2 px-2 rounded-full border-2 border-foreground"
                          onClick={() =>
                            handleRemoveResposta(selectedQuestion, indexResposta)
                          }
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-center items-center my-4">
                    <button
                      type="button"
                      className="px-2 py-1 text-background bg-foreground w-fit rounded-standart"
                      onClick={() => {
                        handleAddResposta(selectedQuestion);
                      }}
                    >
                      Adicionar resposta +
                    </button>
                  </div>
                </div>
              </div>

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
                Avalie como ficou e
                <br />
                edite se precisar
              </h2>
            </div>
            <img
              src="/img/funcionalidades/quiz.png"
              alt=""
              className="w-auto h-16"
            />
          </div>
          <div className="grow h-full w-full flex flex-col gap-2 rounded-[20px] p-4 md:min-h-[40vh]"></div>
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
