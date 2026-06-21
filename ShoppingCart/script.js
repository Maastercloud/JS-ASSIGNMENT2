let prod = document.getElementById("products");
let cartArr = [];
let cart = document.getElementById("cart");
let total = document.getElementById("total");

const products = [
    {
        name: "Trouser",
        price: 20
    },
    {
        name: "Fan",
        price: 50
    },
    {
        name: "Shoe", 
        price: 70
    },
    
    {
        name:"Chair",
        price: 175
    },
    {
        name: "phone",
        price: 189
    }
];



products.forEach((product, index)=>{
    prod.innerHTML+=`
    <div>
      <p>${product.name}---$${product.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    </div>
    `
});
function renderCart(){
cart.innerHTML = "";
total= 0;
cartArr.forEach((item, index)=>{
    cart.innerHTML+=`
    <div>
      <p>${item.name}---${item.price}</p>
      <button onclick="removeBtn(${index})">Remove</button>
    </div>
    `
   total +=item.price; 
});
console.log(total);
document.getElementById("total").innerHTML = total;
}
function addToCart(index){
    console.log(index);
    console.log(products[index]);
    cartArr.push(products[index]);
    renderCart();
}
function removeBtn(index){
    
cartArr.splice(index, 1);
renderCart();

}