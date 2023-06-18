const passField = document.querySelector("form #password"),
        toggleBtn = document.querySelector("form .toggleBtn");

toggleBtn.addEventListener("click",()=>{
    if(passField.type === "password")
        {
            passField.type = "text";
            toggleBtn.classList.add('active');
        }
    else{
        
        passField.type = "password"
        toggleBtn.classList.remove("active")
    }
})
