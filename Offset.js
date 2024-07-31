class Offset {
   
    constructor() {}

    //  <label for="offset">Page Size</label>
    // <select name="offset" id="offset" >
    //         <option value="10" selected>10</option>
    //         <option value="20">20</option>
    //         <option value="50">50</option>
    //         <option value="100">100</option>
    // </select> 


    createOffset(nums,index){
       let offsetMain =document.querySelector(".offsetMain");
       let select =document.createElement("select");
       select.setAttribute("name", "offset");
       select.setAttribute("id", "offset");
       
       let label=document.createElement("label");
       label.setAttribute("for", "offset");
       label.innerText="Page Size";
        nums.forEach(element => {
            let option=document.createElement("option");
            option.setAttribute("value", `${element}`);
            if(index==0)  option.setAttribute('selected');
            option.innerText=`${element}`;
            select.appendChild(option);
        });
        offsetMain.appendChild(label);
        offsetMain.appendChild(select);
        console.log(offsetMain)

        //adding event listener
         select.addEventListener("click", (event) => {
            const newTotalPages = event.target.value;
          
            if (newTotalPages === limit) {
              console.log("already same page limit");
            } else {
              limit = newTotalPages;
              currentPage = 1;
              paginationInstance.updateButtonStates();
              paginationInstance.getPosts(currentPage, limit, true, true);
            }
          });
    }
}

const offsetInstance = new Offset();