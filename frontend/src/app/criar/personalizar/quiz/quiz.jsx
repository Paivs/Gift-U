"use client";
import { useState, useEffect } from "react";
import { useMyContext } from "@/core/context/context";
import { toast } from 'sonner'

export default function Quiz() {
  const [step, setStep] = useState(0);

  const maxIndex = 2;
  const minIndex = 0;

  const [chances, setChances] = useState(5);

  const { userData, updateFuncionalidade } = useMyContext();

  const [perguntas, setPerguntas] = useState([
    {
      id: 0,
      pergunta: "",
      certa: 0,
      respostas: ["", ""],
    },
  ]);

  const [selectedQuestion, setSelectedQuestion] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (userData.funcionalidades) {
        const funcionalidade = userData.funcionalidades.find(
          (funcionalidade) => funcionalidade.id === 2
        );

        console.log(funcionalidade);

        if (funcionalidade.perguntas) {
          setPerguntas(funcionalidade.perguntas);
          setChances(funcionalidade.chances);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateFuncionalidade(2, "perguntas", perguntas);
      updateFuncionalidade(2, "chances", chances);
    }
  }, [perguntas, chances]);

  function handleMove(i) {
    if (step + 1 == 1) {
      const someQuestionIsEmpty = perguntas.some(
        (pergunta) =>
          pergunta.pergunta.trim() === "" ||
          pergunta.respostas.some((resposta) => resposta.trim() === "")
      );
      if (someQuestionIsEmpty) {
        toast.warning("Preencha todos os campos de todas as perguntas!");
        return;
      }
    }
    const newStep = Math.min(Math.max(step + i, minIndex), maxIndex);
    setStep(newStep);
  }

  function handleLabelChange(index, value) {
    perguntas[index].pergunta = value;
    setPerguntas([...perguntas]);
  }

  function handleAddPergunta() {
    if (perguntas.length === 8) {
      toast.warning('Só é possibile adicionar até 8 perguntas!')
      return;
    }
    perguntas.push({
      id: perguntas.length,
      pergunta: "",
      respostas: ["", ""],
      certa: 0,
    });
    setPerguntas([...perguntas]);
    setSelectedQuestion(perguntas.length - 1);
  }

  function handleAddResposta(index) {
    if (perguntas[index].respostas.length === 3) {
      toast.warning("Só é possível adicionar até 4 respostas!");
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

  function handleChanceChange(value) {
    if (value < 1) value = 1;
    if (value > 10) value = 10;
    setChances(value);
  }

  return (
    <div className="w-full h-full flex flex-col gap-2">
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
            <div className="flex flex-row w-full items-center gap-4">
              <div className="flex">
                {perguntas.map((pergunta, index) => (
                  <div key={index}>
                    <button
                      type="button"
                      className={`px-2 py-1 rounded-standart ${
                        selectedQuestion != index ? "  " : "bg-gray-300"
                      }`}
                      onClick={() => {
                        if (selectedQuestion != index) {
                          setSelectedQuestion(index);
                        } else {
                        if(perguntas.length > 1) handleRemovePergunta(index);
                        }
                      }}
                    >
                      <span className="relative">
                        {selectedQuestion != index ? "  " : (<>
                          <span className="absolute -top-5 -right-5 bg-gray-600 text-white px-2 rounded-full" >x</span>
                          Pergunta {" "}
                        </>)}0
                        {index + 1}
                      </span>
                    </button>
                  </div>
                ))}
              </div>

              <div className="">|</div>

              <button
                type="button"
                className="px-2 text-xl font-bold rounded-full bg-foreground text-background"
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
                {/* Pergunta 0{selectedQuestion + 1} */}
                <input
                  type="text"
                  id={`pergunta0${selectedQuestion}`}
                  name={`pergunta0${selectedQuestion}`}
                  value={perguntas[selectedQuestion].pergunta}
                  placeholder="Digite o enunciado aqui"
                  className="w-full px-2 rounded-standart my-3"
                  onChange={(e) =>
                    handleLabelChange(selectedQuestion, e.target.value)
                  }
                />
              </label>

              <div className="flex flex-col gap-4">
                <span className="text-2xl">Alternativas</span>
                {perguntas[selectedQuestion].respostas.map(
                  (resposta, indexResposta) => (
                    <div
                      className="flex flex-row gap-2 items-center w-full"
                      key={indexResposta}
                    >
                      <button
                        type="button"
                        className="px-2"
                        onClick={() =>
                          handleRemoveResposta(selectedQuestion, indexResposta)
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          className="w-6 h-6"
                          viewBox="0 0 50 50"
                        >
                          <path d="M 21.857422 7 C 20.282422 7 19 8.2824219 19 9.8574219 L 19 13 L 10.5 13 C 10.224 13 10 13.224 10 13.5 C 10 13.776 10.224 14 10.5 14 L 12.925781 14 L 14.292969 38.607422 C 14.399969 40.509422 15.974906 42 17.878906 42 L 32.121094 42 C 34.025094 42 35.601031 40.510375 35.707031 38.609375 L 37.074219 14 L 39.5 14 C 39.776 14 40 13.776 40 13.5 C 40 13.224 39.776 13 39.5 13 L 31 13 L 31 9.8574219 C 31 8.2824219 29.717578 7 28.142578 7 L 21.857422 7 z M 21.857422 8 L 28.142578 8 C 29.166578 8 30 8.8334219 30 9.8574219 L 30 13 L 20 13 L 20 9.8574219 C 20 8.8334219 20.832422 8 21.857422 8 z M 13.927734 14 L 36.072266 14 L 34.708984 38.552734 C 34.631984 39.924734 33.495094 41 32.121094 41 L 17.878906 41 C 16.504906 41 15.368016 39.925734 15.291016 38.552734 L 13.927734 14 z M 19.169922 19 C 18.894922 19.009 18.6775 19.241578 18.6875 19.517578 L 19.242188 35.517578 C 19.252187 35.787578 19.473188 35.998047 19.742188 35.998047 L 19.761719 35.998047 C 20.036719 35.989047 20.252188 35.758422 20.242188 35.482422 L 19.6875 19.482422 C 19.6785 19.206422 19.436922 18.962 19.169922 19 z M 25 19 C 24.724 19 24.5 19.224 24.5 19.5 L 24.5 35.431641 C 24.5 35.707641 24.724 35.931641 25 35.931641 C 25.276 35.931641 25.5 35.707641 25.5 35.431641 L 25.5 19.5 C 25.5 19.224 25.276 19 25 19 z M 30.830078 19 C 30.545078 18.98 30.3225 19.207422 30.3125 19.482422 L 29.755859 35.482422 C 29.745859 35.758422 29.963281 35.989047 30.238281 35.998047 L 30.255859 35.998047 C 30.524859 35.998047 30.745859 35.787578 30.755859 35.517578 L 31.3125 19.517578 C 31.3225 19.241578 31.105078 19.009 30.830078 19 z"></path>
                        </svg>
                      </button>

                      <div className="relative w-full">
                        <input
                          type="text"
                          id={`resposta0${indexResposta}`}
                          className={`w-full px-1 pe-12 rounded-standart py-2 ${
                            perguntas[selectedQuestion].certa === indexResposta
                              ? "bg-green-400 placeholder:text-gray-500"
                              : ""
                          }`}
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
                          className={`absolute top-1/2 transform -translate-y-[55%] right-5 h-5 w-5`}
                          onClick={() =>
                            handleAnswerCorrect(selectedQuestion, indexResposta)
                          }
                        >
                          {perguntas[selectedQuestion].certa ===
                          indexResposta ? (
                            <svg
                              id="Checked_24"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <rect
                                width={24}
                                height={24}
                                stroke="none"
                                fill="#fff"
                                opacity={0}
                              />
                              <g transform="matrix(0.8 0 0 0.8 12 12)">
                                <path
                                  style={{
                                    stroke: "none",
                                    strokeWidth: 1,
                                    strokeDasharray: "none",
                                    strokeLinecap: "butt",
                                    strokeDashoffset: 0,
                                    strokeLinejoin: "miter",
                                    strokeMiterlimit: 4,
                                    fill: "#fff",
                                    fillRule: "nonzero",
                                    opacity: 1,
                                  }}
                                  transform=" translate(-15.5, -15)"
                                  d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 21.627 8.373 27 15 27 C 21.627 27 27 21.627 27 15 C 27 12.820623 26.409997 10.783138 25.394531 9.0214844 L 14.146484 20.267578 C 13.959484 20.454578 13.705453 20.560547 13.439453 20.560547 C 13.174453 20.560547 12.919422 20.455578 12.732422 20.267578 L 8.2792969 15.814453 C 7.8882969 15.423453 7.8882969 14.791391 8.2792969 14.400391 C 8.6702969 14.009391 9.3023594 14.009391 9.6933594 14.400391 L 13.439453 18.146484 L 24.240234 7.3457031 C 22.039234 4.6907031 18.718 3 15 3 z M 24.240234 7.3457031 C 24.671884 7.8662808 25.053743 8.4300516 25.394531 9.0195312 L 27.707031 6.7070312 C 28.098031 6.3150312 28.098031 5.6839688 27.707031 5.2929688 C 27.316031 4.9019687 26.683969 4.9019688 26.292969 5.2929688 L 24.240234 7.3457031 z"
                                  strokeLinecap="round"
                                />
                              </g>
                            </svg>
                          ) : (
                            <svg
                              id="Checked_24"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <rect
                                width={24}
                                height={24}
                                stroke="none"
                                fill="#000000"
                                opacity={0}
                              />
                              <g transform="matrix(0.43 0 0 0.43 12 12)">
                                <path
                                  style={{
                                    stroke: "none",
                                    strokeWidth: 1,
                                    strokeDasharray: "none",
                                    strokeLinecap: "butt",
                                    strokeDashoffset: 0,
                                    strokeLinejoin: "miter",
                                    strokeMiterlimit: 4,
                                    fill: "rgb(0,0,0)",
                                    fillRule: "nonzero",
                                    opacity: 1,
                                  }}
                                  transform=" translate(-25, -25)"
                                  d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"
                                  strokeLinecap="round"
                                />
                              </g>
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  )
                )}

                {perguntas[selectedQuestion].respostas.length >= 4 ? null : (
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
                )}
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
                Quantas chances o presenteado vai ter?
              </h2>
            </div>
          </div>
          <div className="grow h-full w-full flex flex-col gap-2 rounded-[20px] p-4 md:min-h-[40vh]">
            <label htmlFor="chances">
              <input
                type="number"
                name="chances"
                id="chances"
                className="w-full h-full p-2 rounded-standart"
                value={chances}
                onChange={(e) => handleChanceChange(e.target.value)}
              />
            </label>

            {chances > 0 ? (
              <div className="flex flex-row gap-2 w-full items-center justify-center grow">
                {Array.from({ length: chances }).map((_, i) => (
                  <div className="" key={i}>
                    <img
                      src="/img/funcionalidades/coracao.png"
                      alt=""
                      className="w-auto h-10 md:h-20"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </>
      ) : null}

      {step == 2 ? (
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
          <div className="grow h-full w-full flex flex-col gap-2 rounded-[20px] p-4 md:h-[40vh]">
            <div className="flex gap-2 text-2xl">
              <h2>Vidas: </h2>
              <span>{chances}</span>
            </div>

            <div className="overflow-y-auto">
              {perguntas.map((pergunta, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <details>
                    <summary className="text-2xl cursor-pointer">
                      {index + 1}. {pergunta.pergunta}
                    </summary>
                    <ul className="pl-8 mt-2 list-disc">
                      {pergunta.respostas.map((resposta, i) => (
                        <li key={i} className="text-xl">
                          {resposta}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}

      {/* controle */}
      <div className="flex flex-row gap-6 items-center justify-between w-full h-auto">
        <button
          type="button"
          className={`font-bold text-3xl py-2 px-4 rounded-standart text-background bg-foreground  ${
            step == 0 ? "opacity-0 cursor-default" : null
          }`}
          onClick={() => {
            handleMove(-1);
          }}
        >
          &#60; Voltar
        </button>
        <button
          type="button"
          className={`font-bold text-3xl py-2 px-4 rounded-standart text-background bg-foreground`}
          onClick={() => {
            handleMove(1);
          }}
        >
          {step == maxIndex ? "Concluir" : <>Próximo &#62;</>}
        </button>
      </div>
    </div>
  );
}
