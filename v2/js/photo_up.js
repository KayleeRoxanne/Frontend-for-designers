console.log('Kleurenfilter');

/* Filter */
var filter = document.querySelector('nav > ul');
var blueButton = filter.querySelector('li:nth-of-type(1)');
var pinkButton = filter.querySelector('li:nth-of-type(2)');
var purpleButton = filter.querySelector('li:nth-of-type(3)');
var redButton = filter.querySelector('li:nth-of-type(4)');
var whiteButton = filter.querySelector('li:nth-of-type(5)');
var yellowButton = filter.querySelector('li:nth-of-type(6)');

var showAllButton = filter.querySelector('h1')

var bluePlaatje = document.querySelector('.blue')

blueButton.addEventListener('click', showBlue);
pinkButton.addEventListener('click', showPink);
purpleButton.addEventListener('click', showPurple);
redButton.addEventListener('click', showRed);
whiteButton.addEventListener('click', showWhite);
yellowButton.addEventListener('click', showYellow);
pinkButton.addEventListener('click', showAll);


function showBlue() {
    //1 queryselectall alle items
    var alleblauweplaatjes = document.querySelectorAll('img:not(.blue)');
    //2 for loop
    for (i = 0; i < alleblauweplaatjes.length; i++) {
        //3 remove class 'hidden'
        alleblauweplaatjes[i].classList.add('hidden');
    }

    /*
    bluePlaatje.classList.remove('hidden');
    document.querySelector('.pink').classList.add('hidden');
    document.querySelector('.purple').classList.add('hidden');
    document.querySelector('.red').classList.add('hidden');
    document.querySelector('.white').classList.add('hidden');
    document.querySelector('.yellow').classList.add('hidden');
    */
}

function showAll() {
    //1 queryselectall alle items
    var alleplaatjes = document.querySelectorAll('img');
    //2 for loop
    for (i = 0; i < alleplaatjes.length; i++) {
        //3 remove class 'hidden'
        alleplaatjes[i].classList.remove('hidden');
    }

    /*
    bluePlaatje.classList.remove('hidden');
    document.querySelector('.pink').classList.remove('hidden');
    document.querySelector('.purple').classList.remove('hidden');
    document.querySelector('.red').classList.remove('hidden');
    document.querySelector('.white').classList.remove('hidden');
    document.querySelector('.yellow').classList.remove('hidden');
    */
}