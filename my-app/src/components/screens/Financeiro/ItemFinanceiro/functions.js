export function formatDateTime(isoDateString) {
  if (typeof isoDateString !== "string") {
    return null;
  }
  const date = new Date(isoDateString);
  if (isNaN(date)) {
    return null;
  }
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Mês é 0-indexado
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  // return `${day}/${month}/${year} ${hours}:${minutes}`;
  return `${day}/${month}/${year}`;
}
