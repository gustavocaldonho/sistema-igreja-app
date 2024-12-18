export const formatMoney = (input) => {
  if (typeof input === "number") {
    input = (input * 100).toFixed(0); // Multiplica por 100 para trabalhar em centavos
  } else if (typeof input !== "string") {
    console.warn("O valor fornecido não é válido:", input);
    return "0,00";
  }

  const numericValue = input.replace(/\D/g, ""); // Remove caracteres não numéricos
  const formattedValue = (numericValue / 100)
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return formattedValue;
};

export const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const parseFormattedNumber = (value) => {
  if (typeof value !== "string") {
    // throw new Error("O valor deve ser uma string.");
    return false;
  }
  const parsedValue = value.replace(/\./g, "").replace(",", ".");
  const floatNumber = parseFloat(parsedValue);
  if (isNaN(floatNumber)) {
    // throw new Error("O valor formatado é inválido.");
    return false;
  }
  return floatNumber;
};
