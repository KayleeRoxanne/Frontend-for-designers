console.log('Kleurenfilter');

/* Filter */
var filter = document.querySelector('nav > ul');
var blueButton = filter.querySelector('li:nth-of-type(1)');
var pinkButton = filter.querySelector('li:nth-of-type(2)');
var purpleButton = filter.querySelector('li:nth-of-type(3)');
var redButton = filter.querySelector('li:nth-of-type(4)');
var whiteButton = filter.querySelector('li:nth-of-type(5)');
var yellowButton = filter.querySelector('li:nth-of-type(6)');

var showAllButton = filter.querySelector('li:nth-of-type(7)')

var bluePlaatje = document.querySelector('.blue')

blueButton.addEventListener('click', showBlue);
pinkButton.addEventListener('click', showPink);
purpleButton.addEventListener('click', showPurple);
redButton.addEventListener('click', showRed);
whiteButton.addEventListener('click', showWhite);
yellowButton.addEventListener('click', showYellow);
showAllButton.addEventListener('click', showAll);


function showBlue() {
    //1 queryselectall alle items
    var alleblauweplaatjes = document.querySelectorAll('img:not(.blue)');
    //2 for loop
    for (i = 0; i < alleblauweplaatjes.length; i++) {
        //3 remove class 'hidden'
        alleblauweplaatjes[i].classList.add('hidden');
    }
}

function showPink() {
    //1 queryselectall alle items
    var allerozeplaatjes = document.querySelectorAll('img:not(.pink)');
    //2 for loop
    for (i = 0; i < allerozeplaatjes.length; i++) {
        //3 remove class 'hidden'
        allerozeplaatjes[i].classList.add('hidden');
    }
}

function showPurple() {
    //1 queryselectall alle items
    var allepaarseplaatjes = document.querySelectorAll('img:not(.purple)');
    //2 for loop
    for (i = 0; i < allepaarseplaatjes.length; i++) {
        //3 remove class 'hidden'
        allepaarseplaatjes[i].classList.add('hidden');
    }
}

function showRed() {
    //1 queryselectall alle items
    var allerodeplaatjes = document.querySelectorAll('img:not(.red)');
    //2 for loop
    for (i = 0; i < allerodeplaatjes.length; i++) {
        //3 remove class 'hidden'
        allerodeplaatjes[i].classList.add('hidden');
    }
}

function showWhite() {
    //1 queryselectall alle items
    var allewitplaatjes = document.querySelectorAll('img:not(.white)');
    //2 for loop
    for (i = 0; i < allewitplaatjes.length; i++) {
        //3 remove class 'hidden'
        allewitplaatjes[i].classList.add('hidden');
    }
}

function showYellow() {
    //1 queryselectall alle items
    var allegeleplaatjes = document.querySelectorAll('img:not(.yellow)');
    //2 for loop
    for (i = 0; i < allegeleplaatjes.length; i++) {
        //3 remove class 'hidden'
        allegeleplaatjes[i].classList.add('hidden');
    }
}

function showAll() {
    //1 queryselectall alle items
    var alleplaatjes = document.querySelectorAll('img');
    //2 for loop
    for (i = 0; i < alleplaatjes.length; i++) {
        //3 remove class 'hidden'
        alleplaatjes[i].classList.remove('hidden');
    }
}