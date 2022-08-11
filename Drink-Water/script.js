const smallCups = document.querySelectorAll('.cup-small');

const liters = document.querySelector('#liters');
const percentage = document.querySelector('#percentage');
const remained = document.querySelector('#remained');



smallCups.forEach((cup,idx) => {

   cup.addEventListener('click',()=>{

    liters.innerHTML=`${(idx+1)/4} L`;
    percentage.innerHTML=`${(idx+1)*12.5}%`;
    percentage.style.height=`${(idx+1)/8}330px`
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--;
    }
    
          
       smallCups.forEach((cup,idx2)=>{
            if(idx2<=idx){
                cup.classList.add('full');
            }else{
                cup.classList.remove('full');
            }
       })
   })
});