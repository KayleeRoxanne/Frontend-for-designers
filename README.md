# Frontend-for-designers
Frontend for designers is goed voor mijn ontwikkelingen in het schrijven van coden. Ik vindt het erg interessant, alleen gaat het mij niet makkelijk af. Toch geeft het mij een echte voldoening, wanneer de codes en functies werken. Dit vak biedt mij een kans om op een wat minder snel niveau toch beter te leren coderen. 

PROCES

Versie 1: 
Bij de eerste versie ben ik vooral bezig geweest met de structuur van de website. Welke functies wil ik er in hebben en welke elementen moeten in het menu. Vanuit de vorige opdracht ben ik bezig geweest met het indelen van het carrousel, zowel in html als in javascript(js). Eerst zal ik ook alle benodigde elementen benoemen en aanmaken in mijn javascript bestand. Voor de sfeer heb ik een aantal sfeerfoto's uitgezocht om die bovenin van de website als slider te laten zien. De afbeeldingen staan in mijn html bestand en de functie maak ik aan in js. Om het carroussel optimaal te laten werken wilde ik de functie toevoegen waarmee je met je pijlen op het toetsenbord kan sliden. Met de functie checkkKey (e) heb ik geprobeerd de toetsen nummers in te voegen. Helaas is dit in deze versie nog niet gelukt. 

Het inladen van de API's was veel ingewikkelder dan ik dacht. Ondanks de handleiding, ging het mij niet gemakkelijk af om de Api's te kunnen inladen. Als eerste heb ik met document.querySelector de variabele aangemaakt die nodig zijn. Doormiddel van het RquestURL laadt ik de link in met de api's in mijn geval de films. Met een function voor het inladen van de api's, zijn de api's in inspect zichtbaar. Helaas kwam ik na lang zoeken ook hier pas achter. Nu ik dit in kon zien, werd het een stuk inzichtelijker en makkelijker. Nu eerst heb ik variabelen aangemaakt met createElement, waardoor ik de stukjes van de api's kan bewerken in css. Zoals een h2, p, img, button etcetera. Welke stukjes wil ik laten zien van de api's? Met een function loop benoem ik de aangemaakte variabele en link ik de classlist van bijvoorbeeld 'actors'. Frustrerend is dat je denkt het te snappen en dan toch werkt het niet. Na lang zoeken vond ik wat er miste. Het appendChild element. HIJ WERKT!!!

Na mijn vorige filter opdracht, dacht ik gemakkelijk een filter voor mijn film website aan te maken. In HTML heb ik de navigatie met alle genres (die voorkomen in de api's) aangemaakt. Dan vanuit javascript heb ik de variabele aangemaakt en een addEventlistener bij klik moet je deze genre showen. Ik ben echter nog niet verder gekomen dan dit.

Het mooi maken van mijn website lag een stuk lager op mijn prioriteiten lijstje dan mijn website funcioneel werkend maken. 

Conclusie: Ik vind het heel erg moeilijk om uit mezelf te vinden wat ik moet doen om een functie werkend te laten maken. Maar als zoals nu de api's ingeladen zijn, dan geeft het mij wel een goede kick om door te gaan. 

Link 1: https://kayleeroxanne.github.io/Frontend-for-designers/DEF.json.v1/index.html

Versie 2: 
Tijdens de tweede versie van mijn filmwebsite ben ik vooral bezig geweest met de filter, 'mooi' maken van de website door middel van bijvoorbeeld grid, de functie 'read' more en heel veel uitgezocht en geprobeerd met de filter functie. Ik heb geprobeerd er voor te zorgen dat het menu open klapt met de categoriën, maar helaas is dat tot nog toe nog niet gelukt. Als je onder de navigatiebalk scrolt met je muis, zie je de hover van de categorie-items wel, maar het 'uitklapmenu' werkt nog niet zoals ik wil. 

Het carroussel van de sfeerfoto's zijn beter uitgelijnt en ik ben bezig geweest om te zorgen dat je met de pijltjes op het toetsenbord dat plaatjes kan verschuiven. Helaas is dit tot nog toe niet gelukt. Wel zijn de klikbare pijlen beter uitgelijnd en goed in zicht. De pijlen werken zelfs zo, dat als je bij de laatste item terecht komt, begint hij weer vanaf het begin met if (currentslide > 5) {currentslide = 0;

Ik heb gekozen voor een grid van 4 op een rij. Zo is het overzicht van films direct te zien. Om meer informatie te krijgen per film item kun je klikken op meer waardoor de overige informatie openklapt. 

Conclusie: Het is frustrerend als dingen niet lukken, maar je merkt door het vaker te doen, dat bijvoorbeeld het carroussel nu wel werkt met de pijlen. 

Link 2: https://kayleeroxanne.github.io/Frontend-for-designers/DEF.json.v2/index.html

Versie 3: 
In deze versie ben ik helemaal omgegaan naar een andere lay-out. In mijn feedback werd aangegeven dat de sfeerplaatjes een beetje too much waren. Daarom heb ik deze uit de website gehaald. Maar omdat het carroussel wel gebruikt moest worden heb ik gekozen om de films in een overzichtelijke carroussel te zetten. Ook de gehele menu balk was onzinnig, waardoor ik deze eruit heb gehaald. Er wordt nu alleen gefocused op de films, waar het om gaat.

In het html bestand heb ik de sfeer images uitgehaald en alleen de sections benoemd met een class. In javascript zorg ik dat het het carroussel van de films verwijst naar die plek in de boom van het html. Nu zijn de sfeerbeelden vervangen door de films. Om aan te geven hoeveel items er in het carroussel aanwezig zijn heb ik veel uitgeprobeerd en gezocht naar bullits die dit kan aangeven. Helaas is het mij tot nu nog niet gelukt. Ik heb nu gekozen voor [1/6], dit geeft aan dat je 1 item van de 6 bekijkt. Per item wordt gebruik gemaakt van een box met een solid, ik heb de marge zo groot mogelijk gemaakt, waardoor de inhoud over bijna het gehele beeld te zien is. Nu zijn er in vergelijking met de vorige versie geen overlappingen meer buiten de boxen. In die boxen heb ik via css elk deel een plaats gegeven. Zoals de 'more' button is nu rechtsonder in de box geplaats. Om het woord 'more' te veranderen naar 'less' wanneer hij actief is heb ik geprobeerd de volgende code te gebruiken: buttonName.textContent = ('Less'); Ook op de verschillende manieren met .active hidden in het css bestand helpt niet. Helaas is het mij nog niet gelukt dat het werkt. De plaatjes van de acteurs zijn nu bij de film toegevoegd, helaas staan de namen nog wel los van de foto's. Ik heb geprobeerd deze twee aan elkaar te koppelen, maar ook dit is helaas nog niet gelukt.

Conclusie: Ik vind de website een hele mooie verbetering hebben, er zijn alleen nog een paar details die ik zou willen intergreren.

Link: https://kayleeroxanne.github.io/Frontend-for-designers/DEF.json.v3/index.html

Versie 4:
Omdat ik in de vorige versies vooral veel inhoud en functies heb omgegooid, ga ik met deze versie de laatste puntjes op de 'i' zetten.

In het CSS bestand heb ik veel design dingen aangepast, maar vooral ook veel uitgeprobeerd. De 'more' en 'less' button met de functies 'hidden' en 'active', na veel proberen is het nog steeds niet gelukt. Wel ben ik erachter gekomen, dat vanuit de JS het woordje 'Less' terug komt in het laatste film item in het carroussel. 

Ik heb geprobeerd de pijlen van het carroussel vast te zetten op de juiste plek in CSS met /*display: block;*/, /*position: sticky;*/, helaas krijg ik ook dit nog niet voor elkaar. Wanneer de meer informatie openklapt glijden de pijlen mee naar beneden. De foto's en de namen van de acteurs staan nu gepositioneerd bij elkaar. Helaas heb ik bij een grote hoeveelheid acteurs dat een aantal buiten de informatie box terecht komen. Hier heb ik geprobeerd om met overflow: hidden; en flex-wrap: wrap; deze acteurs naar binnen te brengen. Helaas komen hierdoor de namen niet precies onder de foto's terecht indien er meerdere regels aan acteurs te zien zijn. 

Conclusie: Voor als je weet hoe je begonnen bent en hoe het eindresultaat eruit ziet en werkt, ben ik wel trots op mijn werk. Ik vind het coderen heel erg lastig, maar ik ben erg blij dat ik er nu weer mee bezig ben geweest. Zo leer ik stap voor stap op mijn tempo steeds meer! Ik ben nog al een perfectionist, daarom vind ik het lastig om ineens te stoppen met mijn werk, omdat ik mijn best gedaan heb. Maar nogmaals ik ben blij dat ik zover ben gekomen met dit vak.

Link: https://kayleeroxanne.github.io/Frontend-for-designers/DEF.json.v4/index.html
