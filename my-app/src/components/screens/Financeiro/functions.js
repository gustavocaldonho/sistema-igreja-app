export function formatValueFinancial(value) {
  return value
    ? value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    : value;
}
