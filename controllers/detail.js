const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get("id");
let getDetail = axios({
  url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
  method: "GET",
});
getDetail
  .then((res) => {
    // console.log(res);
    let product = res.data.content;
    let render = "";
    console.log(product);
    let { name, price, description, size, image, relatedProducts } = product;
    let shoeSize = "";
    for (var i = 0; i < size.length; i++) {
      shoeSize += `
      <div class="px-2">
        <div class="size_item mb-3 ${i == 0 ? "active" : ""}">${size[i]}</div>
      </div>`;
    }
    getEl("name").innerHTML = name;
    getEl("shoeName").innerHTML = name;
    getEl("price").innerHTML = `$${price}.00`;
    getEl("product_description").innerHTML = description;
    getEl("img").src = image;
    getEl("available-size").innerHTML = shoeSize;
    getEl("sizeInput").innerHTML = size[0];
    console.log("imager", image);

    for (let item of relatedProducts) {
      render += `
       <div class="sales_container text-center">
      <!-- todo: sale-img -->
      <div class="sales_img">
        <img src=${item.image} alt="Sales Pic 1" />
        <div class="img_interact">
          <i class="fa-regular fa-heart" onclick="likeShoes(this)"></i>
          <i class="fa-regular fa-images"></i>
        </div>
        <div class="img_add py-2">
          <h5>QUICK ADD</h5>
        </div>
      </div>
      <!-- todo: sale-info -->
      <div class="sales_info">
        <a class='text-decoration-none text-black' href="./detail.html?id=${item.id}">
          <h4>${item.name}</h4>
        </a>
        <div class="info_stars py-2">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <div class="info_prices">
          <h5>$${item.price}.00</h5>
        </div>
      </div>
    </div>
      `;
    }
    document.querySelector(".owl-carousel").innerHTML = render;
  })
  .catch((err) => {
    console.log(err);
  });

setTimeout(() => {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });
}, 500);

setInterval(() => {
  var sizes = document.querySelectorAll(".px-2 .size_item");
  for (var i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener("click", function () {
      let current = document.querySelector(".select_size .active");
      current.classList.remove("active");
      this.className += " active";
      let size = document.querySelector(".select_size .active").innerHTML;
      document.getElementById("sizeInput").innerHTML = size;
    });
  }
}, 2000);

setTimeout(() => {
  let currentPrice = document.getElementById("price").innerHTML;
  let handlePrice = currentPrice.slice(1) * 1;
  function tang() {
    let i = document.querySelector(".number").innerHTML * 1;
    i++;
    document.querySelector(".number").innerHTML = i;
    document.getElementById("price").innerHTML = `$${handlePrice * i}.00`;
  }
  function giam() {
    let i = document.querySelector(".number").innerHTML * 1;
    if (i > 1) {
      i--;
      document.querySelector(".number").innerHTML = i;
      document.getElementById("price").innerHTML = `$${handlePrice * i}.00`;
    } else document.querySelector(".number").innerHTML = 1;
  }

  document.querySelector(".minus .btn-change").onclick = () => {
    giam();
  };
  document.querySelector(".plus .btn-change").onclick = () => {
    tang();
  };
}, 500);
