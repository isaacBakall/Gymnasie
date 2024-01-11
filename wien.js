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

           
           
// Code for Christoph Willibald von Gluck
let audioChr = new Audio('./sound/Orfeo.mp3');
let isPlayingChr = false;
let playPauseIconChr = document.getElementById('playPauseIconChr');
let mp3ButtonChr = document.getElementById('mp3ButtonChr');

function togglePlayChr() {
    togglePlay(audioChr, playPauseIconChr);
}

document.getElementById('bildChrButton').addEventListener('click', function () {
    var textChr = document.querySelector('.textChr');

    togglePerson(textChr, mp3ButtonChr, '.soundChr');
});

// Code for Joseph Haydn
let audioHay = new Audio('./sound/Hay.mp3');
let isPlayingHay = false;
let playPauseIconHay = document.getElementById('playPauseIconHay');
let mp3ButtonHay = document.getElementById('mp3ButtonHay');

function togglePlayHay() {
    togglePlay(audioHay, playPauseIconHay);
}

document.getElementById('bildHayButton').addEventListener('click', function () {
    var textHay = document.querySelector('.textHay');

    togglePerson(textHay, mp3ButtonHay, '.soundHay');
});

// Code for Muzio Clementi
let audioMuz = new Audio('./sound/Sonatina.mp3');
let isPlayingMuz = false;
let playPauseIconMuz = document.getElementById('playPauseIconMuz');
let mp3ButtonMuz = document.getElementById('mp3ButtonMuz');

function togglePlayMuz() {
    togglePlay(audioMuz, playPauseIconMuz);
}

document.getElementById('bildMuzButton').addEventListener('click', function () {
    var textMuz = document.querySelector('.textMuz');

    togglePerson(textMuz, mp3ButtonMuz, '.soundMuz');
});

// Code for Wolfgang Amadeus Mozart
let audioWof = new Audio('./sound/eine.mp3');
let isPlayingWof = false;
let playPauseIconWof = document.getElementById('playPauseIconWof');
let mp3ButtonWof = document.getElementById('mp3ButtonWof');

function togglePlayWof() {
    togglePlay(audioWof, playPauseIconWof);
}

document.getElementById('bildWofButton').addEventListener('click', function () {
    var textWof = document.querySelector('.textWof');

    togglePerson(textWof, mp3ButtonWof, '.soundWof');
});


// Code for Joseph Martin Kraus
let audioMar = new Audio('./sound/Mar.mp3');
let isPlayingMar = false;
let playPauseIconMar = document.getElementById('playPauseIconMar');
let mp3ButtonMar = document.getElementById('mp3ButtonMar');

function togglePlayMar() {
    togglePlay(audioMar, playPauseIconMar);
}

document.getElementById('bildMarButton').addEventListener('click', function () {
    var textMar = document.querySelector('.textMar');

    togglePerson(textMar, mp3ButtonMar, '.soundMar');
});

// Code for Ludvig Van Beethoven
let audioLud = new Audio('./sound/Orlando.mp3');
let isPlayingLud = false;
let playPauseIconLud = document.getElementById('playPauseIconLud');
let mp3ButtonLud = document.getElementById('mp3ButtonLud');

function togglePlayLud() {
    togglePlay(audioLud, playPauseIconLud);
}

document.getElementById('bildLudButton').addEventListener('click', function () {
    var textLud = document.querySelector('.textLud');

    togglePerson(textLud, mp3ButtonLud, '.soundLud');
});