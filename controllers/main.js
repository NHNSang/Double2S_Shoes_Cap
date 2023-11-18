// Test
let loiChao = "Hello";
console.log(loiChao);

// For product
let promise = axios({
  url: "https://shop.cyberlearn.vn/api/Product",
  method: "GET",
});
promise
  .then((res) => {
    // console.log(res.data.content);
    let arrShoe = res.data.content;

    le = 1;
    let all = "";
    let men = "";
    let women = "";
    let adidas = "";
    let nike = "";
    let converse = "";

    // todo: update content for all shoe section
    all = renderListShoe(arrShoe, "all");
    console.log("all", all);
    // document.getElementById("flash_shoes").innerHTML = `${all}`;

    // todo: update content for men shoe section
    // let men_shoe_arr = filterCategory(arrShoe, "men");
    men = renderListShoe(men_shoe_arr, "men");

    console.log("men", men);

    // todo: update content for women shoe section
    let women_shoe_arr = filterCategory(arrShoe, "women");
    women = renderListShoe(women_shoe_arr, "women");

    // todo: update content for adidas shoe section
    // let adidas_shoe_arr = filterCategory(arrShoe, "adidas");
    adidas = renderListShoe(adidas_shoe_arr, "adidas");

    // todo: update content for nike shoe section
    // let nike_shoe_arr = filterCategory(arrShoe, "nike");
    nike = renderListShoe(nike_shoe_arr, "nike");

    // todo: update content for converse shoe section
    // let converse_shoe_arr = filterCategory(arrShoe, "vans converse");
    converse = renderListShoe(converse_shoe_arr, "converse");
    console.log("converse", converse);

    // todo: rendering shoes following shoes categories
    // let cc = renderTab([all, men, women, adidas, nike, converse]);
    // console.log('cc',cc);
  })
  .catch((error) => {
    console.log("error", error);
  });

// For Feature
function getFeature() {
  var promise = axios({
    method: "GET",
    url: "https://shop.cyberlearn.vn/api/Product/getProductByFeature",
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
getFeature();
function RanderFeature(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var productShoes = arr[i];
    content += `
      <div class="feature_card my-4 col-12 col-md-6 col-lg-4">
      <div class="card ">
        <img src=${productShoes.image} class="w-100" alt="Sales Pic ${productShoes.id}">
        <div class="img_percent">
              <span>NEW</span>
        </div>
        <div class="img_interact">
                            <i
                              class="fa-regular fa-heart"
                              onclick="likeShoes(this)"
                            ></i>
                            <i class="fa fa-search"></i>
                          </div>
                          <div class="img_add">
                            <h5>QUICK ADD</h5>
                          </div>
        <div class="card-body">
            <a href="../pages/detail.html?id=${productShoes.id}">
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
      
      `;
  }

  document.querySelector(".feature_product").innerHTML = content;
}
