window.addEventListener("scroll",function(){
    const navbar = document.getElementById("mynav")
    if(window.scrollY >50){
        navbar.classList.add("scrolled")
    }else{
        navbar.classList.remove("scrolled")
    }
})

window.addEventListener("DOMContentLoaded",function(){
    const toggleButon = document.querySelector(".navbar-toggler")
    toggleButon.addEventListener("click",()=>{
        if(window.scrollY<50){
            window.scrollBy(0, 51 - window.scrollY);
        }
    })
})