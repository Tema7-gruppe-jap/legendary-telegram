console.log("script loaded...");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const myproduct = urlParams.get("id");

console.log("The productid is:", myproduct);

let productId = myproduct;
let productContainer = document.querySelector(".productContainer");

fetch(`https://dummyjson.com/products/${productId}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(data) {
  productContainer.innerHTML = ` <img class="${data.stock === 0 && "udsolgt_f"} marginleft produktfoto" src="${data.images[1]}" alt="">


            <div class="flex">

               <div class="rabatprodukt ${data.discount && "rabatprodukt_fr"} ">
                    <p>${data.discount}%</p>
                </div>

                <div class="udsolgtprodukt ${data.soldout && "udsolgtprodukt_fr"}">
                    <p>Udsolgt</p>
                </div>
                <h2 class="produktinfo">Produkt information</h2>
                <div>
                    <h3 class="specifik marginleft">Modelname</h3>
                    <p class="marginleft">${data.productdisplayname}</p>
                </div>
                <div>
                    <h3 class="specifik marginleft">Inventory number</h3>
                    <p class="marginleft nummer">${data.id}</p>
                </div>     
          
            <div class="flex kurv">
                <h3>${data.productdisplayname}</h3>
                <h4>${data.articletype}|${data.brandname}</h4>
                <p>${data.price},-</p>
                <div>
                    <p class="tilføjkurv">Tilføj kurv</p>
                </div>
            </div>
`;
}
