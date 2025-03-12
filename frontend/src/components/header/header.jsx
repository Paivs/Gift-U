"use client";

import { useState } from "react";
import Button from "../button/button";
import HamburguerButton from "./hamburguerButton/hamburguerButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container p-2 mx-auto px-8">
        <header className="flex items-start lg:items-center justify-between p-2 pb-4 border-b-2 border-gray-400">
          <a href="/" className="block dark:hidden">
            <img
              src="/logo-dark.png"
              className="h-9 w-auto sm:h-12 block dark:hidden"
              alt="logo da Gift U"
            />
          </a>
          <a href="/" className="hidden dark:block">
            <img
              src="/logo.png"
              className="h-9 w-auto sm:h-12 hidden dark:block"
              alt="logo da Gift U"
            />
          </a>

          <ul className="hidden lg:flex flex-row gap-7 text-base font-medium items-center">
            <li>
              <a href="">Planos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
            <li>
              <a href="">Central de ajuda</a>
            </li>
            <Button
              message={"Criar meu site"}
              href="/criar/funcionalidades"
              applyClass="px-4 text-background rounded-standart py-2"
            />
          </ul>

          <div className="lg:hidden flex flex-col items-end gap-4">
            <HamburguerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && (
              <ul className="flex flex-col gap-2 text-base font-medium items-end">
                <li>
                  <a href="">Planos</a>
                </li>
                <li>
                  <a href="">Contato</a>
                </li>
                <li>
                  <a href="">Central de ajuda</a>
                </li>
                <Button
                  message={"Criar meu site"}
                  href="/criar/funcionalidades"
                  applyClass="px-4 text-background rounded-standart py-2"
                />
              </ul>
            )}
          </div>
        </header>
      </div>
    </>
  );
}
