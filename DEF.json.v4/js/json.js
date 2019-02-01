//Variabele aanmaken vanuit html
var header = document.querySelector('header');
var main = document.querySelector('main');
var section = document.querySelector('.carroussel');

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
        mijnArtikel.classList.add("articleClass");

        var mijnh2 = document.createElement('h2');
        var mijnFoto = document.createElement('img');
        mijnFoto.classList.add("fotoFilm");
        var mijnP = document.createElement('p');
        mijnP.classList.add("plot");
        var mijnP2 = document.createElement('p');
        mijnP2.classList.add("releaseDate");
        var mijnP3 = document.createElement('p');
        mijnP3.classList.add("simplePlot");
        var mijnP4 = document.createElement('p');
        var boxActeurs = document.createElement('div');
        boxActeurs.classList.add("kaderActeurs");
        var boxGenres = document.createElement('div');
        boxGenres.classList.add('kaderGenres');
        var boxActeursFoto = document.createElement('div');
        boxActeursFoto.classList.add('kaderActeursFoto');
        var fadeInStuff = document.createElement('div');
        fadeInStuff.classList.add('fadeInElements');
        var mijnButton = document.createElement('button');
        var buttonName = document.createElement('h3');


        //zorgt voor elk kenmerk in een box te laten zien:
        mijnh2.textContent = info[i].title;
        mijnP2.textContent = info[i].release_date;
        mijnFoto.src = info[i].cover;
        mijnP3.textContent = info[i].simple_plot;
        mijnP.textContent = jsonObj[i].plot;
        buttonName.textContent = ('More');

        mijnArtikel.appendChild(mijnh2);

        var genres = jsonObj[i].genres;
        for (var j = 0; j < genres.length; j++) {
            var genreUitkomst = document.createElement('p');
            genreUitkomst.classList.add('genres');
            genreUitkomst.textContent = genres[j];
            boxGenres.appendChild(genreUitkomst);
        };


        mijnArtikel.appendChild(mijnP2);
        mijnArtikel.appendChild(boxGenres);
        mijnArtikel.appendChild(mijnFoto);
        mijnArtikel.appendChild(mijnP3);
        mijnArtikel.appendChild(mijnP);
        mijnArtikel.appendChild(boxActeursFoto);
        mijnArtikel.appendChild(boxActeurs);
        mijnArtikel.appendChild(mijnButton);
        section.appendChild(mijnArtikel);


        var acteurs = jsonObj[i].actors;
        for (var j = 0; j < acteurs.length; j++) {
            var acteursinfo = document.createElement('p');
            acteursinfo.classList.add('actors');
            acteursinfo.textContent = acteurs[j].actor_name;
            boxActeurs.appendChild(acteursinfo);
        };

        var acteursFoto = jsonObj[i].actors;
        for (var j = 0; j < acteursFoto.length; j++) {
            var actFoto = document.createElement('img');
            actFoto.classList.add('pics');
            actFoto.src = acteursFoto[j].url_photo;
            boxActeursFoto.appendChild(actFoto);
        };

        //button activeren
        mijnButton.appendChild(buttonName);
        mijnButton.onclick = function () {
            console.log(this);
            this.parentElement.classList.toggle('active');
            buttonName.textContent = ('Less');
        }

    }
}



//carroussel: Alle benodigde elementen benoemen en aanmaken. Uit html halen.
var slider = document.querySelector('.carroussel');
var back = document.querySelector('.back');
var next = document.querySelector('.next');
var currentslide = 0;
var breedte = ('.carroussel').length;
console.log(breedte);

//inladen van inhoud carroussel
function slideCarroussel() {
    slider.style.transform = 'translate(-' + (currentslide * breedte) + '40px)';
}

//actie! Als je klikt dan moet je naar het volgende item sliden
next.addEventListener("click", function () {
    console.log('volgende slide + keyCode');
    currentslide++;
    if (currentslide > 5) {
        currentslide = 0;
    }
    slideCarroussel();

});

back.addEventListener("click", function () {
        console.log('Naar slide');
        currentslide--;
        if (currentslide < 0) {
            currentslide = 5;
        }
        slideCarroussel();
    }

);

//Aanmaken: toets < 37 en toets >39 van het toetsenbord slide naar rechts en links
document.onkeydown = checkKey;

//Zorgt hier ook dat de laatste slide weer naar de eerste gaat
function checkKey(e) {
    //console.log("wordt deze functie aangeroepen???", e)
    if (e.keyCode == 37) {
        //next;
        //console.log("next")
        back.click();
    }
    if (e.keyCode == 39) {
        //back;
        //console.log("back")
        next.click();
    }

}