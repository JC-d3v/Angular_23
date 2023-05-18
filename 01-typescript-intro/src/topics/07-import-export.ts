import { Product, taxCalculation } from "./06-function-destructuring";


const shoppingCart: Product[] = [
  {
    description: 'nokia',
    price: 100
  },
  {
    description: 'iPad',
    price: 250
  }
];


const [total, taxTotal] = taxCalculation({
  products: shoppingCart,
  tax: 0.15
});



console.log(`total ${total} totalTax ${taxTotal}`);

