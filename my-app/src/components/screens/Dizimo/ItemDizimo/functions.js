export function translateMonth(monthEnglish) {
  switch (monthEnglish) {
    case "01":
      return ["january", "JANEIRO"];
    case "02":
      return ["february", "FEVEREIRO"];
    case "03":
      return ["march", "MARÇO"];
    case "04":
      return ["april", "ABRIL"];
    case "05":
      return ["may", "MAIO"];
    case "06":
      return ["june", "JUNHO"];
    case "07":
      return ["july", "JULHO"];
    case "08":
      return ["august", "AGOSTO"];
    case "09":
      return ["september", "SETEMBRO"];
    case "10":
      return ["october", "OUTUBRO"];
    case "11":
      return ["november", "NOVEMBRO"];
    case "12":
      return ["december", "DEZEMBRO"];
    default:
      return "NOT MONTH";
  }
}
