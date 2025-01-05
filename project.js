

const loadProduct =()=>{
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>displayProduct(data));
};


const displayProduct = (products)=>{
   const  container = document.getElementById("product-container");
   products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML=`<img class="cart-image" src=${product.image} alt="product image" />
    <h5>${product.title.slice(0,20)}</h5>
    <h3>Price : ${product.price}</h3>
    <p>${product.description.slice(0,25)}</p>
    <button> Detail</button>
    <button onclick="handleCart('${product.title}','${product.price}')"> Add to Cart</button>`;

    container.appendChild(div);
   });
}


const handleCart=(title,price)=>{
    const container = document.getElementById("cart");
    const div = document.createElement("div");
    div.innerHTML =`<h3 class="price">${price}</h3>
                <p>${title.slice(0,10)}</p>`;

    container.appendChild(div);
};



loadProduct();