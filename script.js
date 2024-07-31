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

























