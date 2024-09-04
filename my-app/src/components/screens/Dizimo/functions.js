export function getMonth(data) {
  return data.slice(5, 7);
}

export function getYear(data) {
  return data.slice(0, 4);
}

export function getExpiresDate(data) {
  const year = data.slice(0, 4);
  const month = data.slice(5, 7);
  const day = data.slice(8, 10);
  return `${day}/${month}/${year}`;
}

export function getStatus(data) {
  switch (data) {
    case "active":
      return "PENDENTE";
    case "expired":
      return "NÃO PAGO";
    case "paid":
      return "PAGO";
    default:
      return "STATUS";
  }
}

export function getStatusIcon(status) {
  switch (status) {
    case "active":
      return "exclamation"; //pendente
    case "expired":
      return "remove"; //não pago
    case "paid":
      return "heart"; //pago
    default:
      return "minus";
  }
}

export function translateMonth(monthEnglish) {
  switch (monthEnglish) {
    case "january":
      return ["JANEIRO", "JAN"];
    case "february":
      return ["FEVEREIRO", "FEV"];
    case "march":
      return ["MARÇO", "MAR"];
    case "april":
      return ["ABRIL", "ABR"];
    case "may":
      return ["MAIO", "MAI"];
    case "june":
      return ["JUNHO", "JUN"];
    case "july":
      return ["JULHO", "JUL"];
    case "august":
      return ["AGOSTO", "AGO"];
    case "september":
      return ["SETEMBRO", "SET"];
    case "october":
      return ["OUTUBRO", "OUT"];
    case "november":
      return ["NOVEMBRO", "NOV"];
    case "december":
      return ["DEZEMBRO", "DEZ"];
    default:
      return "NOT MONTH";
  }
}
// export function translateMonth(monthEnglish) {
//   switch (monthEnglish) {
//     case "01":
//       return ["january", "JANEIRO", "JAN"];
//     case "02":
//       return ["february", "FEVEREIRO", "FEV"];
//     case "03":
//       return ["march", "MARÇO", "MAR"];
//     case "04":
//       return ["april", "ABRIL", "ABR"];
//     case "05":
//       return ["may", "MAIO", "MAI"];
//     case "06":
//       return ["june", "JUNHO", "JUN"];
//     case "07":
//       return ["july", "JULHO", "JUL"];
//     case "08":
//       return ["august", "AGOSTO", "AGO"];
//     case "09":
//       return ["september", "SETEMBRO", "SET"];
//     case "10":
//       return ["october", "OUTUBRO", "OUT"];
//     case "11":
//       return ["november", "NOVEMBRO", "NOV"];
//     case "12":
//       return ["december", "DEZEMBRO", "DEZ"];
//     default:
//       return "NOT MONTH";
//   }
// }
