const button= document.querySelector('button');
const toasts = document.querySelector('#toasts');

const messages=[
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five',
    'Message Six',
    'Message Seven',
];

button.addEventListener('click',()=>createNotification());  

function createNotification(){
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText=getRandomMessage();

    toasts.appendChild(notif);

    setTimeout(()=>{
        notif.remove();
    }
    ,3000);
}

function getRandomMessage(){
    return messages[Math.floor(Math.random()*messages.length)];
}
