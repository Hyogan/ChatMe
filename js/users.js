const searchBar =  document.querySelector("main .search input"),
        searchBtn = document.querySelector("main .search button");
    
searchBtn.addEventListener("click",()=>{
    searchBar.classList.toggle("active");
    searchBar.focus();
    searchBtn.classList.toggle("active");
})