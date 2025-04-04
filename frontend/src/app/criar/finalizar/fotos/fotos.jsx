"use client";

import { useMyContext } from "@/core/context/context";
import { useState, useRef } from "react";

export default function QuebraCabeca() {
  const [step, setStep] = useState(0);
  const maxIndex = 2;
  const minIndex = 0;
  const [selectedPieces, setSelectedPieces] = useState(null);

  const [pivo, setPivo] = useState(0);
  const [fotos, setFotos] = useState(null);
  /*
  arquivo:
  descricao:
  */

  const [files, setFiles] = useState([]); // Changed from single file to array

  function handleMove(i) {
    const newStep = Math.min(Math.max(step + i, minIndex), maxIndex);
    setStep(newStep);
  }

  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const dt = e.dataTransfer;
    const newFiles = Array.from(dt.files);
    handleFiles(newFiles);
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    handleFiles(newFiles);
  };

  const handleFiles = (newFiles) => {
    // Filter only image files
    const imageFiles = newFiles.filter((file) =>
      file.type.startsWith("image/")
    );

    if (imageFiles.length === 0) {
      alert("Por favor, selecione apenas arquivos de imagem.");
      return;
    }

    // Combine existing files with new ones, but limit to 8
    const combinedFiles = [...files, ...imageFiles].slice(0, 8);
    setFiles(combinedFiles);
    console.log("Arquivos selecionados:", combinedFiles);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleSelect = (pieces) => {
    setSelectedPieces(pieces);
  };

  const handlePivo = () => {
    const arquivos = [];
    
    if (files[pivo - 1] != null) arquivos.push(files[pivo - 1]);
    else arquivos.push(files[files.length - 1]);
    
    if (files[pivo] != null) arquivos.push(files[pivo]);

    if (files[pivo + 1] != null) arquivos.push(files[pivo + 1]);
    else arquivos.push(files[0]);

    return arquivos;
  };

  const handlePivoPlus = () => {
    if(pivo == files.length - 1) setPivo(0);
    else setPivo(pivo + 1);
  }

  const handlePivoMinus = () => {
    if(pivo == 0) setPivo(files.length - 1);
    else setPivo(pivo - 1);
  }

  return (
    <div className="w-full h-full flex flex-col gap-4 grow">
      {/* upload da imagem */}

      {step == 0 ? (
        <>
          {/* chamada */}
          <div className="flex flex-row gap-6">
            <div className="flex flex-row gap-6">
              <span className="text-4xl font-bold">1.</span>
              <h2 className="text-4xl w-full md:w-2/3">
                Escolha as imagens para o seu presente. (Limite 8 fotos)
              </h2>
            </div>
            <img
              src="/img/funcionalidades/fotos.png"
              alt=""
              className="w-auto h-16"
            />
          </div>

          {/* drag and drop */}
          <div
            className="grow min-h-[40vh] w-full h-full rounded-[50px] border-4 border-gray-300 flex flex-col gap-2 items-center justify-center p-4"
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
              multiple // Allow multiple file selection
            />
            {files.length > 0 ? (
              <div className="w-full h-full overflow-auto items-center justify-center flex flex-col">
                <p className="text-3xl text-[#d2d2d2] mb-4">
                  {files.length} {files.length === 1 ? "imagem" : "imagens"}{" "}
                  selecionada{files.length === 1 ? "" : "s"}
                </p>
                <div className="flex gap-4 flex-wrap items-center justify-center">
                  {files.map((file, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveFile(index);
                        }}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      >
                        ×
                      </button>
                      <p className="text-sm truncate">{file.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <img
                  src="\img\drop.svg"
                  alt=""
                  className="min-w-[90px] w-[17%] h-auto"
                />
                <p className="text-3xl text-[#d2d2d2] text-center">
                  Arraste ou <br /> solte aqui
                </p>
                <p className="text-xl text-[#d2d2d2]">(Até 8 imagens)</p>
              </>
            )}
          </div>
        </>
      ) : null}

      {step == 1 && files.length > 0 ? (
        <>
          {/* chamada */}
          <div className="flex flex-row gap-6 items-center">
            
            <div className="flex flex-row gap-6">
              <span className="text-4xl font-bold">2.</span>
              <h2 className="text-4xl">
                Escreva um comentário
                <br />
                (opcional)
              </h2>
            </div>
            <img
              src="/img/funcionalidades/fotos.png"
              alt=""
              className="w-auto h-16"
            />
          </div>

          {/* preview */}
          <div className="flex flex-row gap-4 min-h-[40vh] items-center justify-between">
            <button
              onClick={handlePivoMinus}
              className="bg-gray-500 text-white rounded-full w-6 h-6 px-2 flex items-center justify-center"
            >
              {"<"}
            </button>

            <div className="flex flex-row gap-2 max-h-30vh">
              {files.length > 0 &&
                handlePivo().map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="bg-white rounded-standart p-2 w-[20vh] h-32 flex items-center justify-center">
                        <img src={URL.createObjectURL(item)} alt="" className="w-full h-full object-cover"/>
                      </div>
                      <label htmlFor={`descricao imagem ${index + 1}`} className={`flex flex-col ${index == 1 ? "" : "hidden"}`}>
                        Descrição da imagem {}
                        <input
                          type="text"
                          name={`descricao${index}`}
                          id={`descricao${index}`}
                          placeholder="Digite uma breve descrição da imagem"
                          className="p-1 rounded-standart"
                        />
                      </label>
                    </div>
                  );
                })}
            </div>

            <button
              onClick={handlePivoPlus}
              className="bg-gray-500 text-white rounded-full w-6 h-6 px-2 flex items-center justify-center"
            >
              {">"}
            </button>
          </div>
        </>
      ) : null}

      {step == 2 && files.length > 0 ? (
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

          {/* preview */}
          <div className="flex flex-col gap-4">
            {files.map((file, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-2xl mb-2">Imagem {index + 1}</h3>
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </>
      ) : null}

      {/* controle */}
      <div className="flex flex-row gap-6 items-center justify-between w-full h-auto">
        <button
          type="button"
          className="font-bold text-3xl py-2 px-4 rounded-standart text-background bg-foreground"
          onClick={() => handleMove(-1)}
          disabled={step === minIndex}
        >
          &#60; Voltar
        </button>
        <button
          type="button"
          className="font-bold text-3xl py-2 px-4 rounded-standart text-background bg-foreground"
          onClick={() => handleMove(1)}
          disabled={
            (step === 0 && files.length === 0) ||
            (step === 1 && !selectedPieces)
          }
        >
          Próximo &#62;
        </button>
      </div>
    </div>
  );
}
