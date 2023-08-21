const productsList = require('./database.js'); // Importar a base de dados

const calculateTotalCost = (customerName, products, discount = 0) => {
  let totalCost = 0;

  for (const product of products) {
    totalCost += product.price * product.quantity;
  }

  if (discount > 0 && discount <= 100) {
    const discountAmount = (totalCost * discount) / 100;
    totalCost -= discountAmount;
    
   console.log( ` Olá, ${customerName}!  O total da sua compra é R$ ${totalCost.toFixed(2)} (${discount}% no valor total.).`);
  }else{

      console.log(`Olá, ${customerName}! O valor total da sua compra é R$ ${totalCost.toFixed(2)} (sem desconto).`);
  }


  

  return calculateTotalCost;
};

calculateTotalCost("Fabio", productsList, 0);

