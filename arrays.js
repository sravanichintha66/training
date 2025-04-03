const products=[
    {id:1,name:"Laptop",price:75000,category:"Electronics"},
    {id:2,name:"Phone",price:50000,category:"Electronics"},
    {id:3,name:"Shoes",price:3000,category:"Fashion"},
    {id:4,name:"Watch",price:15000,category:"Accessories"},
    {id:5,name:"Tablet",price:40000,category:"Electronics"},
];

//all products that belong to Electronics category
const electronicsProducts=products.filter(product=>product.category==="Electronics");
console.log(electronicsProducts);

//total price of all products
const totalPrice=products.reduce((sum,product)=>sum+product.price,0);
console.log("Total Price is:",totalPrice);

//price in ascending order
products.sort((a,b)=>a.price-b.price);
console.log(products);

//most expensive product
let mostExpensiveProduct=products[0];
for(let i=1;i<products.length;i++){
    if(products[i].price>mostExpensiveProduct.price){
        mostExpensiveProduct=products[i];
    }
}
console.log("Most Expensive Product is:",mostExpensiveProduct);

//Remove product id:3
const updatedProducts=products.filter(product=>product.id!==3);
console.log(updatedProducts);