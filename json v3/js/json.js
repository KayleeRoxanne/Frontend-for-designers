//api
var header = document.querySelector('header');
var main = document.querySelector('main');
var section = document.querySelector('.carroussel');

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

function showFilm(jsonObj) {
    var info = jsonObj;
    for (var i = 0; i < info.length; i++) {
        var mijnArtikel = document.createElement('article');
        mijnArtikel.classList.add("articleClass");

        var mijnh2 = document.createElement('h2');
        var mijnFoto = document.createElement('img');
        var mijnP = document.createElement('p');
        mijnP.classList.add("plot");
        var mijnP2 = document.createElement('p');
        mijnP2.classList.add("releaseDate");
        var mijnP3 = document.createElement('p');
        mijnP3.classList.add("simplePlot");
        var mijnP4 = document.createElement('p');
        var mijnButton = document.createElement('button');
        var buttonName = document.createElement('h3')



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
            mijnArtikel.appendChild(genreUitkomst);
        };


        mijnArtikel.appendChild(mijnP2);
        mijnArtikel.appendChild(mijnFoto);
        mijnArtikel.appendChild(mijnP3);
        mijnArtikel.appendChild(mijnP);
        mijnArtikel.appendChild(mijnButton);
        section.appendChild(mijnArtikel);

        var acteurs = jsonObj[i].actors;
        for (var j = 0; j < acteurs.length; j++) {
            var acteursinfo = document.createElement('p');
            acteursinfo.classList.add('actors');
            acteursinfo.textContent = acteurs[j].actor_name;
            mijnArtikel.appendChild(acteursinfo);
        };

        var acteursFoto = jsonObj[i].actors;
        for (var j = 0; j < acteursFoto.length; j++) {
            var actFoto = document.createElement('img');
            actFoto.classList.add('pics');
            actFoto.src = acteursFoto[j].url_photo;
            mijnArtikel.appendChild(actFoto);
        };


        //        var reviews = jsonObj[i].reviews;
        //        for (var j = 0; j < reviews.length; j++) {
        //            var reviewTekst = document.createElement('p');
        //            reviewTekst.classList.add('reviews');
        //            //            reviewTekst.textContent = reviews[j].created_at;
        //            reviewTekst.textContent = reviews[j].score;
        //            mijnArtikel.appendChild(reviewTekst);
        //        };

        mijnButton.appendChild(buttonName);
        mijnButton.onclick = function () {
            console.log(this);
            this.parentElement.classList.toggle('active');
            buttonName.textContent = ('Less');
        }

    }
}



//carroussel
var slider = document.querySelector('.carroussel');
var back = document.querySelector('.back');
var next = document.querySelector('.next');
var currentslide = 0;
var breedte = ('.carroussel').length;
console.log(breedte);

function slideCarroussel() {
    slider.style.transform = 'translate(-' + (currentslide * breedte) + '40px)';
}

//actie !
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


document.onkeydown = checkKey;

function checkKey(e) {
    if ((e.keyCode || e.which) == 37) {
        currentslide(-1);
    }
    if ((e.keyCode || e.which) == 39) {
        currentslide(1);
    }

}
