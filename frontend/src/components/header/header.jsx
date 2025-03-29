"use client";

import { useState } from "react";
import Button from "../button/button";
import HamburguerButton from "./hamburguerButton/hamburguerButton";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from 'next-themes';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <div className="container p-2 mx-auto px-8">
        <header className="flex items-start lg:items-center justify-between p-2 pb-4 border-b-2 border-gray-400">
          <Link href="/">
          {theme === 'dark' ? (
            <img
              src={"/logo-dark.png"}
              className="h-9 w-auto sm:h-12"
              alt="Logo da Gift U"
            />
          ) : (
            <img
              src={"/logo.png"}
              className="h-9 w-auto sm:h-12"
              alt="Logo da Gift U"
            />
          )}
          </Link>

          <ul className="hidden lg:flex flex-row gap-7 text-base font-medium items-center">
            <li>
              <Link href="/#planos">Planos</Link>
            </li>
            <li>
              <Link href="/faq">Central de ajuda</Link>
            </li>
            <Button
              message={"Criar meu site"}
              href="/criar/funcionalidades"
              applyClass="px-4 text-background rounded-standart py-2"
            />

            <ThemeToggle />
          </ul>

          <div className="lg:hidden flex flex-col items-end gap-4">
            <HamburguerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && (
              <ul className="flex flex-col gap-2 text-base font-medium items-end">
                <li>
                  <Link href="/#planos">Planos</Link>
                </li>
                <li>
                  <Link href="/contato">Contato</Link>
                </li>
                <li>
                  <Link href="/faq">Central de ajuda</Link>
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
