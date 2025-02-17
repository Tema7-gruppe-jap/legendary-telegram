console.log("script loaded...");

let categorybuttonContainer = document.querySelector(".category_list_container");
fetch(`https://dummyjson.com/products/categories`)
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(data) {
  const products = [{ category: "Beauty" }, { category: "Home Decoration" }, { category: "Fragrances" }, { category: "Furniture" }, { category: "Groceries" }, { category: "Kitchen Accessories" }, { category: "Laptops" }, { category: "Mens Shirts" }, { category: "Mens Shoes" }, { category: "Mens Watches" }, { category: "Mobile Accessories" }, { category: "Motorcycle" }, { category: "Skin Care" }, { category: "Smartphones" }, { category: "Sports Accessories" }, { category: "Sunglasses" }, { category: "Tablets" }, { category: "Tops" }, { category: "Vehicle" }, { category: "Womens Bags" }, { category: "Womens Dresses" }, { category: "Womens Jewellery" }, { category: "Womens Shoes" }, { category: "Womens Watches" }];
  products
    .filter((element) => element.category == "Smartphones", "Laptops", "Mobile Accesories", "Tablets")
    .map(
      (element) =>
        ` 
                    <a href="produktliste.html?category=${element.category}">${element.category}</a> 
    
       
    
           `
    )
    .join("");

  console.log(data);
  categorybuttonContainer.innerHTML = markup;
}
