
const menuNavigationClick =(elem)=>{
  document.querySelectorAll('.navigation__link').forEach(el => el.classList.remove('active'));
  elem.target.classList.add('active');
}

const portfolioTagClick=(elem)=>{
  console.log(elem)
  document.querySelectorAll('.tag').forEach(el => el.classList.remove('active'));
  elem.target.classList.add('active');
  
  let img= document.querySelector('.portfolio__example');
  document.querySelector('.portfolio__example').remove();
  document.querySelector('.portfolio__examples').insertAdjacentElement('beforeend',img);
}

const portfolioExamplesClick =(elem)=>{
  document.querySelectorAll('.portfolio__image').forEach(el => el.classList.remove('active'));
  elem.target.classList.add('active');
}


document.querySelector('.navigation').addEventListener('click', menuNavigationClick);
document.querySelector('.portfolio__tags').addEventListener('click', portfolioTagClick);
document.querySelector('.portfolio__examples').addEventListener('click', portfolioExamplesClick);
