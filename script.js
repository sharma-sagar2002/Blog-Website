
let paginatedBtnGroup= document.querySelector(".paginated-btn-grp");
// let currentPageNumber=1;
let noOfPosts=6;
let totalPage =0;
let dataList=[];
let currentPage=1;

async function getAllData(){
    
    const data=await fetch('https://dummyjson.com/posts');
    const json=await data.json();
    //  dataList= json.posts;
      dataList=json.posts;
     console.log(dataList);

     totalPage=Math.ceil(dataList.length / noOfPosts);
     
     createPaginatedButton(totalPage);
     displayItems(dataList,currentPage); 

    
}

async function fetchDataAndUseData() {
    await getAllData(currentPage);
    console.log(dataList); // Now dataList will be populated
    // You can use dataList here or pass it to another function
}
fetchDataAndUseData();

// display posts page 
function displayItems(dataList, currentPage) {
    const startIndex = (currentPage - 1) * noOfPosts;
    const endIndex = startIndex + noOfPosts;
    const pageItems = dataList.slice(startIndex, endIndex);
    // console.log(pageItems.length);

    // Clear previous content
    const container = document.querySelector('.content-container');
    // if (container.innerHTML!==null ) container.innerHTML='';
   
    // Display current page items
    pageItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.setAttribute("class", "blog");
    //   console.log(item);
      itemElement.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.body}</p>
      `
      container.appendChild(itemElement);
    }); 
}



// create buttons of pages 
function createPaginatedButton(totalPage){
    for(let i=1;i<=totalPage;i++){
        const btn=document.createElement("button");
        btn.setAttribute("id", `${i}`);
        btn.innerText=`${i}`;
        btn.addEventListener("click", ()=>{
            goToPage(i);
        })
        paginatedBtnGroup.appendChild(btn);

    }

}


function goToPreviousPage() {
    if (currentPage > 1) {
      currentPage--;
      displayItems(dataList, currentPage);
    }
    else {
        alert("you are on first page")
    }
  }
  
  function goToNextPage() {
    if (currentPage < Math.ceil(dataList.length / noOfPosts)) {
      currentPage++;
      displayItems(dataList, currentPage);
    }
    else {
        alert("you are on last page");
    }
  }
  
  function goToPage(page) {
    if (page >= 1 && page <= Math.ceil(dataList.length / noOfPosts)) {
      console.log("gotopage is here")
      currentPage = page;
      displayItems(dataList, currentPage);
    }
  }


document.querySelector('.prev').addEventListener('click', goToPreviousPage);
document.querySelector('.next').addEventListener('click', goToNextPage);
// window.addEventListener('scroll', function (e) {
//   let {clientHeight, scrollHeight, scrollTop}=e.target.documentElement;
//  clientHeight=Math.floor(clientHeight);
//  scrollTop=Math.floor(scrollTop);
//  scrollHeight=Math.floor(scrollHeight);
 
//   if(clientHeight+scrollTop == scrollHeight) {
//     console.log(clientHeight+" "+scrollTop+" "+scrollHeight)
//     currentPage=((currentPage+1)%totalPage);
//     console.log(currentPage)
//      if(currentPage==0 ) {currentPage=1};
//      goToPage(currentPage);
   
//   }

// });




window.addEventListener('scroll', function() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    currentPage=((currentPage+1)%totalPage);
         if(currentPage==0 ) {currentPage=1};
         goToPage(currentPage);
  }
})


