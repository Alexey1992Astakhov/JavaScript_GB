const dataProducts = JSON.parse(dataProductsJson);

let productTemplate = document.querySelector("#productTemplate .product");

let productBox = document.querySelector(".product__box");

dataProducts.forEach((element) => {
  let product = productTemplate.cloneNode(true);
  product.querySelector(".product__image img").src = element.image;
  product.querySelector(".product__info .product__title").textContent =
    element.title;
  let price = product.querySelector(".product__info .product__price");
  price.textContent = price.textContent + element.price;
  let color = product.querySelector(".product__info .product__color");
  color.textContent = color.textContent + element.color;
  let size = product.querySelector(".product__info .product__size");
  size.textContent = size.textContent + element.size;
  let brand = product.querySelector(".product__info .product__brand");
  brand.textContent = brand.textContent + element.brand;
  productBox.appendChild(product);
});
