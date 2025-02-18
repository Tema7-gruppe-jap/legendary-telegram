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

            <div>
<h1 class="titledetalje">${data.title}</h1>

               <div class="rabatprodukt ${data.discountPercentage && "rabatprodukt_fr"} ">
                    <p>${data.discountPercentage}%</p>
                </div>

                <div class="udsolgtprodukt ${data.stock === 0 && "udsolgtprodukt_fr"}">
                    <p>Udsolgt</p>
                </div>

                <h2 class="produktinfo">Produkt information</h2>
                <div>
                    <h3 class="specifik marginleft">Brand</h3>
                    <p class="marginleft">${data.brand}</p>
                </div>
                <div>
                    <h3 class="specifik marginleft">Inventory number</h3>
                    <p class="marginleft nummer">${data.id}</p>
                </div>     
          
            <div class="flex kurv">
                <h3>Pris før udsalg</h3>
                 <p class="bold"> <b>${data.price},- </b></p>
        

                <div>

                    <p>${data.warrantyInformation} |  ${data.shippingInformation}</p>
                    <p class="tilføjkurv">Tilføj kurv</p>
                </div>
            </div>
`;
}
