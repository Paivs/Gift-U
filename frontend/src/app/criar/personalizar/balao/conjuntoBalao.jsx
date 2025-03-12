import { useEffect, useState } from "react";

function Balao({ balao, posicao = "direita" }) {
  const [pop, setPop] = useState(true);

  useEffect(() => {
    console.log("iniciando");
    console.log(balao);
  }, []);

  const handleClick = () => {
    setPop(!pop); // Alternar o estado de pop
  };

  return (
    <>
      {pop ? (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="w-[280px] h-[280px] z-10"
            viewBox="0 0 512 512"
            aria-hidden="true"
            role="img"
            // className="iconify iconify--fxemoji"
            preserveAspectRatio="xMidYMid meet"
          >
            {posicao === "direita" && (
              <path
                fill="#597B91"
                d="M418.739 509.346a5.25 5.25 0 0 1-5.25-5.25c0-17.544-6.158-30.82-19.38-41.783c-12.365-10.254-29.586-17.544-47.818-25.262c-24.229-10.257-49.284-20.863-69.091-40.203c-22.826-22.288-33.921-52.182-33.921-91.389a5.25 5.25 0 0 1 10.5 0c0 36.23 10.061 63.666 30.757 83.875c18.388 17.956 42.515 28.169 65.848 38.047c37.853 16.023 73.604 31.159 73.604 76.715a5.249 5.249 0 0 1-5.249 5.25z"
              />
            )}
            {posicao === "esquerda" && (
              <path
                fill="#597B91"
                d="M93.261 509.346a5.25 5.25 0 0 1 5.25-5.25c0-17.544 6.158-30.82 19.38-41.783c12.365-10.254 29.586-17.544 47.818-25.262c24.229-10.257 49.284-20.863 69.091-40.203c22.826-22.288 33.921-52.182 33.921-91.389a5.25 5.25 0 0 1-10.5 0c0 36.23-10.061 63.666-30.757 83.875c-18.388 17.956-42.515 28.169-65.848 38.047c-37.853 16.023-73.604 31.159-73.604 76.715a5.249 5.249 0 0 1 5.249 5.25z"
              />
            )}
            {posicao === "reto" && (
              <path
                fill="#597B91"
                d="M256 509.346a5.25 5.25 0 0 1-5.25-5.25c0-17.544 0-30.82 0-41.783c0-10.254 0-17.544 0-25.262c0-10.257 0-20.863 0-40.203c0-22.288 0-52.182 0-91.389a5.25 5.25 0 0 1 0 0c0 36.23 0 63.666 0 83.875c0 17.956 0 28.169 0 38.047c0 16.023 0 31.159 0 76.715a5.249 5.249 0 0 1 0 5.25z"
              />
            )}
            <path
              fill={balao.cor}
              className="cursor-pointer"
              onClick={handleClick}
              d="M259.93 302.848c.476 1.218.938 2.419 1.353 3.576c.401 1.072.768 2.109 1.114 3.091c.342.983.7 1.912.929 2.77c.466 1.715.428 3.145.242 4.146c-.183 1.001-.538 1.572-.538 1.572c-4.965 8.009-15.482 10.476-23.491 5.511a17.323 17.323 0 0 1-5.511-5.511s-.354-.572-.538-1.572c-.186-1.001-.224-2.43.242-4.146c.229-.858.586-1.787.929-2.77c.346-.983.713-2.019 1.114-3.091c.415-1.157.877-2.358 1.353-3.576c-34.022-13.918-90.096-81.107-106.883-144.182a123.21 123.21 0 0 1-4.899-34.483C125.347 56.151 180.497 1 248.529 1s123.182 55.151 123.182 123.182a123.21 123.21 0 0 1-4.899 34.483c-16.787 63.075-72.86 130.265-106.882 144.183z"
            />
          </svg>
      ) : (
        <div className="w-[280px] h-[280px] z-0 flex items-start justify-center pt-8">
          <span onClick={handleClick} className="">
            {balao.mensagem}
          </span>
        </div>
      )}
    </>
  );
}

export default function ConjuntoBalao({ baloes }) {
  if (!baloes || baloes.length === 0) {
    return null; // Retorna null se não houver balões
  }

  if (baloes.length <= 2) {
    return (
      <div className="flex flex-row gap-2">
        {baloes.map((balao, index) => (
          <Balao key={index} balao={balao} posicao={"direita"} />
        ))}
      </div>
    );
  }

  if (baloes.length === 3) {
    return (
      <div className="flex flex-row gap-2 w-full h-auto">
        <div className="flex flex-col w-full h-auto relative">
          <Balao balao={baloes[0]} posicao={"direita"} />
          <div className="absolute">
            <div className="flex flex-row gap-2 w-full h-auto ">
              <Balao balao={baloes[1]} posicao={"direita"} />
              <Balao balao={baloes[2]} posicao={"direita"} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {baloes.map((balao, index) => (
        <Balao key={index} balao={balao} posicao={"direita"} />
      ))}
    </>
  );
}
