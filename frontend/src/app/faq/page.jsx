"use client";

import { useState } from "react";

export default function faq() {
  const [topics, setTopics] = useState([
    {
      title: "Como funciona a Gift U?",
      answer: "É um site simples onde você pode criar seu presente.",
      isOpen: false,
    },
    {
      title: "O que posso personalizar no meu site?",
      answer: "Títulos, textos, imagens, músicas, etc.",
      isOpen: false,
    },
    {
      title: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos cartões de crédito, Pix e PayPal.",
      isOpen: false,
    },
    {
      title: "Como posso entrar em contato?",
      answer: "Você pode entrar em contato via email ou telefone.",
      isOpen: false,
    },
  ]);

  const toggleQuestion = (topicIndex) => {
    setTopics(
      topics.map((topic, index) =>
        index === topicIndex ? { ...topic, isOpen: !topic.isOpen } : topic
      )
    );
  };

  return (
    <>
      <div className="container mx-auto flex flex-col min-h-screen">
        <h2 className="text-6xl font-bold mb-6 text-center text-foreground py-8">
          Perguntas Frequentes
        </h2>

        <div className="flex flex-col gap-4">
          {topics.map((topic, topicIndex) => (
            <div
              key={topicIndex}
              className="flex flex-row items-center justify-between gap-4 rounded-standart bg-[#ededed] p-4 flex-wrap"
            >
              <span className="text-3xl">{topic.title}</span>
              <button
                type="button"
                className="text-3xl w-12 h-12 flex items-center justify-center"
                onClick={() => toggleQuestion(topicIndex)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {topics[topicIndex].isOpen && (
                <div className="w-full bg-background p-4 text-xl rounded-standart">
                  <span>{topic.answer}</span>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </>
  );
}
