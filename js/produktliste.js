console.log("script loaded...");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

console.log("The params is:", urlParams);

const mycategory = urlParams.get("slug");

console.log("The category is:", mycategory);

const listContainer = document.querySelector(".produkt_liste_container");
const selectElement = document.querySelector("#selectElement");

function showProducts(event) {
  fetch(`https://dummyjson.com/products/category/${mycategory}`)
    .then((response) => response.json())
    .then((data) => showList(data));

  function showList(data) {
    const markup = data.products
      .filter((product) => {
        if (event) {
          if (event.target.value == "discount") {
            return product.discountPercentage;
          } else if (event.target.value == "discountNotSoldOut") {
            return product.discountPercentage && product.stock > 0;
          } else {
            return true;
          }
        } else {
          return true;
        }
      })
      .map((product) => {
        console.log("product", product);
        return ` <div class="card ${product.stock === 0 && "udsolgt_f"}">
                <img src="${product.images[0]}" alt="">
                <h3>${product.title}</h3>
                <h4>${product.category}|${product.brand}</h4>
                <p>${product.price},-</p>
                
                <button class="buttonProduktliste"><a href="detalje.html?id=${product.id}">Se produkt</a></button>
                <div class="paaLager"> <i class="fa-solid fa-circle-check"></i> ${product.stock} På lager</div>


 <div class="rabat ${product.discountPercentage && "rabat_fr"} ">
                    <p>-${product.discountPercentage}%</p>
                </div>

                <div class="udsolgt ${product.stock === 0 && "udsolgt_fr"}">
                    <p>Udsolgt</p>
                </div>
            </div>`;
      })
      .join("");

    console.log(markup);
    listContainer.innerHTML = markup;
  }
}

selectElement.addEventListener("change", showProducts);

showProducts();
