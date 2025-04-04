import { apiClient } from "./apiClient";

export async function createSite(newClientData) {
  const result = await apiClient(
    "site",
    {
      method: "POST",
      body: JSON.stringify(newClientData),
    },
    {
      validator: () => validateSiteClient(newClientData),
      validationMessage: "Preencha corretamente os dados do site.",
      errorMessage: "Erro ao criar o site. Tente novamente mais tarde.",
    }
  );

  return {
    success: true,
    message: "Cliente criado com sucesso.",
    data: result,
  };
}

function validateSiteClient(newClientData) {
  const errorMessages = [];

  if (!newClientData.fromname?.trim()) {
    errorMessages.push('O campo "De" (fromname) é obrigatório.');
  }
  if (!newClientData.toname?.trim()) {
    errorMessages.push('O campo "Para" (toname) é obrigatório.');
  }
  if (!newClientData.declaration?.trim()) {
    errorMessages.push('O campo "Declaração" é obrigatório.');
  }
  if (!newClientData.plano?.trim()) {
    errorMessages.push('O campo "Plano" é obrigatório.');
  }
  if (!newClientData.music_id?.trim()) {
    errorMessages.push('O campo "Música" é obrigatório.');
  }
  if (!newClientData.midias || newClientData.midias.length === 0) {
    errorMessages.push("Pelo menos uma mídia deve ser inserida.");
  }

  if (errorMessages.length > 0) {
    throw new Error(errorMessages.join("\n"));
  }
}

export async function getSite(code, site) {
  try {
    const response = await http
      .get(`${environment.backend.url}site/${code}/${site}`, {
        headers: headers,
        observe: "response",
      })
      .toPromise();

    if (response && response.status === 200) {
      return {
        success: true,
        message: "Site encontrado e retornado.",
        data: response.body,
      };
    } else if (response) {
      return handleErrorResponse(response);
    } else {
      return {
        success: false,
        message: "Erro inesperado: resposta indefinida.",
      };
    }
  } catch (error) {
    return handleHttpError(error);
  }
}

//---

// export async function getSite(nome) {
//   try {
//     const response = await http
//       .get(`${environment.backend.url}site`, {
//         headers: headers,
//         observe: "response",
//       })
//       .toPromise();

//     if (response && response.status === 200) {
//       return { success: true, message: "Site retornado com sucesso." };
//     } else if (response) {
//       return handleErrorResponse(response);
//     } else {
//       return {
//         success: false,
//         message: "Erro inesperado: resposta indefinida.",
//       };
//     }
//   } catch (error) {
//     return handleHttpError(error);
//   }
// }
