export const formatCurrency = (x) => {
  return "⦵" + x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
