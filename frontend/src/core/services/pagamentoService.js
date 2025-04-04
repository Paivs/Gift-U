import { BehaviorSubject, firstValueFrom } from "rxjs";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { environment } from "@/.env";
import EfiPay from "payment-token-efi";
import { apiClient } from "./apiClient";



//------------------- PIX
// {
//   site_id: string;
//   devedor: {
//     cpf: string;
//     nome: string;
//   };
//   solicitacaoPagador: string;
// }

export async function createPixPayment(paymentData) {
  return await apiClient(
    "pagamento/pix",
    {
      method: "POST",
      body: JSON.stringify(paymentData),
    },
    {
      validator: () => validatePixData(paymentData),
      validationMessage: "Preencha todos os campos obrigatórios antes de continuar.",
      errorMessage: "Não foi possível processar o pagamento Pix.",
    }
  );
}

function validatePixData(paymentData) {
  if (
    !paymentData.site_id ||
    !paymentData.devedor.cpf ||
    !paymentData.devedor.nome ||
    !paymentData.solicitacaoPagador
  ) {
    throw new Error("Todos os campos são obrigatórios.");
  }
  return { valid: true, message: "Validação bem-sucedida." };
}

//------------------- CARTÃO

export async function createCardPayment(paymentData) {
  return await apiClient(
    "pagamento/cartao",
    {
      method: "POST",
      body: JSON.stringify(paymentData),
    },
    {
      validator: () => validateCardData(paymentData),
      validationMessage: "Preencha corretamente os dados do cartão.",
      errorMessage: "Erro ao processar o pagamento com cartão.",
    }
  );
}

function validateCardData(paymentData) {
  const { site_id, payment } = paymentData;
  const { credit_card } = payment || {};
  const { customer, payment_token, billing_address } = credit_card || {};

  if (!site_id || !credit_card || !payment_token) {
    throw new Error("site_id, credit_card e payment_token são obrigatórios.");
  }

  if (
    !customer?.name ||
    !customer?.cpf ||
    !customer?.email ||
    !customer?.birth ||
    !customer?.phone_number
  ) {
    throw new Error("Todos os campos do cliente são obrigatórios.");
  }

  if (
    !billing_address?.street ||
    !billing_address?.number ||
    !billing_address?.neighborhood ||
    !billing_address?.zipcode ||
    !billing_address?.city ||
    !billing_address?.state
  ) {
    throw new Error("Todos os campos do endereço de cobrança são obrigatórios.");
  }
}

//---------------------------------------------------------
//----------------------- metadados

async function identifyBrand(number) {
  try {
    const brand = await EfiPay.CreditCard.setCardNumber(
      number
    ).verifyCardBrand();

    console.log("Bandeira: ", brand);
    return brand;
  } catch (error) {
    return undefined;
  }
}

async function generatePaymentToken(
  number,
  cvv,
  expirationMonth,
  expirationYear
) {
  const modo = environment.production ? "production" : "sandbox";

  try {
    const brand = await identifyBrand(number);
    const result = await EfiPay.CreditCard.setAccount(
      environment.backend.identificador
    )
      .setEnvironment(modo)
      .setCreditCardData({
        brand: brand ?? "",
        number: number,
        cvv: cvv,
        expirationMonth: expirationMonth,
        expirationYear: expirationYear,
        reuse: false,
      })
      .getPaymentToken();

    console.log(result);

    if ("payment_token" in result && "card_mask" in result) {
      const payment_token = result.payment_token;
      const card_mask = result.card_mask;

      console.log("payment_token", payment_token);
      console.log("card_mask", card_mask);

      return payment_token;
    } else {
      console.log("Erro na resposta:", result);
      return undefined;
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
}