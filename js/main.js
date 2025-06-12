let type = document.querySelector(".type")
let typetext = type.innerHTML
let typearr = typetext.split("")
type.innerHTML = ""
let typing = 0;



function typejs(){
    if(typing < typetext.length){
        type.innerHTML += typetext.charAt(typing)
        typing++
        typearr = typetext.split("")
    }else{
        typearr.pop()
        type.innerHTML = typearr.join("")
        if(typearr.length == 0){
            typing = 0
        }
    }
    
}

setInterval(() => {
    typejs()
},200);



let menu = document.querySelector(".menu_bg")


window.addEventListener("scroll",()=>{
    let scrolling = window.scrollY
    console.log(scrolling);
    if(scrolling > 50){
        menu.classList.add("bggg")
    }else{
        menu.classList.remove("bggg")
    }
})




let back2top = document.querySelector(".back2top")
back2top.addEventListener("click", ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
})

window.addEventListener("scroll", ()=>{
    let scrolling = window.scrollY
    
    if(scrolling > 40){
        back2top.style.display = "block"
    }else{
        back2top.style.display = "none"
    }
    
})