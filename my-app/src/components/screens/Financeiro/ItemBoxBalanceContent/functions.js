export function translateMonth(month) {
  const monthTranslations = {
    january: "JANEIRO",
    february: "FEVEREIRO",
    march: "MARÇO",
    april: "ABRIL",
    may: "MAIO",
    june: "JUNHO",
    july: "JULHO",
    august: "AGOSTO",
    september: "SETEMBRO",
    october: "OUTUBRO",
    november: "NOVEMBRO",
    december: "DEZEMBRO",
  };

  return monthTranslations[month.toLowerCase()] || month;
}
