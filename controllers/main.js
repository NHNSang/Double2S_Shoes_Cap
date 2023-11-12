// Test
let loiChao = 'Hello'
console.log(loiChao)

// For product
function getProduct() {
    var promise = axios({
      method: 'GET',
      url: 'https://shop.cyberlearn.vn/api/Product',
    });
    promise
      .then(function (result) {
        console.log(result.data.content);
        RanderProduct(result.data.content);
      })
      .catch(function (error) {
        console.log(error);
      });
}
getProduct()
function RanderProduct(arr) {
    var content = '';
    for (var i = 0; i < arr.length; i++) {
      var productShoes = arr[i];
      content += `
      <div class="product_card col-4 mx-2">
      <div class="card h-100 ">
        <img src=${productShoes.image} class="card-img-top" alt="Sales Pic ${productShoes.id}">
        <div class="card-sale">
          <p>SALE</p>
        </div>
        <div class="card-body">
          <div class="card-title">
            <a href="#">
             <h5 >${productShoes.name}</h5>
            </a>
          </div>
          <div class="card-price-rate">
            <div class="info_prices">
              <h5 class="card-text">
                <span>$${productShoes.price}</span>
                <span>$250</span>
                </h5>
              </div>
              <div class="info_stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
          </div>
          <div class="view-action">
            <div class="view">
              <a href="../views/detail.html?id=${productShoes.id}" >
              <span>View Details</span>
              </a>
            </div>
            <div class="action">
            <a href="#">
              <i class="fa fa-search"></i>
            </a>
            <a href="#">
                <i class="fa-solid fa-heart"></i>
            </a>
            <a href="#">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
      
      `
    }
  
    document.querySelector('.show_product').innerHTML = content;
  }

// For Feature
function getFeature() {
    var promise = axios({
      method: 'GET',
      url: 'https://shop.cyberlearn.vn/api/Product/getProductByFeature',
    });
    promise
      .then(function (result) {
        console.log(result.data.content);
        RanderFeature(result.data.content);
      })
      .catch(function (error) {
        console.log(error);
      });
}
getFeature()
function RanderFeature(arr) {
    var content = '';
    for (var i = 0; i < arr.length; i++) {
      var productShoes = arr[i];
      content += `
      <div class="feature_card col-3 col-md-6 col-lg-4">
      <div class="card h-100">
        <img src=${productShoes.image} class="card-img-top" alt="Sales Pic ${productShoes.id}">
        <div class="card-body">
            <a href="../views/detail.html?id=${productShoes.id}">
                <p class="card-title">${productShoes.name}</p>
            </a>
          <div class="info_stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <div class="info_prices mt-3">
            <h5 class="card-text">$${productShoes.price}</h5>
          </div>

        </div>
      </div>
        </div>
      
      `
    }
  
    document.querySelector('.feature_product').innerHTML = content;
}