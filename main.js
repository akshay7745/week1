const products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://picsum.photos/200/300",
    price: 19.99,
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://picsum.photos/200/300",
    price: 29.99,
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://picsum.photos/200/300",
    price: 39.99,
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://picsum.photos/200/300",
    price: 49.99,
  },
  {
    id: 5,
    name: "Product 5",
    image: "https://picsum.photos/200/300",
    price: 59.99,
  },
  {
    id: 6,
    name: "Product 6",
    image: "https://picsum.photos/200/300",
    price: 69.99,
  },
  {
    id: 7,
    name: "Product 7",
    image: "https://picsum.photos/200/300",
    price: 79.99,
  },
  {
    id: 8,
    name: "Product 8",
    image: "https://picsum.photos/200/300",
    price: 89.99,
  },
  {
    id: 9,
    name: "Product 9",
    image: "https://picsum.photos/200/300",
    price: 99.99,
  },
  {
    id: 10,
    name: "Product 10",
    image: "https://picsum.photos/200/300",
    price: 109.99,
  },
  {
    id: 11,
    name: "Product 11",
    image: "https://picsum.photos/200/300",
    price: 119.99,
  },
  {
    id: 12,
    name: "Product 12",
    image: "https://picsum.photos/200/300",
    price: 129.99,
  },
  {
    id: 13,
    name: "Product 13",
    image: "https://picsum.photos/200/300",
    price: 139.99,
  },
  {
    id: 14,
    name: "Product 14",
    image: "https://picsum.photos/200/300",
    price: 149.99,
  },
  {
    id: 15,
    name: "Product 15",
    image: "https://picsum.photos/200/300",
    price: 159.99,
  },
  {
    id: 16,
    name: "Product 16",
    image: "https://picsum.photos/200/300",
    price: 169.99,
  },
  {
    id: 17,
    name: "Product 17",
    image: "https://picsum.photos/200/300",
    price: 179.99,
  },
  {
    id: 18,
    name: "Product 18",
    image: "https://picsum.photos/200/300",
    price: 189.99,
  },
  {
    id: 19,
    name: "Product 19",
    image: "https://picsum.photos/200/300",
    price: 199.99,
  },
  {
    id: 20,
    name: "Product 20",
    image: "https://picsum.photos/200/300",
    price: 209.99,
  },
];

const cartData = {
  totalAmount: 0,
  items: [],
};
const productParent = document.querySelector(".products");

const cartItemsWrapper = document.querySelector(".cart-items-wrapper");
productParent.addEventListener("click", (e) => {
  if (e.target.classList.contains("cartBtn")) {
    let productId = e.target.parentElement.dataset.id;
    addToCart(productId);
  }
});

// const sortCartData = ()+
cartItemsWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    console.log(e.target);
    let productId = e.target.dataset.id;
    console.log("id", productId);
    removeFromCart(productId);
  }
});
function addToCart(id) {
  let product = cartData.items.find((item) => item.id == id);
  if (!product) {
    console.log("No product found");
    product = products.find((item) => item.id == id);
    cartData.totalAmount += product.price;
    cartData.items.push({ ...product, quantity: 1 });
    console.log("cart data", cartData);
  } else {
    cartData.totalAmount += product.price;
    product.quantity++;
    console.log("cart data", cartData);
  }

  updateCart();
}
function updateCart() {
  const cartItems = cartData.items.map((product) => {
    return `<div   class="cart-item-container">
          <div"  class="cart-item">
            <img class="cart-img"
              src="${product.image}"
              alt="cart item"
            />
            <h2>${product.name}</h2>
            <h3>${product.price}</h3>
          </div>
          <button data-id="${product.id} class="remove">Remove From Cart</button>
        </div>`;
  });
  cartItemsWrapper.innerHTML = `${cartItems}
  <div>Total cart amount :<span>${cartData.totalAmount}</span>
  </div>`;
}
function removeFromCart(id) {}

const productContainer = document.querySelector(".products");

// const productsNodeList = [...document.querySelectorAll(".product")];

// console.log("Products list", productsNodeList);

window.addEventListener("DOMContentLoaded", () => {
  const productList = products.map((item) => {
    return `<div class="product" data-id='${item.id}'>
          <img src="${item.image}" alt="${item.name}" />
          <h2>${item.name}</h2>
          <h3>${item.price}</h3>
          <button class="cartBtn">Add to Cart</button>
        </div>
    `;
  });
  productContainer.innerHTML = productList;
});
