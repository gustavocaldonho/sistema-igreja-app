export function translateMonth(monthEnglish) {
  switch (monthEnglish) {
    case "01":
      return ["january", "JANEIRO", "JAN"];
    case "02":
      return ["february", "FEVEREIRO", "FEV"];
    case "03":
      return ["march", "MARÇO", "MAR"];
    case "04":
      return ["april", "ABRIL", "ABR"];
    case "05":
      return ["may", "MAIO", "MAI"];
    case "06":
      return ["june", "JUNHO", "JUN"];
    case "07":
      return ["july", "JULHO", "JUL"];
    case "08":
      return ["august", "AGOSTO", "AGO"];
    case "09":
      return ["september", "SETEMBRO", "SET"];
    case "10":
      return ["october", "OUTUBRO", "OUT"];
    case "11":
      return ["november", "NOVEMBRO", "NOV"];
    case "12":
      return ["december", "DEZEMBRO", "DEZ"];
    default:
      return "NOT MONTH";
  }
}
