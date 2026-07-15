const btn = document.querySelector(".cartBtn")

let i = 0;
const im = document.getElementById("im");
const til = document.getElementById("h2");
const price = document.getElementById("price");

const arr = {
    arr1 :["gshock.webp","kachara.webp","pant.jpg","shirt.webp","puma.webp"],
    arr2 :["G-shock","kachara seth","formals","Highlander shirt","Puma shoes"],
    arr3 :["Rs. 17000/-","deshaso Rupiya","Rs. 400/-","Rs. 1500/-","Rs. 6000/-"],
};

btn.onclick = function() {
    im.src = arr.arr1[i];
    til.textContent = arr.arr2[i];
    price.textContent = arr.arr3[i];
    i++;
    if(i == 5){
        i = 0;
    }
};