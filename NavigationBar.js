class NavigationBar {
constructor(){};

createNavigationBar(){
let listItems=[];
// creating navigation bar 
let logo = document.createElement("div");
logo.setAttribute("class", "navbar__logo");
logo.innerHTML = "MyBlogs";

let navLinks = document.createElement("ul");
navLinks.setAttribute("class", "navbar__links");

console.log(navLinks);

// Create li elements and set their innerHTML properly
let blogLi = document.createElement("li");
blogLi.innerHTML = `<a href="#">Blogs</a>`;

let contactsLi = document.createElement("li");
contactsLi.innerHTML = `<a href="#">Contacts</a>`;

let aboutLi = document.createElement("li");
aboutLi.innerHTML = `<a href="#">About</a>`;

// Append li elements to navLinks ul element

navLinks.appendChild(blogLi);
navLinks.appendChild(contactsLi);
navLinks.appendChild(aboutLi);

let navBar = document.querySelector(".navbar");
navBar.appendChild(logo);
navBar.appendChild(navLinks);
}


}

let naviagtionObject =new NavigationBar();