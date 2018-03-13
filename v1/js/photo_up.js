console.log('Kleurenfilter');

/* Filter */
var filter = document.querySelector('nav > ul');
var blueButton = filter.querySelector('li:nth-of-type(1)');
var pinkButton = filter.querySelector('li:nth-of-type(2)');
var purpleButton = filter.querySelector('li:nth-of-type(3)');
var redButton = filter.querySelector('li:nth-of-type(4)');
var whiteButton = filter.querySelector('li:nth-of-type(5)');
var yellowButton = filter.querySelector('li:nth-of-type(6)');

function showBlue() {
    //event.preventDefault();
    document.querySelector('.blue').classList.remove('hidden');
    document.querySelector('.pink').classList.add('hidden');
    document.querySelector('.purple').classList.add('hidden');
    document.querySelector('.red').classList.add('hidden');
    document.querySelector('.white').classList.add('hidden');
    document.querySelector('.yellow').classList.add('hidden');
}

function showPink() {
    //event.preventDefault();
    document.querySelector('.pink').classList.remove('hidden');
    document.querySelector('.blue, .purple, .red, .white, .yellow').classList.add('hidden');
}

function showPurple() {
    //event.preventDefault();
    document.querySelector('.purple').classList.remove('hidden');
    document.querySelector('.blue, .pink, .red, .white, .yellow').classList.add('hidden');
}

function showRed() {
    //event.preventDefault();
    document.querySelector('.red').classList.remove('hidden');
    document.querySelector('.blue, .pink, .purple, .white, .yellow').classList.add('hidden');
}

function showWhite() {
    //event.preventDefault();
    document.querySelector('.white').classList.remove('hidden');
    document.querySelector('.blue, .pink, .purple, .red, .yellow').classList.add('hidden');
}

function showYellow() {
    //event.preventDefault();
    document.querySelector('.yellow').classList.remove('hidden');
    document.querySelector('.blue, .pink, .purple, .red, .white').classList.add('hidden');
}

blueButton.addEventListener('click', showBlue);
pinkButton.addEventListener('click', showPink);
purpleButton.addEventListener('click', showPurple);
redButton.addEventListener('click', showRed);
whiteButton.addEventListener('click', showWhite);
yellowButton.addEventListener('click', showYellow);