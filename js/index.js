const categories = ["Smartphones", "Laptops", "Mobile Accessories", "Tablets"];

let categorybuttonContainer = document.querySelector(".category_list_container");
fetch(`https://dummyjson.com/products/categories`)
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(data) {
  const products = data
    .filter((element) => categories.includes(element.name))
    .map((element) => `<a href="produktliste.html?name=${element.name}">${element.name}</a>`)
    .join("");

  console.log(data);
  categorybuttonContainer.innerHTML = products;
}
