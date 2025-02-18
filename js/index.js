const categories = ["smartphones", "laptops", "mobile-accessories", "tablets"];

let categorybuttonContainer = document.querySelector(".category_list_container");
fetch(`https://dummyjson.com/products/categories`)
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(data) {
  const products = data
    .filter((element) => categories.includes(element.slug))
    .map((element) => `<a href="produktliste.html?slug=${element.slug}">${element.name}</a>`)
    .join("");

  console.log(data);
  categorybuttonContainer.innerHTML = products;
}
