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
        turnOff();
        mp3Person.play();
        playPauseIconPerson.src = 'img/pause.png';
    }
}

// Function to turn off all audio elements
function turnOff() {
    audioHil.pause();
    audioBar.pause();
    audioFan.pause();
    audioSch.pause();
    audioEth.pause();
    audioAmy.pause();

    playPauseIconHil.src = 'img/start.png';
    playPauseIconBar.src = 'img/start.png';
    playPauseIconFan.src = 'img/start.png';
    playPauseIconSch.src = 'img/start.png';
    playPauseIconEth.src = 'img/start.png';
    playPauseIconAmy.src = 'img/start.png';
}
           
           
// Code for Hildegard av Bingen
let audioHil = new Audio('sound/Hildegard.mp3');
let isPlayingHil = false;
let playPauseIconHil = document.getElementById('playPauseIconHil');
let mp3ButtonHil = document.getElementById('mp3ButtonHil');

function togglePlayHil() {
    togglePlay(audioHil, playPauseIconHil);
}

document.getElementById('bildHilButton').addEventListener('click', function () {
    var textHil = document.querySelector('.textHil');

    togglePerson(textHil, mp3ButtonHil, '.soundHil');
});

// Code for Barbara Strozzi
let audioBar = new Audio('sound/Barbara.mp3');
let isPlayingBar = false;
let playPauseIconBar = document.getElementById('playPauseIconBar');
let mp3ButtonBar = document.getElementById('mp3ButtonBar');

function togglePlayBar() {
    togglePlay(audioBar, playPauseIconBar);
}

document.getElementById('bildBarButton').addEventListener('click', function () {
    var textBar = document.querySelector('.textBar');

    togglePerson(textBar, mp3ButtonBar, '.soundBar');
});

// Code for Fanny Mendelssohn
let audioFan = new Audio('sound/Mendehlsson-Schwanenlied.mp3');
let isPlayingFan = false;
let playPauseIconFan = document.getElementById('playPauseIconFan');
let mp3ButtonFan = document.getElementById('mp3ButtonFan');

function togglePlayFan() {
    togglePlay(audioFan, playPauseIconFan);
}

document.getElementById('bildFanButton').addEventListener('click', function () {
    var textFan = document.querySelector('.textFan');

    togglePerson(textFan, mp3ButtonFan, '.soundFan');
});

// Code for Clara Schumann
let audioSch = new Audio('sound/Schumann.mp3');
let isPlayingSch = false;
let playPauseIconSch = document.getElementById('playPauseIconSch');
let mp3ButtonSch = document.getElementById('mp3ButtonSch');

function togglePlaySch() {
    togglePlay(audioCla, playPauseIconSch);
}

document.getElementById('bildSchButton').addEventListener('click', function () {
    var textSch = document.querySelector('.textSch');

    togglePerson(textSch, mp3ButtonSch, '.soundSch');
});


// Code for Ethel Smyth
let audioEth = new Audio('sound/Ethyl.mp3');
let isPlayingEth = false;
let playPauseIconEth = document.getElementById('playPauseIconEth');
let mp3ButtonEth = document.getElementById('mp3ButtonEth');

function togglePlayEth() {
    togglePlay(audioEth, playPauseIconEth);
}

document.getElementById('bildEthButton').addEventListener('click', function () {
    var textEth = document.querySelector('.textEth');

    togglePerson(textEth, mp3ButtonEth, '.soundEth');
});

// Code for Amy Beach
let audioAmy = new Audio('sound/Beach.mp3');
let isPlayingAmy = false;
let playPauseIconAmy = document.getElementById('playPauseIconAmy');
let mp3ButtonAmy = document.getElementById('mp3ButtonAmy');

function togglePlayAmy() {
    togglePlay(audioAmy, playPauseIconAmy);
}

document.getElementById('bildAmyButton').addEventListener('click', function () {
    var textAmy = document.querySelector('.textAmy');

    togglePerson(textAmy, mp3ButtonAmy, '.soundAmy');
});