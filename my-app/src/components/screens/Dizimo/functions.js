export function getMonth(data) {
  return data.slice(5, 7);
}

export function getYear(data) {
  return data.slice(0, 4);
}

export function getFormatDate(data) {
  if (data === null) {
    return "(não informado)";
  }
  const year = data.slice(0, 4);
  const month = data.slice(5, 7);
  const day = data.slice(8, 10);
  return `${day}/${month}/${year}`;
}

export function formatInReal(value) {
  if (isNaN(value)) {
    return "error";
  }

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function getExpiresDate(monthName) {
  // Mapeia os nomes dos meses para os seus índices (0 para janeiro, 1 para fevereiro, etc.)
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

  // Verifica se o mês fornecido é válido
  const monthIndex = months.indexOf(monthName.toLowerCase());
  if (monthIndex === -1) {
    return "[error]";
  }

  // Cria uma data com o primeiro dia do próximo mês
  const year = new Date().getFullYear(); // Pega o ano atual
  const lastDay = new Date(year, monthIndex + 1, 0); // O dia 0 do próximo mês retorna o último dia do mês atual

  // Formata a data como "dd/mm/yyyy"
  const day = lastDay.getDate().toString().padStart(2, "0"); // Garante que o dia tenha 2 dígitos
  const month = (lastDay.getMonth() + 1).toString().padStart(2, "0"); // Garante que o mês tenha 2 dígitos
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
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

export function sortMonths(data, order = 1) {
  const monthOrder = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
  };

  // 1: crescente, 0: decrescente
  const orderFactor = order === 0 ? -1 : 1;

  return data.sort(
    (a, b) => (monthOrder[a.month] - monthOrder[b.month]) * orderFactor
  );
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
