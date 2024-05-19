


/*---------------------------------------------Pour le nav hamburger-----------------------------------------------------------------------*/
    /*Pour l'icone hamburger marge pour pousser le diapo en bas et rendre visible le second nav ul*/
    document.querySelector('.icone-nemu').addEventListener('click', function() {
      document.querySelector('nav').classList.toggle('show');
    });
    document.querySelector('.icone-nemu').addEventListener('click', function() {
      document.querySelector('nav ul').classList.toggle('show');
    });
/*-----------------------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------Pour le mode sombre  Qui ne marche pas encore totalement -----------------------------------------------------------------------*/
function modeSombre() {
  /*On difinit les constante des éléments dont on vent changer les attribue*/
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    /*Une fois sélectionné l'élément body on peut lui mettre la classe dark-mode on l'enlever cela va etre utilisé pour les
    comparaison plus tard*/
    /*J'ai aussi trouver qu'on peut le faire dans le css mais pas compris comment implémenter sur mon site*/
  
    /*On va selectionner les elements qui on la meme classe*/
    const isDarkMode = body.classList.contains('dark-mode');
    const toggleSwitch = document.querySelector('.interrupteur');
    const toggleSwitchswitchhandle = document.querySelector('.interrupteur .interrupteur-poignee');
    const menuicon = document.querySelector('.icone-nemu');
    const projetText = document.querySelectorAll(".Projet");
    const navLink = document.querySelectorAll('nav a::after');
    const projet = document.querySelectorAll('.left p');
    const formulaire = document.querySelector('.formulaire');
    const groseeTete = document.querySelector('.groseeTete');
    const project = document.querySelector('.project');
    
    const affiche = document.querySelector('.affiche');





  /*On va selectionner tous les elemets qui sont des descendant de li ul et nav respectivement*/
  /*On a un "vector" en quelque sorte(si j'ai bien compris)*/
    const navLinks = document.querySelectorAll('nav ul li a');
    const Nosprojeta  = document.querySelectorAll('.Nosprojet a');

    const menuContent1  = document.querySelectorAll('.menuContent1 p');
    const navLinksul = document.querySelectorAll('.myTopnav');
   


   /*On va selectionner les elements qui sont des nav ou img*/
    const nav = document.querySelector('nav');
    const img = document.querySelectorAll("img");
    
    /*On fait une comparaison avec si isDarkMode est vrai ou pas*/
    /*Si oui la couleur va etre mis a blanc (FFF) et sinon elle va tre mis a 606683, qui la couleur de défaut.*/
    toggleSwitch.style.backgroundColor = isDarkMode ? '#FFF' : '#606683';
    /*Change la couleur de l'intérupteur de 606683a noir quand on active le mode sombre*/
    toggleSwitchswitchhandle.style.backgroundColor =isDarkMode ? '#000' : '#FFF';
    menuicon.style.color = isDarkMode ? '#fff' : '#FFF';
    nav.style.backgroundColor = isDarkMode ? '#000' : '#11073d';
 
    body.style.backgroundColor= isDarkMode ? '#000' : '#fff';
    formulaire.style.color = isDarkMode ? '#FFF' : '#000';
    groseeTete.style.color = isDarkMode ? '#FFF' : '#000';
    affiche.style.color = isDarkMode ? '#FFF' : '#000';
    project.style.color = isDarkMode ? '#FFF' : '#000';
    

    /*navLinks est un "vector" et pour le parcourir on fait comme sur java
    un parcours complet montrer par forEach (pour tous)*/
    navLinks.forEach(link => {
      link.style.color = isDarkMode ? '#fff' : '#fff';
    });
  

    
    navLinksul.forEach(link => {
      link.style.backgroundColor = isDarkMode ? '#000' : '#11073d';
    });
   


    
    Nosprojeta.forEach(link => {
      link.style.color = isDarkMode ? '#FFF' : '#000';
    });

    produit.forEach(link => {
      link.style.backgroundColor = isDarkMode ? '#fff' : '#000';
    });

    projet.forEach(link => {
      link.style.color = isDarkMode ? '#000' : '#fff';
    });


    menuContent1.forEach(link => {
      link.style.color = isDarkMode ? '#FFF' : '#000';
    });
  

    projetText.forEach(link => {
      link.style.color = isDarkMode ? '#fff' : '#000';
    });

    img.forEach(link => {
      link.style.borderColor = isDarkMode ? '#fff' : '#000';
    });
    navLink.forEach(link => {
      link.style.backgroundColor = isDarkMode ? '#ccc' : '#fff';
    });
    /*Pour afficher une bordure noir autour de l'itérupteur quand modeSombre est activé*/
   

    
} 
/* On doit la metter en dehors de la fonction modeSombre sinon la couleur de la bordure est changer seulment quand
l'interrupteur revient a sa position de base. Nous on veut qu'il change a change fois que l'intérrupteur est activé*/
document.querySelector('.interrupteur .interrupteur-poignee').addEventListener('click',
function() {
 document.querySelector('.interrupteur').classList.toggle('show');
});
/*-----------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------Pour les diapo--------------------------------------------------------------------------------*/
/*Declaration et initialisation de variable*/
let slideIndex = 1;
/*Appel de fonction slideIndex avec 1 comme parametre*/
showSlides(slideIndex);

/*Fonction pour changer la diapo(avancer ou reculer)
n étant le nombre de slide*/
function plusSlides(n) {
showSlides(slideIndex = n+slideIndex);
}
/*Fonction pour afficher la diapo qu'on vent
n étant le numero de la diapo a afficher*/
function currentSlide(n) {
showSlides(slideIndex = n);
}

/*Fonction pour afficher la diapo qu'on vent
n étant le numero de la diapo a afficher*/
function showSlides(n) {
let i;
/*Selection tous les éléments qui on la classe et les mets dans l'arraylist slides*/
let slides = document.getElementsByClassName("diapo");
/*Verifie si n <slides.lenght sinon cela veut dire quand est a la fin de notre 
vector(diapo) et ducoup l'indice est remis a 1 pour "reboucler" sur la premiere diapo*/ 
if (n > slides.length) {
  slideIndex = 1
}
  /*Verifie si n <1 sinon cela veut dire quand est au début de notre 
vector(diapo) et ducoup l'indice est remis au dernier indice du vector pour "reboucler" sur la derniere diapo*/  
if (n < 1) {
  slideIndex = slides.length
}
/*D'apres ce que j'ai compris Array fais la convertion slides en arraylist pour utliser 
forEach */
Array.from(slides).forEach(slide => {
  /*Met tous les éléments a display none pour pas tous les afficher en meme temps*/
  slide.style.display = "none";
});
/*Affiche seulement la diapo qu'on vent qui de base est la premiere car le parametre est n 1, vue que
slideIndex = 1*/
slides[slideIndex-1].style.display = "block";  
} 
/*-----------------------------------------------------------------------------------------------------------------------------------------*/


  var AffichePlusieureComparaison = false;
  /*Selectionne tous les elements qui on la classe menuContent1*/
  function afficheGroseTete(menuId) {
    var menus = document.querySelectorAll('.menuContent1');
    menus.forEach(function(menu) {
      /*Si le menu.id est le meme que celui donner en paramettre
       on va alterner entre flex et none (pas visible)*/
      if (menu.id === menuId) {
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
         /*Sinon si le menu.id n'est pas le meme que celui donner en paramettre on verifie que si AffichePlusieureComparaison=faux 
           et si c''est on met le display a non pas visible*/
      } else if (!AffichePlusieureComparaison) {
        menu.style.display = 'none';
      }
    });
  }


  
  function cacherToutesPage() {
    var menus = document.querySelectorAll('.menuContent1');
    /*Pour tous les éléments menuContent1 on les chache */
    menus.forEach(function (menu) {
      menu.style.display = 'none';
    });
  }

function buttonAffichePlusieureComparaison() {
  AffichePlusieureComparaison = !AffichePlusieureComparaison;
  }




