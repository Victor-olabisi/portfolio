const navBar = document.querySelector('.nav');
const topBtn = document.querySelector('.top-button');

window.addEventListener('scroll', (e) => {
  const pageHeight = window.pageYOffset;
  const navTop = navBar.offsetTop;
  if (pageHeight >= 100) {
    navBar.classList.add('fixed-nav');
  } else {
    navBar.classList.remove('fixed-nav');
  }
  if (pageHeight > 500) {
    topBtn.classList.add("show-top")
  } else {
    topBtn.classList.remove('show-top');
  }
});

const sideBar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.sidebar__button');
const navBtn = document.querySelector('.nav__button');


navBtn.addEventListener('click', (e) => {
  sideBar.classList.add('show-sidebar');
 
});

closeBtn.addEventListener('click', () => {
  sideBar.classList.remove('show-sidebar');
});
const scrollLink = [...document.querySelectorAll('.scroll-link')];
scrollLink.forEach((link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    let id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;
    const navHeight = navBar.getBoundingClientRect().height;
    position = position - navHeight - 10;
    const fixedNav = navBar.classList.contains("fixed-nav");
    
    if (!fixedNav) {
      position = element.offsetTop - navHeight - navHeight - 10;
    }
    sideBar.classList.remove("show-sidebar")

    window.scrollTo({
      left: 0,
      top: position,
   })
  }); 
}) )



