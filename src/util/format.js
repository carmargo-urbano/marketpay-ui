export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});


export const { format: formatDate } = new Intl.DateTimeFormat('pt-BR', {
  year: "numeric",
  month: "long",
  day: "2-digit"
});
