const burguerMenu = document.querySelector('#imgBurguer');
const menuMobile = document.querySelector('#navMenuMobile')


function dropMenu(){

 
  
  if(menuMobile.style.transform == "translateX(0px)"){
    menuMobile.style.transform = "translateX(110%)"
    burguerMenu.src = "./IMG/menu-buguer-open.svg"
   
  }
  else{ menuMobile.style.transform = "translateX(0)"
  burguerMenu.src = "./IMG/menu-buguer-close.svg"
  }
  console.log(menuMobile)

}