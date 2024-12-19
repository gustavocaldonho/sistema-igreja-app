export function formatValueFinancial(value) {
  const absoluteValue = Math.abs(value);
  return absoluteValue
    ? absoluteValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    : value;
}
