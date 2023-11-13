renderListShoe = (arr, stt, result) => {
  //   for (let item of arr) {
  //     result += `
  //     <div class="col-12 col-md-6 col-lg-4">
  //       <div class="card h-100">
  //         <img src="${item.image}" class="card-img-top" alt="Sales Pic ${stt}">
  //         <div class="card-body">
  //           <div class="d-flex justify-content-between">
  //             <h5 class="card-title">${item.name}</h5>
  //             <div class="img_interact">
  //               <i class="fa-regular fa-heart" onclick="likeShoes(this)"></i>
  //               <i class="fa-regular fa-images"></i>
  //             </div>
  //           </div>
  //           <div class="info_stars">
  //                 <i class="fa-solid fa-star"></i>
  //               <i class="fa-solid fa-star"></i>
  //               <i class="fa-solid fa-star"></i>
  //               <i class="fa-solid fa-star"></i>
  //               <i class="fa-solid fa-star-half-stroke"></i>
  //           </div>
  //           <div class="info_prices mt-3">
  //             <h5 class="card-text">$${item.price.toFixed(2)}</h5>
  //           </div>
  // <a href="../views/detail.html?id=${
  //   item.id
  // }" class="btn btn-primary mt-3">View Details</a>
  //         </div>
  //       </div>
  //     </div>
  //   `;
  //     stt++;
  //   }

  //   return result;
  for (let item of arr) {
    result += `
      <div class="item_container">
              <div class="sales_img">
                <img src="${item.image}" alt="Sales Pic ${stt}" />
                <div class="img_percent">
                  <span>NEW</span>
                </div>
                <div class="img_interact">
                  <i class="fa-regular fa-heart" onclick="likeShoes(this)"></i>
                  <i class="fa fa-search"></i>
                </div>
                <div class="img_add">
                  <h5>QUICK ADD</h5>
                </div>
              </div>
              <!-- todo: sale-info -->
              <div class="sales_info">
            <a href="../pages/detail.html?id=${item.id}" class="mt-3">${item.name}</a>
              
               
                <div class="info_stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div class="info_prices">
                  <h5>$${item.price}</h5>
                </div>
              </div>
            </div>
    `;
    stt++;
  }

  return result;
};

renderTab = (arr) => {
  let categories_list = ["all", "men", "women", "adidas", "nike", "converse"];
  for (let i = 0; i < categories_list.length; i++) {
    document.querySelector(`#${categories_list[i]} .owl-carousel `).innerHTML =
      arr[i];
    console.log("hiuidifhdihfidhfhd");
  }
};

// todo: filter shoes by categories
function filterCategory(shoeArr, category) {
  let result = [];
  for (let item of shoeArr) {
    let categories = JSON.parse(item.categories);
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].category.toLowerCase() == category) {
        result.push(item);
      }
    }
  }
  return result;
}

function openToast(string) {
  // gọi tới layout toast
  const toastLiveExample = document.getElementById("liveToast");
  //   thêm toastBootstrap để có thể sử dụng phương thức show và mở toast lên
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  document.querySelector(".toast-body").innerHTML = string;
  toastBootstrap.show();
}
