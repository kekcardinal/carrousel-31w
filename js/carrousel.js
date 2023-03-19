/*
Condtion pour verif si boite deja ouverte
Bouton ouvrir disparait et add event listener sur image et fait afficher la bonne image
 couper le texte du menu secondaire lorsque écran reduit et mettre juste le sigle

*/

(function () {
  //function IFEE

  //a faire

  // fleches de nav
  // clicker sur une image de la gallerie pour ouvrir le carrousel
  // se débarasser du btn ouvrir
  // formatage
  // form en position absolute
  // bouton x en position absolute

  console.log("début du carrousel");

  let elmCarrousel = document.querySelector(".carrousel");
  let elmCarrousel_x = document.querySelector(".carrousel_x");
  let elmGalerie = document.querySelector(".gallerie");
  let elmGalerie_img = elmGalerie.querySelectorAll(".wp-block-image img");
  let elmCarrousel_figure = document.querySelector(".carrousel_figure");
  let elmCarrousel_form = document.querySelector(".carrousel_form");
  let img_carrousel = document.querySelector(".carrousel_img");

  let elmNavGauche = document.querySelector(".btn_gauche");
  let elmNavDroite = document.querySelector(".btn_droite");

  elmNavGauche.addEventListener("click", function () {
    console.log("gauche");
    activer_image(index_precedent - 1);
  });

  elmNavDroite.addEventListener("click", function () {
    console.log("droite");
    activer_image(index_precedent + 1);
  });

  console.log(elmGalerie_img.length);

  console.log(img_carrousel);

  for (images of elmGalerie_img) {
    images.addEventListener("click", function (event) {
      if (!elmCarrousel.classList.contains("carrousel--ouvrir")) {
        elmCarrousel.classList.add("carrousel--ouvrir");
        ajouter_carrousel(event);
      }
    });
  }

  document.querySelectorAll;

  elmCarrousel_x.addEventListener("mousedown", function () {
    elmCarrousel.classList.remove("carrousel--ouvrir");
    enlever_carrousel();
    enlever_radio();
    index = 0;
  });

  function ajouter_carrousel(event) {
    for (i = 0; i < elmGalerie_img.length; i++) {
      let index_actif = ajouter_img(elmGalerie_img[i], i, event); //ajout l'image dans le carousel
      console.log(index_actif);
      ajouter_radio();

      console.log(event.target.getAttribute("src"));
    }
  }

  function ajouter_img(elmImg, i, event) {
    let elmCarrousel_img = document.createElement("img");
    elmCarrousel_img.setAttribute("src", elmImg.getAttribute("src"));
    elmCarrousel_img.classList.add("carrousel_img");
    elmCarrousel_img.dataset.index = index;
    elmCarrousel_figure.appendChild(elmCarrousel_img);

    if (
      elmCarrousel_img.getAttribute("src") == event.target.getAttribute("src")
    ) {
      elmCarrousel_figure.children[i].classList.add("carrousel_img--activer");
      // activer_image(index);

      console.log(index);
    }
  }

  let index = 0;
  let index_precedent = -1;

  function ajouter_radio() {
    let elmCarrousel_radio = document.createElement("input");
    elmCarrousel_radio.setAttribute("type", "radio");
    elmCarrousel_radio.setAttribute("name", "radCarrousel");
    elmCarrousel_radio.dataset.index = index;
    index++;

    elmCarrousel_form.appendChild(elmCarrousel_radio);

    elmCarrousel_radio.addEventListener("mousedown", function () {
      activer_image(this.dataset.index);
      this.checked = true; // coche le bouton radio correspondant à l'image affichée
    });
  }

  function enlever_radio() {
    let elmCarrousel_radio = document.querySelectorAll(
      "input[name=radCarrousel]"
    );

    for (carrousel of elmCarrousel_radio) {
      carrousel.remove();
      console.log("poulet");
    }
  }

  function enlever_carrousel() {
    let carrousel_a_enlever = document.querySelectorAll(".carrousel_img");

    for (images of carrousel_a_enlever) {
      images.remove();
    }
  }

  function activer_image(index) {
    if (index >= elmCarrousel_figure.children.length) {
      index = 0;
    }

    if (index < 0) {
      index = elmCarrousel_figure.children.length - 1;
    }

    if (index_precedent != -1) {
      elmCarrousel_figure.children[index_precedent].classList.remove(
        "carrousel_img--activer"
      );
    }
    let reset_classe = document.querySelectorAll(".carrousel_img");
    for (images of reset_classe) {
      images.classList.remove("carrousel_img--activer");
    }

    elmCarrousel_figure.children[index].classList.add("carrousel_img--activer");
    index_precedent = index;

    let radCarrousel = document.querySelector(
      `input[name=radCarrousel][data-index="${index}"]`
    );
    radCarrousel.checked = true; // coche le bouton radio correspondant à l'image affichée
  }
})();
