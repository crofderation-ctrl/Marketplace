let cart = 0;

function tambahCart(produk){

cart++;

document.getElementById("jumlahCart").innerHTML = cart;

alert(produk + " berhasil ditambahkan ke keranjang.");

}

const search = document.getElementById("search");

search.addEventListener("keyup", function(){

let keyword = this.value.toLowerCase();

let card = document.querySelectorAll(".card");

card.forEach(function(item){

let nama = item.querySelector("h3").innerHTML.toLowerCase();

if(nama.indexOf(keyword)>-1){

item.style.display="block";

}else{

item.style.display="none";

}

});

});