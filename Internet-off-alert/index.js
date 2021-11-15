

alert("deneme");


const div = document.querySelector("#offlinediv");

console.log(div);
window.addEventListener('offline',()=>{


div.style.display='none'

});


window.addEventListener("offline",()=>{


    div.style.display='block'


});