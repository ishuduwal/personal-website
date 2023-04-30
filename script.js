/*navbar-toggle*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach( n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
/*digital-clock*/
const time = document.getElementById("digital-clock");
setInterval(() =>{
    const d = new Date();
    time.innerHTML = d.toLocaleTimeString();})
/*page-function*/
function showPage(pageId){
    const pages = document.querySelectorAll('.page');
    for (let i = 0; i < pages.length; i++){
        pages[i].classList.remove('active');
    }
    const page = document.getElementById(pageId);
    page.classList.add('active');
}
/*dark-mode*/
const toggle_button = document.querySelector('#checkbox')
console.log(toggle_button)
toggle_button.addEventListener('change', () =>{
    if(toggle_button.checked){
        console.log("toggle_button checked")
        document.body.classList.add('dark-mode')
    }else{
        document.body.classList.remove('dark-mode')
    }
    })