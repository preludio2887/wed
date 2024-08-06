for(let i=1;i<=3;i++){
    document.querySelector(`.close-modal${i}`).addEventListener("click",function(){
        document.querySelector(`.modal${i}`).style.display = "none";
        
    })
    document.querySelector(`.open-modal${i}`).addEventListener("click",function(){
        document.querySelector(`.modal${i}`).style.display = "block";
        
    })
}
let header = document.querySelector(".header");
window.addEventListener("scroll",function(){
    if(this.scrollY >200){
        header.classList.add("act")
    }
    else{
        header.classList.remove("act")
    }
})