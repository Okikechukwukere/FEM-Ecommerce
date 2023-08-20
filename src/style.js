const cartBtn = document.querySelector(".check-cart")
const addToCart = document.querySelector(".add-to-cart")
const increase = document.querySelector("#plus")
const decrease = document.querySelector("#minus")
const thumnails = document.querySelectorAll(".prod-thumb")
const mainImage = document.querySelector(".main-img")
const cartModal = document.querySelector(".cart-box")
const lightBox = document.querySelector(".product-modal")
const quantity = document.querySelector(".qty")
const closeLightBox = document.querySelector(".close-modal")
const next = document.querySelector(".next-container")
const prev = document.querySelector(".prev-container")
const cartQty = document.querySelector(".cart-qty-display")
const cartItem = document.querySelector(".cart-item")
const checkout = document.querySelector(".checkout")
// const deleteItem = document.querySelector(".del-cart-item")

// cartQty.classList.add('hide-modal')

mainImage.addEventListener('click', ()=>{
    lightBox.classList.remove('hide-modal');
})

closeLightBox.addEventListener('click', ()=>{
    lightBox.classList.add('hide-modal');
})

cartBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('hide-modal');
})

increase.addEventListener('click', ()=>{
    quantity.textContent ++;
})

decrease.addEventListener('click', ()=>{
    if (quantity.textContent > 0){
        quantity.textContent --
    };
})

addToCart.addEventListener('click', ()=>{
    if(quantity.textContent > 0){
        cartQty.classList.remove('hide-modal')
        cartQty.textContent = quantity.textContent;
        quantity.textContent = 0;

        cartItem.innerHTML = `
        <img
          src="../images/image-product-1-thumbnail.jpg"
          alt=""
          class="cart-img"
        />
        <div class="cart-details">
          <p class="cart-item-name">Fall Limited Edition Sneakers</p>
          <div class="cart-pricing">
            <p class="cart-qty-details">
              <span class="cart-item-price">$125.00</span> x
              <span class="cart-item-qty">${cartQty.textContent}</span>
            </p>
            <p class="cart-item-total">$${cartQty.textContent * 125}</p>
          </div>
        </div>
        <img src="../images/icon-delete.svg" alt="" class="del-cart-item" />`

        checkout.classList.remove("hide-modal")

        document.querySelector('.del-cart-item').addEventListener("click", ()=>{
                cartQty.classList.add("hide-modal");
                cartItem.innerHTML = `<p class="empty-cart">Your cart is empty</p>`
                checkout.classList.add("hide-modal")
        })
    }
})




