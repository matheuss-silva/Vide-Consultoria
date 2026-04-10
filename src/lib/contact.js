export const WHATSAPP_DISPLAY = "(63) 99278-6181";
export const WHATSAPP_NUMBER = "556392786181";
export const WHATSAPP_QUOTE_MESSAGE =
  "Olá! Vim pelo site e quero solicitar um orçamento para os serviços da empresa.";
export const WHATSAPP_GENERAL_MESSAGE =
  "Olá! Vim pelo site e gostaria de falar com a equipe. Tenho interesse em conhecer melhor os serviços e tirar algumas dúvidas.";

export const buildWhatsAppLink = (message) => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};
