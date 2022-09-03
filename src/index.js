const handleClick = event => {
    const lists = document.querySelectorAll(".navigation__list");
    const icons = document.querySelectorAll(".fa-chevron-right")
    console.log(lists);
    const targetList = event.target.parentElement.nextElementSibling;
    const targetIcon = event.target;
    console.log(targetList, targetIcon );
    
  
    lists.forEach(item => {
      if (item === targetList) {
        item.classList.toggle("show")
      }
    });
    icons.forEach(item => {
        if (item === targetIcon) {         
          item.classList.toggle("rotate")
        }
      })

  }
  
  document.querySelectorAll(".navigation__title").forEach(item => {
    item.addEventListener("click", handleClick)
  })