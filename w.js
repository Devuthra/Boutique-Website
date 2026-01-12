const bar=document.getElementById("bar");
const close=document.getElementById("close");
const nav=document.getElementById("navbar");

if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    })
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
}

//contact

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('responseMessage').classList.add('show');
  setTimeout(() => {
    document.getElementById('responseMessage').classList.remove('show');
  }, 3000); // Hide after 3 seconds
});

//logout
function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}

//wishlist

function addToWishlist() {
    const image = document.getElementById("mainImg").src;
    const name = document.querySelector(".single-pro-details h4").innerText;
    const price = document.querySelector(".single-pro-details h2").innerText;

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Prevent duplicate items
    const exists = wishlist.some(item => item.name === name);
    if (exists) {
        alert("Item already in wishlist ❤️");
        return;
    }

    wishlist.push({
        image: image,
        name: name,
        price: price
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Added to wishlist ❤️");
}

//card

function addToCartAndPay() {
    const image = document.getElementById("mainImg").src;
    const name = document.querySelector(".single-pro-details h4").innerText;
    const priceText = document.querySelector(".single-pro-details h2").innerText;
    const price = priceText.replace("$", "");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        image: image,
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    // Redirect to payment page
    window.location.href = "payment.html";
}

