class Pagination {
  constructor(currentPage,limit,totalPosts,totalPages,previousPage,nextPage){
    this.currentPage = currentPage;
    this.limit = limit;
    this.totalPosts = totalPosts;
    this.totalPages = totalPages;
    this.previousPage = previousPage;
    this.nextPage = nextPage;
  }


  getPosts = async (page, limit, prev = false, offsetChange = false) => {
  
    const data = await apiServiceInstance.getPosts(page, limit, prev);

    if (this.totalPosts !== data.total || offsetChange) {
      this.totalPosts = data.total;
      totalPages = Math.ceil(this.totalPosts / limit);

      let paginationDiv = document.querySelector(".pagination__pageBtn");

      if (offsetChange) {
        paginationDiv.innerHTML = "";
      }

      for (let i = 1; i <= totalPages; i++) {
        let newPage = document.createElement("div");
        newPage.innerText = i;
        newPage.setAttribute("class", "pages");
        newPage.addEventListener("click", (e) => {
            const newPageNumber = Number(e.target.innerText);
            console.log(i);
            currentPage = newPageNumber;
            this.updatePageStyles();
            this.updateButtonStates();
            this.getPosts(currentPage, limit, true);
        
        });
        paginationDiv.appendChild(newPage);
      }
      
    }

    let productDiv = document.querySelector(".Products");
    if (prev) {
      productDiv.innerHTML = "";
      window.scrollTo(0, 0);
    }

      data.posts.forEach((product) => {
      let newDiv = document.createElement("div");
      newDiv.setAttribute("class", "Product");

      let title = document.createElement("h2");
      title.setAttribute("class", "productTitle");
      title.innerText = product.title;

      let body = document.createElement("p");
      body.setAttribute("class", "productBody");
      body.innerText = product.body;

      newDiv.appendChild(title);
      newDiv.appendChild(body);
      

      productDiv.appendChild(newDiv);
    });

    this.updatePageStyles();
  
  }



  // add functions here 

   handleNext = () => {
    if (currentPage < totalPages) {
      currentPage += 1;
      this.updateButtonStates();
      this.getPosts(currentPage, limit);
    }
  };
  
   handleBack = () => {
    if (currentPage > 1) {
      currentPage -= 1;
      this.updateButtonStates();
      this.getPosts(currentPage, limit, true);
    }
  };
  
  // const handleSpecificButton= (currentPage)=>{
  //     updateButtonStates();
  //     paginationInstance.getProducts(currentPage, totalLimit, true);
  // }
  
   updateButtonStates = (previous = false) => {
    let page = previous ? PreviousPage : currentPage;
    document.querySelector(".pagination__btnPrev").disabled = page === 1;
    document.querySelector(".pagination__btnNext").disabled = page === totalPages;
    if (previous) {
      this.updatePageStyles(true);
    } else {
      this.updatePageStyles();
    }
  };
  
  // add active or inactive class to button of pages 
   updatePageStyles = (previous = false) => {
    let pageNo = previous ? PreviousPage : currentPage;
    document.querySelectorAll(".pages").forEach((page, index) => {
      if (index + 1 === pageNo) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });
  };


   checkCurrentPage = (clientHeight, scrollHeight, scrollTop) => {
    let reqDistribution = scrollHeight / currentPage;
  
    let currentHeight = scrollTop + clientHeight;
  
    for (let i = 1; i <= currentPage; i++) {
      if (reqDistribution * i > currentHeight) {
        PreviousPage = i;
        this.updateButtonStates(true);
        break;
      }
    }
  };


};



const paginationInstance = new Pagination(1, 10, 0, 0, 0);
















//  handleNext = () => {
//   if (currentPage < totalPages) {
//     currentPage += 1;
//     updateButtonStates();
//     getProducts(currentPage, totalLimit);
//   }
// };

//  handleBack = () => {
//   if (currentPage > 1) {
//     currentPage -= 1;
//     updateButtonStates();
//     getProducts(currentPage, totalLimit, true);
//   }
// };

// //  handleSpecificButton= (currentPage)=>{
// //     updateButtonStates();
// //     getProducts(currentPage, totalLimit, true);
// // }

//  updateButtonStates = (previous = false) => {
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
//  updatePageStyles = (previous = false) => {
//   let pageNo = previous ? PreviousPage : currentPage;
//   document.querySelectorAll(".pages").forEach((page, index) => {
//     if (index + 1 === pageNo) {
//       page.classList.add("active");
//     } else {
//       page.classList.remove("active");
//     }
//   });
// };







//  handleNext = () => {
//   if (currentPage < totalPages) {
//     currentPage += 1;
//     this.updateButtonStates();
//     this.getProducts(currentPage, totalLimit);
//   }
// };

//  handleBack = () => {
//   if (currentPage > 1) {
//     currentPage -= 1;
//     this.updateButtonStates();
//     this.getProducts(currentPage, totalLimit, true);
//   }
// };

//  updateButtonStates = (previous = false) => {
//   let page = previous ? PreviousPage : currentPage;
//   document.querySelector(".btnPrev").disabled = page === 1;
//   document.querySelector(".btnNext").disabled = page === totalPages;
//   if (previous) {
//     this.updatePageStyles(true);
//   } else {
//     this.updatePageStyles();
//   }
// };

// // add active or inactive class to button of pages 
//  updatePageStyles = (previous = false) => {
//   let pageNo = previous ? PreviousPage : currentPage;
//   document.querySelectorAll(".pages").forEach((page, index) => {
//     if (index + 1 === pageNo) {
//       page.classList.add("active");
//     } else {
//       page.classList.remove("active");
//     }
//   });
// };



//  checkCurrentPage = (clientHeight, scrollHeight, scrollTop) => {
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
  
// };S