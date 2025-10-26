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
    const valor = parseInt(item.value)/100 || 0;
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

export function converterParaCentavos(valorString) {
  if (typeof valorString !== "string") {
    console.error("Erro: o valor precisa ser uma string.");
    return null;
  }

  // Remove espaços, símbolo de moeda e outros caracteres não numéricos (exceto vírgula, ponto e sinal)
  let valorLimpo = valorString.trim().replace(/[^\d,.-]/g, "");

  // Substitui vírgula por ponto para padronizar o formato decimal
  valorLimpo = valorLimpo.replace(",", ".");

  // Converte para número
  const numero = parseFloat(valorLimpo);

  // Valida se é um número
  if (isNaN(numero)) {
    console.error("Erro: valor inválido para conversão:", valorString);
    return null;
  }

  // Converte para centavos e retorna inteiro
  return Math.round(numero * 100);
}

