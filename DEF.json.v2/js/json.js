//carroussel: Alle benodigde elementen benoemen en aanmaken. Uit html halen.
var slider = document.querySelector('.carroussel');
var back = document.querySelector('.back');
var next = document.querySelector('.next');
var currentslide = 0;
var breedte = document.querySelector('main img').width;
console.log(breedte);

//inladen van inhoud carroussel
function slideCarroussel() {
    slider.style.transform = 'translate(-' + (currentslide * breedte) + 'px)';
}

//Aanmaken: toets < 37 en toets >39 van het toetsenbord slide naar rechts en links
document.onkeydown = checkKey;

function checkKey(e) {
    if ((e.keyCode || e.which) == 37) {
        currentslide(-1);
    }
    if ((e.keyCode || e.which) == 39) {
        currentslide(1);
    }

}
//actie! Bij klik slide next of back
next.addEventListener("click", function () {
    console.log('volgende slide + keyCode');
    currentslide++;
    if (currentslide > 3) {
        currentslide = 0;
    }
    slideCarroussel();

});

back.addEventListener("click", function () {
        console.log('Naar slide');
        currentslide--;
        if (currentslide < 0) {
            currentslide = 0;
        }
        slideCarroussel();
    }

);

//Variabele aanmaken vanuit html
var header = document.querySelector('header');
var main = document.querySelector('main');
var section = document.querySelector('.sct1');

//api link inladen
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();
console.log(request);

request.onload = function () {
    var jsonObj = request.response;
    showFilm(jsonObj);
}

//Het lezen van de articles en aanmaken van variabelen
function showFilm(jsonObj) {
    var info = jsonObj;
    for (var i = 0; i < info.length; i++) {
        var mijnArtikel = document.createElement('article');

        //maak nieuwe elementen aan met zijn kenmerk 
        var mijnh2 = document.createElement('h2');
        var mijnFoto = document.createElement('img');
        var mijnP = document.createElement('p');
        var mijnP2 = document.createElement('p');
        var mijnP3 = document.createElement('p');
        var mijnP4 = document.createElement('p');
        var mijnButton = document.createElement('button');
        var buttonName = document.createElement('h3')

        mijnh2.textContent = info[i].title;
        mijnFoto.src = info[i].cover;
        mijnP.textContent = jsonObj[i].plot;
        buttonName.textContent = ('More');

        mijnArtikel.appendChild(mijnh2);
        mijnArtikel.appendChild(mijnFoto);
        mijnArtikel.appendChild(mijnButton);
        mijnArtikel.appendChild(mijnP);
        section.appendChild(mijnArtikel);

        var acteurs = jsonObj[i].actors;
        for (var j = 0; j < acteurs.length; j++) {
            var acteursinfo = document.createElement('p');
            acteursinfo.classList.add('actors');
            acteursinfo.textContent = acteurs[j].actor_name;
            mijnArtikel.appendChild(acteursinfo);
        };

        var reviews = jsonObj[i].reviews;
        for (var j = 0; j < reviews.length; j++) {
            var reviewTekst = document.createElement('p');
            reviewTekst.classList.add('reviews');
            //            reviewTekst.textContent = reviews[j].created_at;
            reviewTekst.textContent = reviews[j].score;
            mijnArtikel.appendChild(reviewTekst);
        };

        var genres = jsonObj[i].genres;
        for (var j = 0; j < genres.length; j++) {
            var genreUitkomst = document.createElement('p');
            genreUitkomst.classList.add('genres');
            genreUitkomst.textContent = genres[j];
            mijnArtikel.appendChild(genreUitkomst);
        };

        //button activeren
        mijnButton.appendChild(buttonName);
        mijnButton.onclick = function () {
            console.log(this);
            this.parentElement.classList.toggle('active');
            //indien actief 'less'
            buttonName.textContent = ('Less');
        }

    }
}

/* Filter: aanmaken uit html*/
var filter = document.querySelector('.menu > ul');
var horrorButton = filter.querySelector('li:nth-of-type(1)');
var crimeButton = filter.querySelector('li:nth-of-type(2)');
var dramaButton = filter.querySelector('li:nth-of-type(3)');
var thrillerButton = filter.querySelector('li:nth-of-type(4)');
var actionButton = filter.querySelector('li:nth-of-type(5)');
var adventureButton = filter.querySelector('li:nth-of-type(6)');

var showAllButton = filter.querySelector('li:nth-of-type(7)')

var horrorFilm = document.querySelector('.horror');

//Bij klik alleen deze genre laten zien
horrorButton.addEventListener('click', showHorror);
crimeButton.addEventListener('click', showCrime);
dramaButton.addEventListener('click', showDrama);
thrillerButton.addEventListener('click', showThriller);
actionButton.addEventListener('click', showAction);
adventureButton.addEventListener('click', showAdventure);
showAllButton.addEventListener('click', showAll);