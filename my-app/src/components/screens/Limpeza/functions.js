export function getCurrentMonthAndYear() {
  const date = new Date();
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const currentMonth = months[date.getMonth()]; // getMonth() retorna 0-11
  const currentYear = date.getFullYear(); // retorna o ano como número (int)

  return { month: currentMonth, year: currentYear };
}

export function countCleaningItems(items) {
  const totalItems = items.length;

  const checkedItems = items.filter((item) => item.value > 0).length;

  const valueTotal = items.reduce((soma, item) => {
    const valor = parseInt(item.value) || 0;
    return soma + valor;
  }, 0);

  return { totalItems, checkedItems, valueTotal };
}


export function sortCleaningItems(list) {
  return list.sort((a, b) => {
    if (a.setor !== b.setor) {
      return a.setor - b.setor; // Primeiro ordena pelo setor
    }
    return a.name.localeCompare(b.name); // Se setor for igual, ordena pelo nome
  });
}

export function converterDeCentavosParaReais(valorString) {
  if (typeof valorString !== "string") {
    console.error("Erro: o valor precisa ser uma string.");
    return null;
  }

  // Remove espaços e símbolo de moeda
  let valorLimpo = valorString.trim().replace(/[^\d,.-]/g, "");

  // Remove pontos de milhar
  valorLimpo = valorLimpo.replace(/\./g, "");

  // Substitui vírgula por ponto
  valorLimpo = valorLimpo.replace(",", ".");
``
  const numero = parseFloat(valorLimpo);

  if (isNaN(numero)) {
    console.error("Erro: valor inválido:", valorString);
    return null;
  }

  return Math.round(numero * 100);
}


