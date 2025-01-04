

const loadProduct =()=>{
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>displayProduct(data));
};


const displayProduct = (products)=>{
   const  container = document.getElementById("product-container");
   products.forEach(product => {
    const div = document.createElement("div");
    div.innerHTML=`<img class="cart-image" src=${product.image} alt="product image" />
    <h5></h5>
    <p></p>
    <button> Detail</button>
    <button> Add to Cart</button>`;

    container.appendChild(div);
   });
}


loadProduct();