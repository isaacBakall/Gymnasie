//function toggle person
function togglePerson(textPerson, mp3Person, soundPerson) {

    if (textPerson.style.display === 'none') {
        textPerson.style.display = 'block';
        mp3Person.style.display = 'flex';
    } else {
        textPerson.style.display = 'none';
        mp3Person.style.display = 'none';
    }

    var elementsToToggle = document.querySelectorAll(soundPerson);

    elementsToToggle.forEach(function (element) {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
};

//function toggle play
function togglePlay(mp3Person, playPauseIconPerson) {
    if (!mp3Person.paused) {
        mp3Person.pause();
        
        playPauseIconPerson.src = 'img/start.png';
    } else {
        mp3Person.play();
        playPauseIconPerson.src = 'img/pause.png';
    }
}

           
           
// Code for Josquin Des Prez
let audioJos = new Audio('./sound/Josquin.mp3');
let isPlayingJos = false;
let playPauseIconJos = document.getElementById('playPauseIconJos');
let mp3ButtonJos = document.getElementById('mp3ButtonJos');

function togglePlayJos() {
    togglePlay(audioJos, playPauseIconJos);
}

document.getElementById('bildJosButton').addEventListener('click', function () {
    var textJos = document.querySelector('.textJos');

    togglePerson(textJos, mp3ButtonJos, '.soundJos');
});

// Code for Palestrina 
let audioPal = new Audio('./sound/Palestrina.mp3');
let isPlayingPal = false;
let playPauseIconPal = document.getElementById('playPauseIconPal');
let mp3ButtonPal = document.getElementById('mp3ButtonPal');

function togglePlayPal() {
    togglePlay(audioPal, playPauseIconPal);
}

document.getElementById('bildPalButton').addEventListener('click', function () {
    var textPal = document.querySelector('.textPal');

    togglePerson(textPal, mp3ButtonPal, '.soundPal');
});

// Code for Thomas Tallis 
let audioTal = new Audio('./sound/Tal.mp3');
let isPlayingTal = false;
let playPauseIconTal = document.getElementById('playPauseIconTal');
let mp3ButtonTal = document.getElementById('mp3ButtonTal');

function togglePlayTal() {
    togglePlay(audioTal, playPauseIconTal);
}

document.getElementById('bildTalButton').addEventListener('click', function () {
    var textTal = document.querySelector('.textTal');

    togglePerson(textTal, mp3ButtonTal, '.soundTal');
});

// Code for William Byrd
let audioByr = new Audio('./sound/byrd.mp3');
let isPlayingByr = false;
let playPauseIconByr = document.getElementById('playPauseIconByr');
let mp3ButtonByr = document.getElementById('mp3ButtonByr');

function togglePlayByr() {
    togglePlay(audioByr, playPauseIconByr);
}

document.getElementById('bildByrButton').addEventListener('click', function () {
    var textByr = document.querySelector('.textByr');

    togglePerson(textByr, mp3ButtonByr, '.soundByr');
});


// Code for Guillaume Dufay
let audioDuf = new Audio('./sound/duf.mp3');
let isPlayingDuf = false;
let playPauseIconDuf = document.getElementById('playPauseIconDuf');
let mp3ButtonDuf = document.getElementById('mp3ButtonDuf');

function togglePlayDuf() {
    togglePlay(audioDuf, playPauseIconDuf);
}

document.getElementById('bildDufButton').addEventListener('click', function () {
    var textDuf = document.querySelector('.textDuf');

    togglePerson(textDuf, mp3ButtonDuf, '.soundDuf');
});

// Code for Orlando di Lasso
let audioLas = new Audio('./sound/Orlando.mp3');
let isPlayingLas = false;
let playPauseIconLas = document.getElementById('playPauseIconLas');
let mp3ButtonLas = document.getElementById('mp3ButtonLas');

function togglePlayLas() {
    togglePlay(audioLas, playPauseIconLas);
}

document.getElementById('bildLasButton').addEventListener('click', function () {
    var textLas = document.querySelector('.textLas');

    togglePerson(textLas, mp3ButtonLas, '.soundLas');
});