let currentPage = 1;
let limit = 10;
let totalPosts=0;
let totalPages = 0;
let PreviousPage = 0;


// loads initial 
const loadInitialPosts = () => {
  paginationInstance.getPosts(currentPage, limit);
};

document.addEventListener("DOMContentLoaded", ()=>{
  loadInitialPosts();
  naviagtionObject.createNavigationBar();
  offsetInstance.createOffset([10,20,50,100]);
});

document.querySelector(".Products").addEventListener("scroll", (event) => {
  let { clientHeight, scrollHeight, scrollTop } = event.target;

  paginationInstance.checkCurrentPage(clientHeight, scrollHeight, scrollTop);

  if (clientHeight + scrollTop + 1 >= scrollHeight && currentPage < totalPages) {
    currentPage += 1;
    paginationInstance.updateButtonStates();
    paginationInstance.getPosts(currentPage, limit);
  }
});



























// handleNext to updatePageStyle 


// document.querySelector("#offset").addEventListener("click", (event) => {
//   const newTotalPages = event.target.value;

//   if (newTotalPages === limit) {
//     console.log("already same page limit");
//   } else {
//     limit = newTotalPages;
//     currentPage = 1;
//     paginationInstance.updateButtonStates();
//     paginationInstance.getPosts(currentPage, limit, true, true);
//   }
// });





// const handleNext = () => {
//   if (currentPage < totalPages) {
//     currentPage += 1;
//     updateButtonStates();
//     paginationInstance.getProducts(currentPage, totalLimit);
//   }
// };

// const handleBack = () => {
//   if (currentPage > 1) {
//     currentPage -= 1;
//     updateButtonStates();
//     paginationInstance.getProducts(currentPage, totalLimit, true);
//   }
// };

// // const handleSpecificButton= (currentPage)=>{
// //     updateButtonStates();
// //     paginationInstance.getProducts(currentPage, totalLimit, true);
// // }

// const updateButtonStates = (previous = false) => {
//   let page = previous ? PreviousPage : currentPage;
//   document.querySelector(".btnPrev").disabled = page === 1;
//   document.querySelector(".btnNext").disabled = page === totalPages;
//   if (previous) {
//     updatePageStyles(true);
//   } else {
//     updatePageStyles();
//   }
// };

// // add active or inactive class to button of pages 
// const updatePageStyles = (previous = false) => {
//   let pageNo = previous ? PreviousPage : currentPage;
//   document.querySelectorAll(".pages").forEach((page, index) => {
//     if (index + 1 === pageNo) {
//       page.classList.add("active");
//     } else {
//       page.classList.remove("active");
//     }
//   });
// };



// just after getEId of offset 
// const checkCurrentPage = (clientHeight, scrollHeight, scrollTop) => {
//   let reqDistribution = scrollHeight / currentPage;

//   let currentHeight = scrollTop + clientHeight;

//   for (let i = 1; i <= currentPage; i++) {
//     if (reqDistribution * i > currentHeight) {
//       PreviousPage = i;
//       updateButtonStates(true);
//       break;
//     }
//   }
// };





// const getProducts = async (page, limit, prev = false, offsetChage = false) => {
  
//     const data = await apiServiceInstance.getProducts(page, limit, prev);

//     if (totalRecords !== data.total || offsetChage) {
//       totalRecords = data.total;
//       totalPages = Math.ceil(totalRecords / totalLimit);

//       let paginationDiv = document.querySelector(".pageBtn");

//       if (offsetChage) {
//         paginationDiv.innerHTML = "";
//       }

//       for (let i = 1; i <= totalPages; i++) {
//         let newPage = document.createElement("div");
//         newPage.innerText = i;
//         newPage.setAttribute("class", "pages");
//         newPage.addEventListener("click", (e) => {
//         const newPageNumber = Number(e.target.innerText);
        
//             currentPage = newPageNumber;
//             updatePageStyles();
//             updateButtonStates();
//             getProducts(currentPage, totalLimit, true);
        
//         });
//         paginationDiv.appendChild(newPage);
//       }
//     }

//     let productDiv = document.getElementsByClassName("Products")[0];
//     if (prev) {
//       productDiv.innerHTML = "";
//       window.scrollTo(0, 0);
//     }
//     data.posts.forEach((product) => {
//       let newDiv = document.createElement("div");
//       newDiv.setAttribute("class", "Product");

//       let title = document.createElement("h2");
//       title.setAttribute("class", "productTitle");
//       title.innerText = product.title;

//       let body = document.createElement("p");
//       body.setAttribute("class", "productBody");
//       body.innerText = product.body;

//       newDiv.appendChild(title);
//       newDiv.appendChild(body);
      

//       productDiv.appendChild(newDiv);
//     });

//     updatePageStyles();
  
// };