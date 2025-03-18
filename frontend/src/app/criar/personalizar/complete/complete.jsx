"use client";
import { useState } from "react";
export default function Complete() {
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

  function handleMove(i) {
    const newStep = Math.min(Math.max(step + i, minIndex), maxIndex);
    setStep(newStep);
  }
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  // Função para capturar mudanças no input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Função para adicionar tags ao pressionar Enter ou Espaço
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setInputValue("");
      }
    }
  };

  // Função para remover uma tag
  const selectTag = (tagIdToSelect) => {

    if(selectedTags.length > 0 && selectedTags.includes(tagIdToSelect)){
      setSelectedTags(selectedTags.filter((tag) => tag !== tagIdToSelect));
    }

    setSelectedTags([...selectedTags, tagIdToSelect]);
  };

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
            <div className="flex flex-wrap items-center border border-gray-300 rounded-lg p-2">
              {/* Renderiza as tags como botões */}
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className={`flex items-center bg-gray-200 rounded-lg px-2 py-1 m-1 text-sm hover:bg-gray-300 transition-colors ${selectedTags.includes(tag) ? "bg-blue-500 text-white" : ""}`}
                  onClick={() => selectTag(tag)}
                >
                  {tag}
                </button>
              ))}
              {/* Input para adicionar novas tags */}
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="flex-1 p-2 outline-none min-w-[100px]"
                placeholder="Digite e pressione Enter ou Espaço"
              />
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
