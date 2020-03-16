
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

const sliderNavigationClick = (elem) => {
  console.log(elem)
  elem=elem.target.className;
  if(elem==='btn_left'){
    return sliderNavigationLeftClick();
  }
  if(elem==='btn_right'){
    return sliderNavigationRightClick();
  }
}

function sliderNavigationRightClick(){
  return new Promise ((resolve)=>{
    let counter = 0;
    let interval = setInterval(function(){
      document.querySelectorAll('.slider-slide').forEach((item) => {
        counter -=5;
        item.style.left = `${counter}px`;
          if(item.style.left==='-935px'){
            clearInterval(interval);
            setTimeout(resolve,10);
            };
        });
    },10);
  })
  .then(()=>{
    return new Promise((resolve)=>{
      let slides = document.querySelectorAll('.slider__contents');
      let firstSlide = slides[0].firstElementChild;
      document.querySelectorAll('.slider-slide').forEach((item) => item.style.left='0');
      document.querySelectorAll('.slider__contents')[0].firstElementChild.remove();
      document.querySelectorAll('.slider__contents')[0].insertAdjacentElement('beforeend',firstSlide)
    })
  })
}

function sliderNavigationLeftClick(){
  return new Promise ((resolve)=>{
    let slides = document.querySelectorAll('.slider__contents');
    let lastSlide = slides[0].lastElementChild;
    document.querySelectorAll('.slider__contents')[0].lastElementChild.remove();
    document.querySelectorAll('.slider__contents')[0].insertAdjacentElement('afterbegin',lastSlide)
    document.querySelectorAll('.slider-slide').forEach((item) => item.style.left=' -940px');
    resolve();
  })
   .then(()=>{
    return new Promise((resolve)=>{
      let currentLeft = -940;
      let interval = setInterval(function(){
        document.querySelectorAll('.slider-slide').forEach((item) => {
          currentLeft+=5
          item.style.left = `${currentLeft}px`;
              if(item.style.left==='0px'){
              clearInterval(interval);
              setTimeout(resolve,10);
              };
          });
      },10);
    })
  })
    .then(()=>{
      return new Promise((resolve)=>{
        document.querySelectorAll('.slider-slide').forEach((item) => item.style.left='0');
        document.querySelectorAll('.slider-slide').forEach((item) => item.style.marginLeft='0');
        let backgroundColorSliser=document.querySelectorAll('.slider__contents')[0].firstChild.classList[1];
        if(backgroundColorSliser==='blue'){
          document.querySelector('section').style.background='#648BF0';
          document.querySelector('section').style.borderBottom='none';
        }else {
          document.querySelector('section').style=null;
        }
        console.log(backgroundColorSliser)
      })
    })
}

document.querySelector('.navigation').addEventListener('click', menuNavigationClick);
document.querySelector('.portfolio__tags').addEventListener('click', portfolioTagClick);
document.querySelector('.portfolio__examples').addEventListener('click', portfolioExamplesClick);
document.querySelector('.slider-navigation').addEventListener('click', sliderNavigationClick);