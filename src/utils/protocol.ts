export const generateQuotationProtocol = () => {
  const year = new Date().getFullYear();
  const random = Math.floor(10000 + Math.random() * 90000);
  return `EXC-${year}-${random}`;
};
