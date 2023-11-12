// renderListShoe = (arr, stt, result) => {
//     for (let item of arr) {
//       result += `
//       <div class=" col-12 col-md-6 col-lg-4 my-3">
//         <div class="card h-100 ">
//           <img src=${item.image} class="card-img-top" alt="Sales Pic ${stt}">
//           <div class="card-body">
//             <div class="d-flex justify-content-between">
//               <h5 class="card-title">${item.name}</h5>
//               <div class="img_interact">
//                 <i class="fa-regular fa-heart" onclick="likeShoes(this)"></i>
//                 <i class="fa-regular fa-images"></i>
//               </div>
//             </div>
//             <div class="info_stars">
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star-half-stroke"></i>
//             </div>
//             <div class="info_prices mt-3">
//               <h5 class="card-text">$${item.price}</h5>
//             </div>
//             <a href="../views/detail.html?id=${item.id}" class="btn btn-primary mt-3">View Details</a>
//           </div>
//         </div>
//       </div>
//     `;
//       stt++;
//     }
//     // return result;
//     // for (let item of arr) {
//     //   result += `
//     //     <div class="col-12 col-md-6 col-lg-4">
//     //       <div class="card h-100">
//     //         <img src=${item.image} class="card-img-top" alt="Sales Pic ${stt}">
//     //         <div class="card-body">
//     //           <div class="d-flex justify-content-between">
//     //             <h5 class="card-title">${item.name}</h5>
//     //             <div class="img_interact">
//     //               <i class="fa-regular fa-heart" onclick="likeShoes(this)"></i>
//     //               <i class="fa-regular fa-images"></i>
//     //             </div>
//     //           </div>
//     //           <div class="info_stars">
//     //             <i class="fa-solid fa-star"></i>
//     //             <i class="fa-solid fa-star"></i>
//     //             <i class="fa-solid fa-star"></i>
//     //             <i class="fa-solid fa-star"></i>
//     //             <i class="fa-solid fa-star-half-stroke"></i>
//     //           </div>
//     //           <div class="info_prices mt-3">
//     //             <h5 class="card-text">$${item.price}</h5>
//     //           </div>
//     //           <a href="../views/detail.html?id=${item.id}" class="btn btn-primary mt-3">View Details</a>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   `;
//     //   stt++;
//     // }
//     document.querySelector('show-shoes').innerHTML = result;
//     return result;
//   };
// renderListShoe()
  
// //   renderTab = (arr) => {
// //     let categories_list = ["all", "men", "women", "adidas", "nike", "converse"];
// //     for (let i = 0; i < categories_list.length; i++) {
// //       document.querySelector(
// //         `#${categories_list[i]} .row .owl-carousel`
// //       ).innerHTML = arr[i];
// //       console.log("hiuidifhdihfidhfhd");
// //     }
// //   };
  
// //   // todo: filter shoes by categories
// //   function filterCategory(shoeArr, category) {
// //     let result = [];
// //     for (let item of shoeArr) {
// //       let categories = JSON.parse(item.categories);
// //       for (let i = 0; i < categories.length; i++) {
// //         if (categories[i].category.toLowerCase() == category) {
// //           result.push(item);
// //         }
// //       }
// //     }
// //     return result;
// //   }