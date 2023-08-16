import { productsList } from "./database.js";

const calculateTotalCost = (customerName, products, discount = 0) => {
    let totalCost = 0;
  
    products.forEach(product => {
      totalCost += product.price * product.quantity;
    });
  
    const discountedTotal = discount > 0 ? totalCost * (1 - discount / 100) : totalCost;
    const formattedTotal = discountedTotal.toFixed(2);
  
    if (discount > 0) {
      return `Olá, ${customerName}! O total da sua compra é R$ ${formattedTotal} (${discount}% de desconto).`;
    } else {
      return `Olá, ${customerName}! O total da sua compra é R$ ${formattedTotal} (sem desconto).`;
    }
  };

  console.log(calculateTotalCost("Joao", productsList));
  console.log(calculateTotalCost("Maria", productsList, 15));
  console.log(calculateTotalCost("Gabriel", productsList));
  console.log(calculateTotalCost("Gabriela", productsList, 90));