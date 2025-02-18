console.log("script loaded...");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

console.log("The params is:", urlParams);

const mycategory = urlParams.get("slug");

console.log("The category is:", mycategory);

const listContainer = document.querySelector(".produkt_liste_container");
fetch(`https://dummyjson.com/products/category/${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data.products
    .map(
      (product) =>
        ` <div class="card ${product.stock === 0 && "udsolgt_f"}">
                <img src="${product.images[1]}" alt="">
                <h3>${product.title}</h3>
                <h4>${product.warrentyinformation}|${product.brand}</h4>
                <p>${product.price},-</p>
                <a href="detalje.html?id=${product.id}">Læs mere</a>


 <div class="rabat ${product.discountPercentage && "rabat_fr"} ">
                    <p>${product.discountPercentage}%</p>
                </div>

                <div class="udsolgt ${product.stock === 0 && "udsolgt_fr"}">
                    <p>Udsolgt</p>
                </div>
            </div>`
    )
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}
