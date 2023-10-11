const dropDown = document.getElementById('dropdown');
const mobileLinks = document.getElementById('mobile');
const exit = document.getElementById('exit');


dropDown.addEventListener('click', ()=>{
         mobileLinks.style.transform = 'translateX(1px)';
})

exit.addEventListener('click', ()=>{
         mobileLinks.style.transform = 'translateY(-600px)';
})