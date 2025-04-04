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
      return storedUserData
        ? JSON.parse(storedUserData)
        : { name: "", funcionalidades: [] };
    }
    return { name: "", funcionalidades: [], adicionais: [] }; // Estado inicial padrão
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
        funcionalidade.id === id
          ? { ...funcionalidade, [campo]: valor }
          : funcionalidade
      ),
    }));
  };

  // Método para adicionar uma funcionalidade ao userData
  const addFuncionalidade = (novaFuncionalidade) => {
    novaFuncionalidade = { ...novaFuncionalidade, selecionado: true };
    setUserData((prevUserData) => ({
      ...prevUserData,
      funcionalidades: [
        ...(prevUserData.funcionalidades || []),
        novaFuncionalidade,
      ], // Garante que funcionalidades seja um array
    }));
  };

  // Método para remover uma funcionalidade pelo ID
  const removeFuncionalidade = (id) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      funcionalidades: prevUserData.funcionalidades.filter(
        (funcionalidade) => funcionalidade.id !== id
      ),
    }));
  };

  //ADICIONAIS
  const updateAdicional = (id, campo, valor) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      adicionais: prevUserData.adicionais.map((adicional) =>
        adicional.id === id ? { ...adicional, [campo]: valor } : adicional
      ),
    }));
  };

  // Método para adicionar uma adicional ao userData
  const addAdicional = (novaAdicional) => {
    novaAdicional = { ...novaAdicional, selecionado: true };
    setUserData((prevUserData) => ({
      ...prevUserData,
      adicionais: [...(prevUserData.adicionais || []), novaAdicional], // Garante que adicionais seja um array
    }));
  };

  // Método para remover uma adicional pelo ID
  const removeAdicional = (id) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      adicionais: prevUserData.adicionais.filter(
        (adicional) => adicional.id !== id
      ),
    }));
  };

  // Valor do contexto
  const contextValue = {
    userData,
    updateFuncionalidade,
    addFuncionalidade,
    removeFuncionalidade,
    updateAdicional,
    addAdicional,
    removeAdicional,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useMyContext() {
  return useContext(MyContext);
}
