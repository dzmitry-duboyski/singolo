
const menuNavigationClick =(elem)=>{
document.querySelectorAll('.navigation__link').forEach(a => a.classList.remove('active'));
elem.target.classList.add('active');


}

document.querySelector('.navigation').addEventListener('click',menuNavigationClick);