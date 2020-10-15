const formatDate = (date: string):string => {
  const dateFormatted = new Date(date);
  return dateFormatted.toLocaleDateString("pt-br", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}

export default formatDate;
