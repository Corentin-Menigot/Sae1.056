
function ouvrePage(menuId) {
    /*Selectionne tous les elements qui on la classe page*/
var menus = document.querySelectorAll('.InfoSupSurApliConteneur');
menus.forEach(function(menu) {
    /*Pour tous les éléments*/
  if (menu.id === menuId) {
    /*Si le menu.id est le meme que celui donner en paramettre
     on va alterner entre flex et none (pas visible)*/
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  } else {
    /*Sinon on met le menuId a non*/
    menu.style.display = 'none';
  }
  /*Cela assure qu'une seule page est montrer a le meme fois*/
});
}