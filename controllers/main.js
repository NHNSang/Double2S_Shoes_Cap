// Test
let loiChao = 'Hello'
console.log(loiChao)

// For product
let promise = axios({
  url: "https://shop.cyberlearn.vn/api/Product",
  method: "GET",
});
promise
  .then((res) => {
    // console.log(res.data.content);
    let arrShoe = res.data.content;

    let stt = 1,
      all = "",
      men = "",
      women = "",
      adidas = "",
      nike = "",
      converse = "";

    all = renderListShoe(arrShoe, stt, all);
    console.log("demoooooo", all);
    let demo = renderTab([all, men, women, adidas, nike, converse]);
    console.log("dỳiosdiofgsoidgfisdgfigsd", demo);
  })
  .catch((error) => {
    console.log(error);
  });

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