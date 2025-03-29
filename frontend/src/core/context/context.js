"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Cria o contexto
const MyContext = createContext();

// Provedor do contexto
export function MyProvider({ children }) {
  // Estado inicial para userData, buscando do localStorage
  const [userData, setUserData] = useState(() => {
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("userData");
      return storedUserData ? JSON.parse(storedUserData) : { name: "", funcionalidades: [] };
    }
    return { name: "", funcionalidades: [] }; // Estado inicial padrão
  });

  // Atualiza o localStorage sempre que userData mudar
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [userData]);

  // Função genérica para atualizar qualquer campo do userData
  const updateFuncionalidade = (id, campo, valor) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      funcionalidades: prevUserData.funcionalidades.map((funcionalidade) =>
        funcionalidade.id === id ? { ...funcionalidade, [campo]: valor } : funcionalidade
      ),
    }));
  }



  // Método para adicionar uma funcionalidade ao userData
  const addFuncionalidade = (novaFuncionalidade) => {
    novaFuncionalidade = { ...novaFuncionalidade, selecionado: true };
    setUserData((prevUserData) => ({
      ...prevUserData,
      funcionalidades: [...(prevUserData.funcionalidades || []), novaFuncionalidade], // Garante que funcionalidades seja um array
    }));
  };

  
  // Método para remover uma funcionalidade pelo ID
  const removeFuncionalidade = (id) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      funcionalidades: prevUserData.funcionalidades.filter((funcionalidade) => funcionalidade.id !== id),
    }));
  };
  

  // Valor do contexto
  const contextValue = {
    userData,
    updateFuncionalidade,
    addFuncionalidade,
    removeFuncionalidade
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

// Hook personalizado para usar o contexto
export function useMyContext() {
  return useContext(MyContext);
}
