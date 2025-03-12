"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Cria o contexto
const NotificationContext = createContext();

// Provedor do contexto
export const NotificationProvider = ({ children }) => {
  const [queue, setQueue] = useState([]); // Fila de notificações
  const [currentNotification, setCurrentNotification] = useState(null); // Notificação atual

  // Função para adicionar uma notificação à fila
  const showNotification = (message, type = "danger", duration = 3000) => {
    const id = Date.now(); // ID único para a notificação
    setQueue((prevQueue) => [
      ...prevQueue,
      { id, message, type, duration },
    ]);
  };

  // Função para remover a notificação atual e exibir a próxima
  const removeNotification = (id) => {
    setQueue((prevQueue) => prevQueue.filter((notification) => notification.id !== id));
    setCurrentNotification(null); // Limpa a notificação atual
  };

  // Efeito para gerenciar a fila de notificações
  useEffect(() => {
    if (queue.length > 0 && !currentNotification) {
      // Exibe a primeira notificação da fila
      setCurrentNotification(queue[0]);

      // Remove a notificação após o tempo especificado
      const timer = setTimeout(() => {
        removeNotification(queue[0].id);
      }, queue[0].duration);

      return () => clearTimeout(timer);
    }
  }, [queue, currentNotification]);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {/* Renderiza a notificação atual */}
      {currentNotification && (
        <Notification
          message={currentNotification.message}
          type={currentNotification.type}
          onClose={() => removeNotification(currentNotification.id)}
        />
      )}
    </NotificationContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useNotification = () => useContext(NotificationContext);

// Componente de Notificação
const Notification = ({ message, type, onClose }) => {
  const styles = {
    error: "#FF3737",
    warning: "#F7DC6F",
    success: "#8BC34A",
  }[type];

  return (
    <div
      className="rounded-standart fixed left-1/2 transform -translate-x-1/2 h-auto w-fit px-2 py-4 flex gap-2"
      style={{ backgroundColor: styles, zIndex: 9999 }}
    >
      <p className="text-xl text-white font-semibold">{message}</p>
      <button
        type="button"
        className="rounded-full bg-white bg-opacity-50 text-white font-bold p-1 px-2"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
};