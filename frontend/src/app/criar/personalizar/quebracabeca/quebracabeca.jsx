"use client";
import { useState, useRef } from "react";
import Imagem from "./Imagem";

export default function QuebraCabeca() {
  const [step, setStep] = useState(0);

  const [is15, setIs15] = useState(true);
  const [is25, setIs25] = useState(false);
  const [is40, setIs40] = useState(false);

  const maxIndex = 2;
  const minIndex = 0;

  function handleMove(i) {
    const newStep = Math.min(Math.max(step + i, minIndex), maxIndex);
    setStep(newStep);
  }

  function handleSelect(option) {
    if (option == 15) {
      setIs15(true);
      setIs25(false);
      setIs40(false);
    }
    if (option == 25) {
      setIs15(false);
      setIs25(true);
      setIs40(false);
    }
    if (option == 40) {
      setIs15(false);
      setIs25(false);
      setIs40(true);
    }
  }

  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null); // Estado para armazenar o arquivo selecionado

  const handleDrop = (e) => {
    e.preventDefault();
    const dt = e.dataTransfer;
    const files = dt.files;

    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file) => {
    if (file.type.startsWith("image/")) {
      setFile(file); // Armazena o arquivo no estado
      console.log("Arquivo selecionado:", file);
      // Aqui você pode fazer o que quiser com o arquivo, como exibir a imagem ou enviá-lo para um servidor.
    } else {
      alert("Por favor, selecione um arquivo de imagem.");
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      {/* upload da iamgem */}
      {step == 0 ? (
        <>
          {/* chamada */}
          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-row gap-6">
              <span className="text-4xl font-bold">1.</span>
              <h2 className="text-4xl">
                Escolha a imagem do <br />
                seu Quebra-cabeça.
              </h2>
            </div>
            <img
              src="/img/funcionalidades/quebra-cabeca.png"
              alt=""
              className="w-auto h-16"
            />
          </div>

          {/* drag and drop */}
          <div
            className="grow h-full w-full rounded-[50px] border-4 border-gray-300 flex flex-col gap-2 items-center justify-center p-4 md:min-h-[40vh]"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="image/*"
            />
            {file ? ( // Se um arquivo foi selecionado, exibe o nome e/ou a imagem
              <div className="flex flex-col items-center gap-2">
                <p className="text-3xl text-[#d2d2d2]">Arquivo recebido:</p>
                <p className="text-xl text-[#d2d2d2]">{file.name}</p>
                <img
                  src={URL.createObjectURL(file)} // Exibe a imagem selecionada
                  alt="Preview"
                  className="mt-2 max-w-[100px] max-h-[100px] object-cover rounded-lg"
                />
              </div>
            ) : (
              // Se nenhum arquivo foi selecionado, exibe o ícone e o texto padrão
              <>
                <img
                  src="\img\drop.svg"
                  alt=""
                  className="min-w-[90px] w-[17%] h-auto"
                />
                <p className="text-3xl text-[#d2d2d2]">
                  Arraste ou <br /> solte aqui
                </p>
              </>
            )}
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
                <br />
                de peças.
              </h2>
            </div>
            <img
              src="/img/funcionalidades/quebra-cabeca.png"
              alt=""
              className="w-auto h-16"
            />
          </div>

          {/* select */}
          <div className="flex flex-col gap-6 ps-12 min-h-[40vh]">
            <div className="flex flex-row gap-3 text-4xl items-center">
              <button
                type="button"
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  is15 ? "bg-accent" : "bg-white border-gray-300"
                }`}
                onClick={() => {
                  handleSelect(15);
                }}
              >
              </button>
              <p>15 peças</p>
            </div>

            <div className="flex flex-row gap-3 text-4xl items-center">
              <button
                type="button"
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  is25 ? "bg-accent" : "bg-white border-gray-300"
                }`}
                onClick={() => {
                  handleSelect(25);
                }}
              >

              </button>
              <p>25 peças</p>
            </div>

            <div className="flex flex-row gap-3 text-4xl items-center">
              <button
                type="button"
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  is40 ? "bg-accent" : "bg-white border-gray-300"
                }`}
                onClick={() => {
                  handleSelect(40);
                }}
              >
              </button>
              <p>40 peças</p>
            </div>
          </div>
        </>
      ) : null}

      {step == 2 && file ? (
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
              src="/img/funcionalidades/quebra-cabeca.png"
              alt=""
              className="w-auto h-16"
            />
          </div>

          {/* select */}
          <div className="flex flex-col">
            <Imagem imageSrc={file} is15={is15} is25={is25} is40={is40} />
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
