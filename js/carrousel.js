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
    let elmGalerie_img = elmGalerie.querySelectorAll('img');
    let elmCarrousel_figure = document.querySelector('.carrousel_figure');
    let elmCarrousel_form = document.querySelector('.carrousel_form');
    console.log(elmGalerie_img.length);
    console.log(bouton_ouvrir.tagname);

    bouton_ouvrir.addEventListener('mousedown', function(){
        console.log('boîte modale');
        elmCarrousel.classList.add("carrousel--ouvrir");
        ajouter_carrousel();
    })

    elmCarrousel_x.addEventListener('mousedown', function(){
        console.log('boîte modale');
        elmCarrousel.classList.remove("carrousel--ouvrir");
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