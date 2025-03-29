"use client";

import { useState } from "react";

const CheckoutPage = () => {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentOptions, setPaymentOptions] = useState("");

  const handleGoToPayment = () => {
    setShowPaymentOptions(true);
  };

  const handleSelectPaymentOption = (option) => {
    setPaymentOptions(option);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen container mx-auto">
      {/* Order Summary (Left Side) */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-2xl font-semibold mb-4">Seu pedido</h2>

        {/* Site Premium */}
        <div className="bg-white rounded-lg p-4 mb-2 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/img/funcionalidades/diamond.png"
                alt="Diamond"
                className="w-8 h-8"
              />
              <div>
                <p className="font-medium">Site premium</p>
                <p className="text-gray-600">R$ 34,90</p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>

        {/* Other Items */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/img/funcionalidades/www.png"
                alt="www"
                className="w-5 h-5"
              />
              <p className="font-medium">WWW.</p>
            </div>
            <p className="text-gray-600">R$ 0,99</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/img/funcionalidades/senha.png"
                alt="senha"
                className="w-5 h-5"
              />
              <p className="font-medium">Senha</p>
            </div>
            <p className="text-gray-600">R$ 0,99</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/img/funcionalidades/chave.png"
                alt="revelacao"
                className="w-5 h-5"
              />
              <p className="font-medium">Revelação</p>
            </div>
            <p className="text-gray-600">R$ 0,99</p>
          </div>
        </div>

        {/* Site para Sempre */}
        <div className="bg-white rounded-lg p-4 mt-4 border border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/img/funcionalidades/ampulheta.png"
              alt="ampulheta"
              className="w-5 h-5"
            />
            <div>
              <p className="font-medium">Site para sempre</p>
              <p className="text-gray-600">R$ 1,99</p>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            +
          </button>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between mt-8">
          <p className="text-lg font-medium">Total</p>
          <p className="text-2xl font-bold">R$ 37,87</p>
        </div>
      </div>

      {/* Checkout Form (Right Side) */}
      {showPaymentOptions == false ? (
        <>
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-4">Detalhes da compra</h2>

            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                placeholder="Nome completo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="nome@email.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* WhatsApp */}
            <div className="mb-4">
              <label
                htmlFor="whatsapp"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Celular/WhatsApp
              </label>
              <div className="flex">
                <div className="inline-flex items-center border border-gray-400 rounded-l px-2 bg-gray-100">
                  +55
                </div>
                <input
                  type="tel"
                  id="whatsapp"
                  placeholder="( ) _____-____"
                  className="shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            {/* Discount Code */}
            <div className="mb-4">
              <label
                htmlFor="discount"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Cupom de Desconto
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="discount"
                  placeholder="Código de cupom"
                  className="shadow appearance-none border rounded-l w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r">
                  Adicionar
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">
                  Li e concordo com o(s)
                  <a href="#" className="text-blue-500">
                    termos e condições
                  </a>
                </span>
              </label>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleGoToPayment}
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Continuar para formas de pagamento
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/2 p-8 flex flex-col gap-2">
            <div className="flex flex-col gap-0">
              <h2 className="text-2xl font-semibold">Detalhes do pagamento</h2>
              <p>Selecione uma forma de pagamento</p>
            </div>

            <div className="flex flex-col gap-2">
              {/* cartao de credito */}
              <div className="border border-1 border-foreground rounded-standart py-4 px-8 flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between">
                  <div className="rounded-full px-4 py-3 bg-gray-300">
                    <img
                      src="\img\funcionalidades\cartao.png"
                      alt="cartão"
                      className="h-12 w-auto"
                    />
                  </div>

                  <div className="h-full w-auto">
                    <button
                      type="button"
                      className={`border border-1 border-foreground rounded-full w-8 h-8 ${paymentOptions === 'cartao' ? "bg-green-500" : ""}`}
                      onClick={() => handleSelectPaymentOption("cartao")}
                    ></button>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Cartão de crédito</h2>
                  <p className="text-sm text-gray-500">Até 12x sem juros</p>
                </div>
              </div>

              {/* pix */}
              <div className="border border-1 border-foreground rounded-standart py-4 px-8 flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between">
                  <div className="rounded-full px-4 py-3 bg-gray-300">
                    <img
                      src="\img\funcionalidades\pix.png"
                      alt="pix"
                      className="h-12 w-auto"
                    />
                  </div>

                  <div className="h-full w-auto">
                    <button
                      type="button"
                      className={`border border-1 border-foreground rounded-full w-8 h-8 ${paymentOptions === 'pix' ? "bg-green-500" : ""}`}
                      onClick={() => handleSelectPaymentOption("pix")}
                    ></button>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Pix</h2>
                  <p className="text-sm text-gray-500">Á vista</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4 items-center justify-center">
                <button
                  onClick={handleGoToPayment}
                  type="button"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Ir para pagamento
                </button>

                <button
                  type="button"
                  onClick={() => setShowPaymentOptions(false)}
                >
                  &lt; Voltar para detalhes da compra
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
