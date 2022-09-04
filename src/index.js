/** @format */

const menuBtn = document.querySelector(".fa-bars");

const menuOpen = () => {
  const modalMenu = document.querySelector(".menu");
  modalMenu.classList.add("menu-show");
};

menuBtn.addEventListener("click", menuOpen);

const closeMenuBtn = document.querySelector(".menu-close");

const menuClose = () => {
  const modalMenu = document.querySelector(".menu");
  modalMenu.classList.remove("menu-show");
};

closeMenuBtn.addEventListener("click", menuClose);

const menuItemBtn = document.querySelectorAll(".menu-navigation__item");

const openNextMenu = (event) => {
  const prevMenu = event.target.parentElement;

  const nextMenu = document.querySelector(`#next-${event.target.id}`);
  if (nextMenu !== null) {
    prevMenu.hidden = true;
    nextMenu.hidden = false;
  } else {
    alert(`Not maket ${event.target.id}`);
  }
};

menuItemBtn.forEach((item) => {
  item.addEventListener("click", openNextMenu);
});

const prevMenuBtn = document.querySelectorAll(".menu-next__title");

const openPrevMenu = (event) => {
  const nowMenu = event.target.parentElement.parentElement.parentElement;
  const menu = document.querySelector(`#menu`);
  menu.hidden = false;
  nowMenu.hidden = true;
};

prevMenuBtn.forEach((item) => {
  item.addEventListener("click", openPrevMenu);
});

const searchBtn = document.querySelector("#search");

const openSearch = (event) => {
  const icon = document.querySelector(".fa-magnifying-glass");
 icon.classList.toggle("fa-xmark");


  const searchInput = document.querySelector(".search");
  console.log(icon);
  searchInput.classList.toggle("search-show");
};

searchBtn.addEventListener("click", openSearch);

const footerNavBtn = document.querySelectorAll(".navigation__title");

const navItemClick = (event) => {
  const lists = document.querySelectorAll(".navigation__list");
  const icons = document.querySelectorAll(".navigation__icon");
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

footerNavBtn.forEach((item) => {
  item.addEventListener("click", navItemClick);
});
