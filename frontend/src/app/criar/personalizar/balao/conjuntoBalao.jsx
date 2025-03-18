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
          className="w-auto h-[200px] z-10"
          viewBox="0 0 512 512"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid slice"
        >
          {posicao === "direita" && (
            <path
              fill="#597B91"
              d="M 300.82 434.629 C 299.595 434.629 298.6 432.994 298.6 430.976 C 298.6 418.766 295.997 409.526 290.408 401.897 C 285.181 394.76 277.901 389.687 270.193 384.315 C 259.951 377.177 249.359 369.796 240.986 356.336 C 231.337 340.825 226.646 320.02 226.646 292.734 C 226.646 289.921 228.495 288.163 229.975 289.57 C 230.662 290.223 231.085 291.429 231.085 292.734 C 231.085 317.948 235.338 337.042 244.087 351.107 C 251.86 363.603 262.06 370.711 271.924 377.586 C 287.926 388.737 303.039 399.271 303.039 430.976 C 303.039 432.994 302.046 434.629 300.82 434.629 Z"
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -5.684341886080802e-14, 0)"
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
            d="M 243.297 291.721 C 243.773 292.939 244.235 294.14 244.65 295.297 C 245.051 296.369 245.418 297.406 245.764 298.388 C 246.106 299.371 246.464 300.3 246.693 301.158 C 247.159 302.873 247.121 304.303 246.935 305.304 C 246.752 306.305 246.397 306.876 246.397 306.876 C 241.432 314.885 230.915 317.352 222.906 312.387 C 220.674 310.993 218.789 309.108 217.395 306.876 C 217.395 306.876 217.041 306.304 216.857 305.304 C 216.671 304.303 216.633 302.874 217.099 301.158 C 217.328 300.3 217.685 299.371 218.028 298.388 C 218.374 297.405 218.741 296.369 219.142 295.297 C 219.557 294.14 220.019 292.939 220.495 291.721 C 186.473 277.803 130.399 210.614 113.612 147.539 C 110.354 136.335 108.705 124.725 108.713 113.056 C 108.714 45.024 163.864 -10.125 231.896 -10.125 C 299.928 -10.125 355.078 45.024 355.078 113.055 C 355.086 124.724 353.436 136.334 350.179 147.538 C 333.392 210.613 277.319 277.803 243.297 291.721 Z"
            transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -5.684341886080802e-14, 0)"
          />
        </svg>
      ) : (
        <div className="w-[200px] h-[200px] z-0 flex items-start justify-center pt-8">
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
      <div className="flex justify-center w-full h-fit">
        <div className="flex flex-row">
          <div className="pt-8">
            <Balao balao={baloes[0]} posicao={"direita"} />
          </div>
          <Balao balao={baloes[1]} posicao={"direita"} />
          <div className="pt-8">
            <Balao balao={baloes[2]} posicao={"direita"} />
          </div>
        </div>
      </div>
    );
  }

  if (baloes.length === 4) {
    return (
      <div className="flex flex-row gap-2 w-full h-auto">
        <div className="flex flex-col items-center justify-center w-full h-auto relative">
          <Balao balao={baloes[0]} posicao={"direita"} />
          <div className="flex flex-row gap-2 ">
            <Balao balao={baloes[1]} posicao={"direita"} />
            <Balao balao={baloes[2]} posicao={"direita"} />
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
