const productsList = require('./database'); 

const calculateTotalCost = (customerName, products, discount = 0) => {
  let totalCost = 0;

  for (const product of products) {
    totalCost += product.price * product.quantity;
  }

  if (discount > 0 && discount <= 100) {
    const discountAmount = (totalCost * discount) / 100;
    totalCost -= discountAmount;
  }

  let message = `Olá, ${customerName}! O valor total da sua compra é R$ ${totalCost.toFixed(2)},`;

  if (discount > 0 && discount <= 100) {
    message += ` você obteve um desconto de ${discount}% no valor total.`;
  }

  if (discount == 0) {
    message += '(sem desconto).';
  }

  return message;
};


const customerName = 'João';
const discountPercentage = 15;

const result = calculateTotalCost(customerName, productsList, discountPercentage);
console.log(result);
