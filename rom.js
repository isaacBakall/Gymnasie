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

           
           
// Code for Franz Schubert
let audioFra = new Audio('./sound/Schubert - _Ständchen_ D957.mp3');
let isPlayingFra = false;
let playPauseIconFra = document.getElementById('playPauseIconFra');
let mp3ButtonFra = document.getElementById('mp3ButtonFra');

function togglePlayFra() {
    togglePlay(audioFra, playPauseIconFra);
}

document.getElementById('bildFraButton').addEventListener('click', function () {
    var textFra = document.querySelector('.textFra');

    togglePerson(textFra, mp3ButtonFra, '.soundFra');
});

// Code for Frederic Chopin 
let audioFre = new Audio('./sound/Chopin - Ballade No.1 in G minor, Op.23 (Krystian Zimerman).mp3');
let isPlayingFre = false;
let playPauseIconFre = document.getElementById('playPauseIconFre');
let mp3ButtonFre = document.getElementById('mp3ButtonFre');

function togglePlayFre() {
    togglePlay(audioFre, playPauseIconFre);
}

document.getElementById('bildFreButton').addEventListener('click', function () {
    var textFre = document.querySelector('.textFre');

    togglePerson(textFre, mp3ButtonFre, '.soundFre');
});

// Code for Camille Saint-Saëns
let audioCam = new Audio('./sound/Camille Saint-Saëns - Danse Macabre.mp3');
let isPlayingCam = false;
let playPauseIconCam = document.getElementById('playPauseIconCam');
let mp3ButtonCam = document.getElementById('mp3ButtonCam');

function togglePlayCam() {
    togglePlay(audioCam, playPauseIconCam);
}

document.getElementById('bildCamButton').addEventListener('click', function () {
    var textCam = document.querySelector('.textCam');

    togglePerson(textCam, mp3ButtonCam, '.soundCam');
});

// Code for Pjotr Iljitj Tjajkovskij
let audioPjo = new Audio('./sound/Tchaikovsky.mp3');
let isPlayingPjo = false;
let playPauseIconPjo = document.getElementById('playPauseIconPjo');
let mp3ButtonPjo = document.getElementById('mp3ButtonPjo');

function togglePlayPjo() {
    togglePlay(audioPjo, playPauseIconPjo);
}

document.getElementById('bildPjoButton').addEventListener('click', function () {
    var textPjo = document.querySelector('.textPjo');

    togglePerson(textPjo, mp3ButtonPjo, '.soundPjo');
});


// Code for Edvard Grieg
let audioEdv = new Audio('./sound/Grieg.mp3');
let isPlayingEdv = false;
let playPauseIconEdv = document.getElementById('playPauseIconEdv');
let mp3ButtonEdv = document.getElementById('mp3ButtonEdv');

function togglePlayEdv() {
    togglePlay(audioEdv, playPauseIconEdv);
}

document.getElementById('bildEdvButton').addEventListener('click', function () {
    var textEdv = document.querySelector('.textEdv');

    togglePerson(textEdv, mp3ButtonEdv, '.soundEdv');
});

// Code for Sergej Rachmaninov
let audioSer = new Audio('./sound/Rachmaninoff_ Piano Concerto No. 1 in F-Sharp Minor, Op. 1 - I. Vivace.mp3');
let isPlayingSer = false;
let playPauseIconSer = document.getElementById('playPauseIconSer');
let mp3ButtonSer = document.getElementById('mp3ButtonSer');

function togglePlaySer() {
    togglePlay(audioSer, playPauseIconSer);
}

document.getElementById('bildSerButton').addEventListener('click', function () {
    var textSer = document.querySelector('.textSer');

    togglePerson(textSer, mp3ButtonSer, '.soundSer');
});