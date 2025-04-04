// services/apiClient.js
import { toast } from "sonner";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const defaultHeaders = {
  "Content-Type": "application/json",
  "x-api-key": apiKey,
};

/**
 * 
 * @param {string} endpoint - Caminho da API (sem a baseURL)
 * @param {object} options - fetch options padrão
 * @param {object} [config] - configurações opcionais
 * @param {function} [config.validator] - função que valida antes de enviar
 * @param {string} [config.validationMessage] - mensagem personalizada para erro de validação
 * @param {string} [config.errorMessage] - mensagem personalizada para erro de requisição
 * @returns {Promise<any>}
 */
export async function apiClient(endpoint, options = {}, config = {}) {
  const {
    validator,
    validationMessage = "Dados inválidos para requisição.",
    errorMessage = "Erro ao fazer a requisição.",
  } = config;

  if (validator) {
    try {
      const isValid = validator();
      if (!isValid) {
        toast.error(validationMessage);
        return Promise.reject({ message: validationMessage });
      }
    } catch (error) {
      const msg = error.message || validationMessage;
      toast.error(msg);
      return Promise.reject({ message: msg });
    }
  }

  try {
    const response = await fetch(baseUrl + endpoint, {
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
      ...options,
    });

    const responseBody = await response.json();

    if (!response.ok) {
      const msg = responseBody?.mensagem || errorMessage;
      toast.error(msg);
      throw {
        status: response.status,
        message: msg,
        body: responseBody,
      };
    }

    return responseBody;
  } catch (error) {
    const msg = error.message || errorMessage;
    toast.error(msg);
    console.error("Erro na apiClient:", error);
    throw error;
  }
}
