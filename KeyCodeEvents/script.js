const insert=document.getElementById('insert');

window.addEventListener('keydown',(e)=>{

insert.innerHTML=`<div class="key">
${e.key===' '?'Space' : e.key}
<small>event.key</small>
</div>

<div class="key">
${e.keyCode}
<small>event.keyCode</small>
</div>

<div class="key">
${e.code}
<small>event.code</small>
</div>`;

random_bg_color();
});


function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

