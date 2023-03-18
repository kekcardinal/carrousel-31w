/*
Condtion pour verif si boite deja ouverte
Bouton ouvrir disparait et add event listener sur image et fait afficher la bonne image
 couper le texte du menu secondaire lorsque écran reduit et mettre juste le sigle

*/

(function(){
    //function IFEE

    //a faire

    // fleches de nav
    // clicker sur une image de la gallerie pour ouvrir le carrousel
    // se débarasser du btn ouvrir
    // formatage
    // form en position absolute
    // bouton x en position absolute
    
    console.log("début du carrousel");

    let bouton_ouvrir = document.querySelector(".bouton_ouvrir");
    let elmCarrousel = document.querySelector('.carrousel');
    let elmCarrousel_x=document.querySelector(".carrousel_x");
    let elmGalerie = document.querySelector('.gallerie');
    let elmGalerie_img = elmGalerie.querySelectorAll('.wp-block-image img');
    let elmCarrousel_figure = document.querySelector('.carrousel_figure');
    let elmCarrousel_form = document.querySelector('.carrousel_form');
    console.log(elmGalerie_img.length);
    console.log(bouton_ouvrir.tagname);

    for(images of elmGalerie_img)
    {
        images.addEventListener('click', function(event){
            console.log('boîte modale');
            elmCarrousel.classList.add("carrousel--ouvrir");
            ajouter_carrousel(event);
        })
    }
    

    elmCarrousel_x.addEventListener('mousedown', function(){
        console.log('boîte modale');
        elmCarrousel.classList.remove("carrousel--ouvrir");
        enlever_radio();
})

function ajouter_carrousel()
{
    for(const elmImg of elmGalerie_img)
    {
        ajouter_img(elmImg); //ajout l'image dans le carousel
        ajouter_radio();
        elmCarrousel_figure.children[0].classList.add('carrousel_img--activer');
    }
   }

function ajouter_img(elmImg){
    let elmCarrousel_img=document.createElement('img');
    elmCarrousel_img.setAttribute('src', elmImg.getAttribute('src'));
    elmCarrousel_img.classList.add("carrousel_img");
    elmCarrousel_img.dataset.index=index;
    elmCarrousel_figure.appendChild(elmCarrousel_img);
}

let index = 0 ;
let index_precedent = -1;

function ajouter_radio(){
    let elmCarrousel_radio = document.createElement('Input');
    elmCarrousel_radio.setAttribute("type","radio");
    elmCarrousel_radio.setAttribute("name","radCarrousel");
    elmCarrousel_radio.dataset.index = index;
    index++;

    elmCarrousel_form.appendChild(elmCarrousel_radio);

    elmCarrousel_radio.addEventListener('mousedown',function(){
        activer_image(this.dataset.index);
    });
}

function enlever_radio(){

    let elmCarrousel_radio = document.querySelectorAll('input[name=radCarrousel]');

    for(carrousel of elmCarrousel_radio)
    {
        carrousel.remove();
        console.log("poulet");
    }
}


function activer_image(index)
{
    if (index_precedent != -1)
    {
        elmCarrousel_figure.children[index_precedent].classList.remove('carrousel_img--activer');
    }
    elmCarrousel_figure.children[index].classList.add('carrousel_img--activer');
    index_precedent=index;
}
})();