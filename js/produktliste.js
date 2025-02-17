console.log("script loaded...");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const mycategory = urlParams.get("category");

console.log("The category is:", mycategory);

const listContainer = document.querySelector(".produkt_liste_container");
fetch(`https://dummyjson.com/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data

    .map(
      (product) =>
        ` <div class="card ${product.soldout && "udsolgt_f"}">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
                <h3>${product.title}</h3>
                <h4>${product.warrentyinformation}|${product.brand}</h4>
                <p>${product.price},-</p>
                <a href="detalje.html?id=${product.id}">Læs mere</a>


 <div class="rabat ${product.discount && "rabat_fr"} ">
                    <p>${product.discountPercentage}%</p>
                </div>

                <div class="udsolgt ${product.soldout && "udsolgt_fr"}">
                    <p>Udsolgt</p>
                </div>
            </div>`
    )
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}
