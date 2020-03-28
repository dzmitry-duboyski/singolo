var sliderScrollOn=false;

const menuNavigationClick = (elem) => {
  document.querySelectorAll('.navigation__link').forEach(el => el.classList.remove('active'));
  elem.target.classList.add('active');
}

const portfolioTagClick = (elem) => {
  document.querySelectorAll('.tag').forEach(el => el.classList.remove('active'));
  elem.target.classList.add('active');
  
  let img= document.querySelector('.portfolio__example');
  document.querySelector('.portfolio__example').remove();
  document.querySelector('.portfolio__examples').insertAdjacentElement('beforeend',img);
}

const portfolioExamplesClick = (elem) => {
  document.querySelectorAll('.portfolio__image').forEach(el => el.classList.remove('active'));
  elem.target.classList.add('active');
}

const sliderNavigationClick = (elem) => {
  elem=elem.target.className;
  if(elem==='btn_left'){
    return sliderNavigationLeftClick();
  }
  if(elem==='btn_right'){
    return sliderNavigationRightClick();
  }
}

const sliderNavigationRightClick = () => {
  if(sliderScrollOn){
    return;
  }
  sliderScrollOn=true;

  return new Promise((resolve) => {
    let backgroundColorSliser=document.querySelectorAll('.slider__contents')[0].firstElementChild.classList[1];
    if(backgroundColorSliser!=='blue'){
        document.getElementById('slider').style.background='#648BF0';
        document.getElementById('slider').style.borderBottom='none';
    } else {
        document.getElementById('slider').style=null;
    }
      resolve()
  })
  .then(()=>{
    return  new Promise ((resolve)=>{
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
    },5);
    })
  })
  .then(()=>{
    return new Promise((resolve)=>{
      let slides = document.querySelectorAll('.slider__contents');
      let firstSlide = slides[0].firstElementChild;
      document.querySelectorAll('.slider-slide').forEach((item) => item.style.left='0');
      document.querySelectorAll('.slider__contents')[0].firstElementChild.remove();
      document.querySelectorAll('.slider__contents')[0].insertAdjacentElement('beforeend',firstSlide)
      resolve();
    })
  })
  .then(()=>{
    return new Promise((resolve)=>{
      sliderScrollOn=false;
      resolve();
    })
  })
}

const sliderNavigationLeftClick = () => {
  if(sliderScrollOn){
    return;
  }
  sliderScrollOn=true;

  return new Promise ((resolve)=>{
    let slides = document.querySelectorAll('.slider__contents');
    let lastSlide = slides[0].lastElementChild;
    document.querySelectorAll('.slider__contents')[0].lastElementChild.remove();
    document.querySelectorAll('.slider__contents')[0].insertAdjacentElement('afterbegin',lastSlide)
    document.querySelectorAll('.slider-slide').forEach((item) => item.style.left=' -940px');
    resolve();
  })
  .then(()=>{
    return new Promise ((resolve) => {
      let backgroundColorSliser=document.querySelectorAll('.slider__contents')[0].firstChild.classList[1];
      if(backgroundColorSliser==='blue'){
        document.getElementById('slider').style.background='#648BF0';
        document.getElementById('slider').style.borderBottom='none';
      } else {
        document.getElementById('slider').style=null;
      }
       resolve()
    })
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
      },5);
    })
  })
    .then(()=>{
      return new Promise((resolve)=>{
        document.querySelectorAll('.slider-slide').forEach((item) => item.style.left='0');
        document.querySelectorAll('.slider-slide').forEach((item) => item.style.marginLeft='0');
        resolve();
      })
    })
      .then(()=>{
      return new Promise((resolve)=>{
        sliderScrollOn=false;
        resolve();
      })
    })
}

const sliderPhoneVerticalDisplayOff = (elem) => {
  parentNodeClass=elem.target.parentNode.className;
  if(parentNodeClass==='phone__shadow'){
    return;
  }
  elem = document.querySelector('.phone__vertical-display_off');
  let statusDisplay = elem.style.display;
  if(statusDisplay===''){
    elem.style.display='block';
    } else {
    elem.style=null;
  }
}

const sliderPhoneHorizontalDisplayOff = (elem) => {
  parentNodeClass=elem.target.parentNode.className;
  if(parentNodeClass==='phone__shadow'){
    return;
  }
  elem = document.querySelector('.phone__horizontal-display_off');
  let statusDisplay = elem.style.display;
  if(statusDisplay===''){
   elem.style.display='block';
   } else {
   elem.style=null;
  }
}

const contactBtnSubmit = (event) => {
  let subject = document.getElementById('subject').value.toString();
  let description = document.getElementById('description').value.toString();
  const name = document.getElementById('name').value.toString();
  const email = document.getElementById('email').value.toString();

  if(name !== '' && email !== ''){
    event.preventDefault();
    if(subject === ''){
      subject = 'No subject';
      document.getElementById('subject-title').innerText = '';
      document.getElementById('subject-message').innerText = subject;
    } else {
      document.getElementById('subject-title').innerText = 'Subject: ';
      document.getElementById('subject-message').innerText = subject;
    }

    if(description === ''){
      description = 'No description';
      document.getElementById('description-title').innerText = '';
      document.getElementById('description-message').innerText = description;
    } else {
      document.getElementById('description-title').innerText = 'Description: ';
      document.getElementById('description-message').innerText = description;
    }

    document.getElementById('message-block').classList.remove('hidden');
  }
}

const contactBtnClose = (event) => {
  event.preventDefault();
  document.getElementById('message-block').classList.add('hidden');
  document.getElementById('form').reset()
}

const onScroll = (e) => {
  const curPos = window.scrollY;
  const section = document.querySelectorAll('#wrapper>section');
  const links = document.querySelectorAll('#navigation-menu a');

  section.forEach((el)=>{

    if (el.offsetTop <= curPos && ( el.offsetTop + el.offsetHeight) > curPos){
      links.forEach((a)=>{
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)){
          a.classList.add('active');
        }
      })

    }
  })

}

document.querySelector('.navigation').addEventListener('click', menuNavigationClick);
document.querySelector('.portfolio__tags').addEventListener('click', portfolioTagClick);
document.querySelector('.portfolio__examples').addEventListener('click', portfolioExamplesClick);
document.querySelector('.slider-navigation').addEventListener('click', sliderNavigationClick);
document.querySelector('.phone__vertical').addEventListener('click', sliderPhoneVerticalDisplayOff);
document.querySelector('.phone__horizontal').addEventListener('click', sliderPhoneHorizontalDisplayOff);
document.getElementById('contact-btn_submit').addEventListener('click', contactBtnSubmit);
document.getElementById('contact-btn_close').addEventListener('click', contactBtnClose);
document.addEventListener('scroll', onScroll)