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
const activeLightBox = document.querySelector(".main-modal-active")
const activeMainImg = document.querySelector(".main-active")
const navItems = document.querySelectorAll(".nav-item")
const navItem = document.querySelector(".nav-items")
const menus = document.querySelector(".menu")
const openMenu = document.querySelector(".open-menu")
const closeMenu = document.querySelector(".close-menu")
const menuOverlay = document.querySelector(".menu-overlay")

// console.log(menus)
menus.addEventListener("click", ()=>{
  openMenu.classList.toggle('hide');
  closeMenu.classList.toggle('hide');
  navItem.classList.toggle('toggle')
  menuOverlay.classList.toggle('hide')
})
mainImage.addEventListener('click', ()=>{
    lightBox.classList.remove('hide-modal');
})

closeLightBox.addEventListener('click', ()=>{
    lightBox.classList.add('hide-modal');
})

cartBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('hide-modal');
    cartModal.classList.contains('hide-modal') ? cartBtn.style.fill = '#a8afbf': cartBtn.style.fill = '#000';
})

increase.addEventListener('click', ()=>{
    quantity.textContent++;
})

decrease.addEventListener('click', ()=>{
    if (quantity.textContent > 0){
        quantity.textContent--;
    };
})

addToCart.addEventListener('click', ()=>{
    if(quantity.textContent > 0){
        cartQty.classList.remove('hide-modal');
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
        <img src="../images/icon-delete.svg" alt="" class="del-cart-item" />`;

        checkout.classList.remove("hide-modal");

        document.querySelector('.del-cart-item').addEventListener("click", ()=>{
                cartQty.classList.add("hide-modal");
                cartItem.innerHTML = `<p class="empty-cart">Your cart is empty</p>`;
                checkout.classList.add("hide-modal");
        })
    }
})

thumnails.forEach(thumbnail=>{
  thumbnail.addEventListener('click', ()=>{
    thumnails.forEach(thumb=> {
      thumb.classList.remove('active-slide');
    });

    let activeSlide = document.querySelectorAll(`#${thumbnail.id}`);

    activeSlide.forEach(slide=>{
      slide.classList.add('active-slide');
    })

    if(thumbnail.id === 'one'){      
      activeLightBox.style.transform = 'translateX(0)';
      activeMainImg.style.transform = 'translateX(0)';
    } else if(thumbnail.id === 'two'){
      activeLightBox.style.transform = 'translateX(-104%)';
      activeMainImg.style.transform = 'translateX(-104%)';
    }else if(thumbnail.id === 'three'){          
      activeLightBox.style.transform = 'translateX(-208%)';
      activeMainImg.style.transform = 'translateX(-208%)';
    }else if(thumbnail.id === 'four'){      
      activeLightBox.style.transform = 'translateX(-312%)';
      activeMainImg.style.transform = 'translateX(-312%)';
    }

  })
})

let curImg = 0;

prev.addEventListener('click', ()=>{
  curImg--;
  updateSlide();
})

next.addEventListener('click', ()=>{
  curImg++;
  updateSlide();
})

let updateSlide = ()=>{
  if(curImg <0){
      curImg = thumnails.length -5;
    } else if(curImg > thumnails.length -5){
        curImg = 0;
    }

  activeLightBox.style.transform = `translateX(-${curImg * 104}%)`;
  activeMainImg.style.transform = `translateX(-${curImg * 104}%)`;

  thumnails.forEach(thumbnail=>{
    thumbnail.classList.remove('active-slide');
  })

  let activeSlide = document.querySelectorAll(`#${thumnails[curImg].id}`);

    activeSlide.forEach(slide=>{
      slide.classList.add('active-slide');
    })
}

// navItems.forEach(navItem=>{
//   navItem.addEventListener('click', ()=>{
//     navItems.forEach(item=> {
//       item.style.color = '#807e7e';
//     });
//       navItem.style.color = '#000';
//   })
// })