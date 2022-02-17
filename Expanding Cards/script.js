const panels=document.querySelectorAll(".panel");// return to list 5 panel


panels.forEach((panel)=>{// step on 5 panel 

panel.addEventListener("click",()=>{
     removeActiveClasses();
     panel.classList.add("active");
})


})

function  removeActiveClasses(){

    panels.forEach( panel=>{
        panel.classList.remove("active");
    })
}