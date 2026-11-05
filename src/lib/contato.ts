export const WHATSAPP_NUMERO = "5585998431249";

const MENSAGEM_PADRAO = "Olá! Vim pelo site da Someli e gostaria de falar com um contador.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(MENSAGEM_PADRAO)}`;

export const INSTAGRAM_URL = "https://www.instagram.com/somelicontabilidade/";

export const AVALIACOES_GOOGLE_URL =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Someli Assessoria Contábil");

/** Sistema interno do escritório (login da equipe). Por enquanto só existe a área do contador. */
export const AREA_CONTADOR_URL = "https://someli-contabilidade.vercel.app/";
