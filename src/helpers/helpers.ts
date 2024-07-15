//* FORMAT DATES
export const formatServerDate = (dateString: string): string => {
  // Corta la cadena hasta antes del carácter 'T' para ignorar la hora y la zona horaria
  const dateOnlyString = dateString.split("T")[0];
  return dateOnlyString;
};

// console.log(inputDate);
// console.log("la fecha real es: " + realDate);

//* VALIDATE IF A DATE IS HAS NO EXPIRED, USED ON SUMMARY-REPORTS BEFORE SEND TO API AN RESQUEST
export const isDateValid = (dateString: string): boolean => {
  const inputDate = new Date(dateString);
  let realDate = new Date(inputDate.setDate(inputDate.getDate() + 1));

  const currentDate = new Date();

  const tomorrow = new Date(currentDate.setDate(currentDate.getDate() + 1));

  // Comparar la fecha de entrada con mañana
  return realDate >= tomorrow;
};
