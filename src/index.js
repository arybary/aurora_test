const handleClick = (event) => {
  const lists = document.querySelectorAll(".navigation__list");
  const icons = document.querySelectorAll(".fa-chevron-right");
  const targetList = event.target.parentElement.nextElementSibling;
  const targetIcon = event.target;
  lists.forEach((item) => {
    if (item === targetList) {
      item.classList.toggle("show");
    }
  });
  icons.forEach((item) => {
    if (item === targetIcon) {
      item.classList.toggle("rotate");
    }
  });
};

document.querySelectorAll(".navigation__title").forEach((item) => {
  item.addEventListener("click", handleClick);
});

const menu = document.querySelector(".fa-bars");

const menuOpen=()=>{   
    const modalMenu = document.querySelector(".menu");
    modalMenu.classList.add("menu-show");
}

menu.addEventListener("click", menuOpen);

const closeMenu = document.querySelector(".close");

const menuClose=()=>{   
    const modalMenu = document.querySelector(".menu");
    modalMenu.classList.remove("menu-show");
    console.log('huy')
    
}

closeMenu.addEventListener("click", menuClose);