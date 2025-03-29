"use client";

import Button from "@/components/button/button";
import PricingCard from "@/components/pricingCard/pricingCard";
import Splash from "@/components/splash/splash";
import WordLoader from "@/components/WordLoader/WordLoader";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const amostrador = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-gift");
          } else {
            entry.target.classList.add("hidden-gift");
          }
        });
      });

      const elementsAmostrador = document.querySelectorAll(".hidden-gift");
      elementsAmostrador.forEach((el) => amostrador.observe(el));

      const bolhas = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("bolha-pai");
          }
        });
      });

      const elementsBolha = document.querySelectorAll(".bolhas");
      elementsBolha.forEach((el) => bolhas.observe(el));
    }
  }, []);

  return (
    <>
      {/* <Splash /> */}

      {/* chamada */}
      <section className="min-h-[93vh] container mx-auto p-2 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between px-8 hidden-gift">
          <div className="flex flex-col gap-4 ">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center md:text-left">
              Um jeito criativo de dar presentes!!!
            </h2>

            {/* <p className="text-xl">
              Personalize tudo da maneira que quiser adicionando fotos, vídeos e
              até músicas.{" "}
              <span className="font-bold">Solte a criatividade!</span>
            </p> */}
            <div className="w-full flex items-center justify-center md:justify-start mb-4 md:mb-0">
              <WordLoader />
            </div>

            <Button
              message={"Começar"}
              applyClass={"hidden md:block py-2 text-xl"}
              href="/criar/funcionalidades"
            />
          </div>

          <div className="overflow-visible relative">
            <img
              src="img/section1-dispositivos.png"
              alt=""
              className="z-20 relative"
            />

            <img
              src="img/section1-background.png"
              alt=""
              className="z-10 hidden md:block absolute h-auto w-[60%] top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-[50%]"
            />

            <img
              src="img/section1-background.png"
              alt=""
              className="z-10 block md:hidden absolute h-auto w-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50%]"
            />
          </div>

          <Button
            message={"Começar"}
            applyClass={"w-full my-4 py-2 text-xl md:hidden"}
            href="/criar/funcionalidades"
          />
        </div>
      </section>

      {/* passo a passo */}
      <section className="min-h-[93vh] container mx-auto p-2 flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-24 items-center justify-between overflow-visible px-8 hidden-gift">
          <div className="flex flex-col gap-4 relative">
            <img
              src="img/section1-background.png"
              alt=""
              className="z-0 hidden md:block absolute h-auto w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50%]"
            />

            <h2 className="z-10 font-bold text-6xl">É simples!</h2>
            <p className="z-10 text-xl">
              Em apenas 4 passos você pode surpreender quem você mais ama.{" "}
              <span className="font-bold">É muito rápido!</span>
            </p>

            <div className="flex flex-col z-10">
              <div className="flex flex-row items-center justify-between">
                <img
                  src="\img\funcionalidades\pintura.png"
                  alt="Pintura"
                  className="h-10 w-auto"
                />
                <img
                  src="\img\funcionalidades\cartao.png"
                  alt="cartão"
                  className="h-10 w-auto"
                />
                <img
                  src="\img\funcionalidades\carta.png"
                  alt="carta"
                  className="h-10 w-auto"
                />
                <img
                  src="\img\funcionalidades\coracao.png"
                  alt="coracão"
                  className="h-10 w-auto"
                />
              </div>

              <div className="px-2 py-4">
                <div className="relative w-full overflow-visible flex flex-row items-center justify-between bolhas">
                  <span className="z-10 px-2 bg-foreground text-background rounded-full text-xl">
                    1
                  </span>
                  <span className="z-10 px-2 bg-foreground text-background rounded-full text-xl">
                    2
                  </span>
                  <span className="z-10 px-2 bg-foreground text-background rounded-full text-xl">
                    3
                  </span>
                  <span className="z-10 px-2 bg-foreground text-background rounded-full text-xl">
                    4
                  </span>
                  <div className="z-0 w-[100%] h-2 bg-foreground absolute"></div>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between ps-2">
                <p className="w-16 md:text-sm text-xs">Crie</p>
                <p className="w-16 md:text-sm text-xs">Pague</p>
                <p className="w-16 md:text-sm text-xs">
                  Receba <br /> por E-mail
                </p>
                <p className="w-16 md:text-sm text-xs">Surpreenda</p>
              </div>
            </div>

            <div className="w-full flex items-center justify-center z-10 mt-4">
              <button
                type="button"
                className="px-4 py-2 rounded-full w-fit text-2xl text-background bg-foreground"
              >
                Criar meu site
              </button>
            </div>
          </div>

          <div className="max-w-[50vw]">
            <img src="img/section2-video.png" alt="" />
          </div>
        </div>
      </section>

      {/* presentes da galera */}
      <section className="min-h-[93vh] bg-[#dbcdff] flex flex-col items-center justify-center">
        <div className="container mx-auto p-2 flex flex-col items-center justify-center ">
          <div className="flex flex-col md:flex-row gap-24 items-center justify-between overflow-visible px-8 hidden-gift">
            <div className="relative flex flex-row gap-2 max-w-[90%] min-w-[50%] h-full overflow-visible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                viewBox="40.9 -1.4 419.8 503.1"
                zoomAndPan="magnify"
                style={{ fill: "rgb(0, 0, 0)" }}
                className="absolute h-[175%] w-auto top-1/2 left-[53%] transform -translate-x-1/2 -translate-y-1/2"
                original_string_length="984"
              >
                <g id="__id8_sowo1pvt6f">
                  <path
                    d="M 58.464844 166.386719 C 40.9375 218.816406 47.953125 277.582031 70.871094 327.890625 C 93.789062 378.199219 131.609375 420.613281 174.550781 455.433594 C 202.554688 478.140625 234.988281 498.628906 271.015625 499.933594 C 321.9375 501.773438 365.957031 465.300781 399.199219 426.683594 C 431.734375 388.890625 460.777344 339.984375 448.472656 291.65625 C 435.9375 242.417969 385.121094 212.230469 364.699219 165.703125 C 342.992188 116.257812 354.605469 48.347656 310.761719 16.824219 C 289.902344 1.824219 262.472656 0.65625 236.789062 0.046875 C 178.226562 -1.351562 175.976562 30.410156 144.183594 68.980469 C 115.597656 103.65625 73.695312 120.832031 58.464844 166.386719"
                    style={{ fill: "#c2b4e5" }}
                  />
                </g>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                viewBox="40.9 -1.4 419.8 503.1"
                zoomAndPan="magnify"
                style={{ fill: "rgb(0, 0, 0)" }}
                className="absolute h-[175%] w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                original_string_length="984"
              >
                <g id="__id8_sowo1pvt6f">
                  <path
                    d="M 58.464844 166.386719 C 40.9375 218.816406 47.953125 277.582031 70.871094 327.890625 C 93.789062 378.199219 131.609375 420.613281 174.550781 455.433594 C 202.554688 478.140625 234.988281 498.628906 271.015625 499.933594 C 321.9375 501.773438 365.957031 465.300781 399.199219 426.683594 C 431.734375 388.890625 460.777344 339.984375 448.472656 291.65625 C 435.9375 242.417969 385.121094 212.230469 364.699219 165.703125 C 342.992188 116.257812 354.605469 48.347656 310.761719 16.824219 C 289.902344 1.824219 262.472656 0.65625 236.789062 0.046875 C 178.226562 -1.351562 175.976562 30.410156 144.183594 68.980469 C 115.597656 103.65625 73.695312 120.832031 58.464844 166.386719"
                    style={{ fill: "rgb(144, 98, 255)" }}
                  />
                </g>
              </svg>

              <div className="z-10  rounded-standart flex flex-col justify-end h-full w-full bg-foreground p-2 min-h-[19rem]">
                <p className="text-lg font-bold text-background">Nome & Nome</p>
                <p className="text-md text-background">Há 2 meses</p>
              </div>
              <div className="z-10  rounded-standart flex flex-col justify-end h-full w-full bg-foreground p-2 min-h-[19rem]">
                <p className="text-lg font-bold text-background">Nome & Nome</p>
                <p className="text-md text-background">Há 2 meses</p>
              </div>
              <div className="z-10  rounded-standart flex flex-col justify-end h-full w-full bg-foreground p-2 min-h-[19rem]">
                <p className="text-lg font-bold text-background">Nome & Nome</p>
                <p className="text-md text-background">Há 2 meses</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 relative">
              <h2 className="font-bold text-6xl">
                Inspire-se em alguns presentes da galera...
              </h2>
              <p className="text-xl">
                Dê uma olhada nos recursos mais{" "}
                <span className="font-bold">amados</span> pelas pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* banner */}
      <section className="min-h-[50vh] p-2 flex flex-col items-center justify-center bg-[#9062ff]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h2 className="text-6xl text-background font-bold mb-2">
              Presenteie de uma forma diferente
            </h2>
            <p className="text-xl text-background">
              Inclua jogos personalizados, fotos, músicas, vídeos e muito mais!
            </p>

            <div className="w-full flex items-center justify-center z-10 mt-4">
              <button
                type="button"
                className="px-4 py-2 rounded-full w-fit text-2xl text-background bg-foreground"
              >
                Quero presentear
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* funcoes disponiveis */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center bg-[#f7f1f1]">
        <div className="container mx-auto my-8 p-2 flex flex-col">
          <div className="flex flex-col overflow-visible px-8 hidden-gift gap-8">
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="flex gap-2 items-center">
                <h2 className="text-6xl font-bold">Funções disponíveis</h2>
                <img
                  src="\img\funcionalidades\certo.png"
                  alt="certinho"
                  className="h-10"
                />
              </div>

              <p className="text-2xl">
                {" "}
                Explore algumas das nossas{" "}
                <span className="font-bold">+25 funções!</span>
              </p>
            </div>

            <div className="flex gap-16 justify-center">
              <div className="rounded-standart bg-foreground w-[600px] h-[300px]"></div>
              <div className="flex flex-col items-center justify-center">
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-2 items-center">
                    <img
                      className=" w-auto h-16"
                      src="\img\funcionalidades\coracao.png"
                      alt=""
                    />
                    <span className="text-2xl font-bold">Aos apaixonados</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <img
                      className=" w-auto h-16"
                      src="\img\funcionalidades\jogos.png"
                      alt=""
                    />
                    <span className="text-2xl font-bold">Jogos</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <img
                      className=" w-auto h-16"
                      src="\img\funcionalidades\aniversario.png"
                      alt=""
                    />
                    <span className="text-2xl font-bold">Aniversário</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* planos */}
      <section
        className="min-h-[93vh] container mx-auto p-2 flex flex-col items-center justify-center"
        id="planos"
      >
        <div className="flex flex-col gap-2 items-center justify-center px-8 hidden-gift">
          <h2 className="text-6xl font-bold mb-2">Planos</h2>
          <p className="text-xl">
            Planos que cabem no seu bolso! Escolha qual deseja para criar seu
            site personalizado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16 justify-items-center">
            <PricingCard
              titulo="Básico"
              valor="18,90"
              items={["Link personalizado", "Mensagem", "Música", "Imagem"]}
              botao="Duração 3 meses"
            />

            <PricingCard
              titulo="Criativo"
              valor="27,90"
              items={[
                "Link personalizado",
                "Mensagem",
                "Música",
                "Imagem",
                "Vídeo",
              ]}
              botao="Duração 1 ano"
            />

            <PricingCard
              titulo="Premium"
              valor="34,90"
              items={[
                "Link personalizado",
                "Mensagem",
                "Música",
                "Imagem",
                "Vídeo",
              ]}
              botao="Pra sempre!"
            />
          </div>
        </div>
      </section>

      {/* algumas reações */}
      <section className="min-h-[93vh] flex flex-col justify-center items-center bg-[#DBCDFF]">
        <div className="container mx-auto my-8 p-2 flex flex-col">
          <div className="flex flex-col overflow-visible px-8 hidden-gift gap-8">
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="flex gap-2 items-center">
                <h2 className="text-6xl font-bold">Algumas reações</h2>
              </div>

              <p className="text-2xl flex gap-2">
                Presente para os apaixonados, amigos, família{" "}
                <img
                  src="\img\funcionalidades\presente.png"
                  alt="ícone de presente"
                  className="h-10"
                />
              </p>
            </div>

            <div className="flex gap-16 items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-standart">
                <img
                  src="\img\funcionalidades\coracao.png"
                  alt="ícone de coração"
                  className="h-20"
                />

                <div className="rounded-standart bg-foreground w-[250px] h-[300px] bg-black"></div>
                {/* <video src="\video\funcionalidades\presente.mp4"></video> */}
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-standart">
                <img
                  src="\img\funcionalidades\balao.png"
                  alt="ícone de coração"
                  className="h-20"
                />

                <div className="rounded-standart bg-foreground w-[250px] h-[300px] bg-black"></div>
                {/* <video src="\video\funcionalidades\presente.mp4"></video> */}
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-standart">
                <img
                  src="\img\funcionalidades\abraco.png"
                  alt="ícone de coração"
                  className="h-20"
                />

                <div className="rounded-standart bg-foreground w-[250px] h-[300px] bg-black"></div>
                {/* <video src="\video\funcionalidades\presente.mp4"></video> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
