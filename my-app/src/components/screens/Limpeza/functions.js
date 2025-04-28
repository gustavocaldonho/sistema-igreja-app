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
  const payedItems = items.filter((item) => item.payed).length;

  return { totalItems, payedItems };
}

export function sortCleaningItems(list) {
  return list.sort((a, b) => {
    if (a.setor !== b.setor) {
      return a.setor - b.setor; // Primeiro ordena pelo setor
    }
    return a.name.localeCompare(b.name); // Se setor for igual, ordena pelo nome
  });
}
