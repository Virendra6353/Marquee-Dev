let products = JSON.parse(localStorage.getItem("products")) || [];
const create = document.getElementById("add");
let Pname = document.getElementById("name");
let price = document.getElementById("price");
let qua = document.getElementById("qua");
let cate = document.getElementById("Category");


let cart = [];

create.addEventListener("click",function(e){
    e.preventDefault();

        const exist = products.find(
    p => p.name.toLowerCase() === Pname.value.toLowerCase()
);

    if(!(exist) && Pname.value != "" && price.value > 0 && qua.value > 0 && cate.value != ""){
        let product = {
            name : Pname.value,
            price : +price.value,
            quantity : +qua.value,
            category : cate.value
        }
        products.push(product);
        localStorage.setItem("products",JSON.stringify(products));
    }

})


const disp = document.getElementById("disp");
disp.innerHTML = ""

products.forEach(product => {
    const card = document.createElement("div")
    card.classList.add("card");
    card.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: ₹${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
            <p>Category: ${product.category}</p>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
            <button class="addCart">Add to cart</button>
        `;
    
    disp.append(card);
    let edit = card.querySelector(".edit");

edit.addEventListener("click",function(e){
    const card = e.target.closest(".card")

    document.getElementById("ed").style.display = "block";
    
    document.getElementById("editName").value = product.name;
    
    
    document.getElementById("editPrice").value = product.price;
    document.getElementById("editQuantity").value = product.quantity;
   
    document.getElementById("editCategory").value = product.category;

    const save = document.getElementById("save")

    save.addEventListener("click",function(e){
          product.name = editName.value;
        product.price = +editPrice.value;
    product.quantity = +editQuantity.value;
    product.category = editCategory.value;

    localStorage.setItem("products", JSON.stringify(products));

    document.getElementById("ed").style.display = "none";

    })
   
})
 let del = card.querySelector(".delete");
    del.addEventListener("click",function(e){
        products = products.filter(p => p !== product);
        localStorage.setItem("products", JSON.stringify(products));
    })

    let addcart = card.querySelector(".addCart")
    addcart.addEventListener("click",function(e){
        const card = e.target.closest(".card")
       let cartIt = cart.find(p => p.name === product.name);
        if(cartIt){
            if(cartIt.cartquantity < product.quantity){
            cartIt.cartquantity++;}else{
                alert("Max quantity rached");
                return;
            }
        }else{
             cartIt = {
                ...product,
                cartquantity :1,
            }
            cart.push(cartIt)
        }
        localStorage.setItem("cart", JSON.stringify(cart));

    })
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartDiv = document.getElementById("cart");

cartDiv.innerHTML = "";

cart.forEach(item => {

    const card = document.createElement("div");

    card.classList.add("cart-card");

    card.innerHTML = `
        <h2>${item.name}</h2>
        <p>Price : ₹${item.price}</p>
        <p>Quantity : ${item.cartquantity}</p>
        <p>Category : ${item.category}</p>
        <p>Total : ₹${item.price * item.cartquantity}</p>
    `;

    cartDiv.appendChild(card);

});


const totalProducts = cart.length;

const totalQuantity = cart.reduce((sum, item) => {
    return sum + item.cartquantity;
}, 0);

const grandTotal = cart.reduce((sum, item) => {
    return sum + item.price * item.cartquantity;
}, 0);

const summary = document.getElementById("summary");

summary.innerHTML = `
    <h2>Cart Summary</h2>
    <p>Total Products : ${totalProducts}</p>
    <p>Total Quantity : ${totalQuantity}</p>
    <p>Grand Total : ₹${grandTotal}</p>
`;


});





