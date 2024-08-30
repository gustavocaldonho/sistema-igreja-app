export function translateMonth(monthEnglish) {
  switch (monthEnglish) {
    case "january":
      return "JANEIRO";
    case "february":
      return "FEVEREIRO";
    case "march":
      return "MARÇO";
    case "april":
      return "ABRIL";
    case "may":
      return "MAIO";
    case "june":
      return "JUNHO";
    case "july":
      return "JULHO";
    case "august":
      return "AGOSTO";
    case "september":
      return "SETEMBRO";
    case "october":
      return "OUTUBRO";
    case "november":
      return "NOVEMBRO";
    case "december":
      return "DEZEMBRO";
    default:
      return "NOT MONTH";
  }
}
