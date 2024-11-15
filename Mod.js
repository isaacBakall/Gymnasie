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
    audioCla.pause();
    audioRic.pause();
    audioEri.pause();
    audioMau.pause();
    audioIgo.pause();
    audioDmi.pause();

    playPauseIconCla.src = 'img/start.png';
    playPauseIconRic.src = 'img/start.png';
    playPauseIconEri.src = 'img/start.png';
    playPauseIconMau.src = 'img/start.png';
    playPauseIconIgo.src = 'img/start.png';
    playPauseIconDmi.src = 'img/start.png';
}

// Code for Claude Debussy
let audioCla = new Audio('./sound/lune.mp3');
let isPlayingCla = false;
let playPauseIconCla = document.getElementById('playPauseIconCla');
let mp3ButtonCla = document.getElementById('mp3ButtonCla');

function togglePlayCla() {
    togglePlay(audioCla, playPauseIconCla);
}

document.getElementById('bildClaButton').addEventListener('click', function () {
    var textCla = document.querySelector('.textCla');
    togglePerson(textCla, mp3ButtonCla, '.soundCla');
});

// Code for Richard Strauss
let audioRic = new Audio('./sound/Prelude.mp3');
let isPlayingRic = false;
let playPauseIconRic = document.getElementById('playPauseIconRic');
let mp3ButtonRic = document.getElementById('mp3ButtonRic');

function togglePlayRic() {
    togglePlay(audioRic, playPauseIconRic);
}

document.getElementById('bildRicButton').addEventListener('click', function () {
    var textRic = document.querySelector('.textRic');
    togglePerson(textRic, mp3ButtonRic, '.soundRic');
});

// Code for Erik Satie
let audioEri = new Audio('./sound/Gnossienne.mp3');
let isPlayingEri = false;
let playPauseIconEri = document.getElementById('playPauseIconEri');
let mp3ButtonEri = document.getElementById('mp3ButtonEri');

function togglePlayEri() {
    togglePlay(audioEri, playPauseIconEri);
}

document.getElementById('bildEriButton').addEventListener('click', function () {
    var textEri = document.querySelector('.textEri');
    togglePerson(textEri, mp3ButtonEri, '.soundEri');
});

// Code for Maurice Ravel
let audioMau = new Audio('./sound/Ondine.mp3');
let isPlayingMau = false;
let playPauseIconMau = document.getElementById('playPauseIconMau');
let mp3ButtonMau = document.getElementById('mp3ButtonMau');

function togglePlayMau() {
    togglePlay(audioMau, playPauseIconMau);
}

document.getElementById('bildMauButton').addEventListener('click', function () {
    var textMau = document.querySelector('.textMau');
    togglePerson(textMau, mp3ButtonMau, '.soundMau');
});

// Code for Igor Stravinskij
let audioIgo = new Audio('./sound/Stravinsky.mp3');
let isPlayingIgo = false;
let playPauseIconIgo = document.getElementById('playPauseIconIgo');
let mp3ButtonIgo = document.getElementById('mp3ButtonIgo');

function togglePlayIgo() {
    togglePlay(audioIgo, playPauseIconIgo);
}

document.getElementById('bildIgoButton').addEventListener('click', function () {
    var textIgo = document.querySelector('.textIgo');
    togglePerson(textIgo, mp3ButtonIgo, '.soundIgo');
});

// Code for Dmitri Dmitriyevich Shostakovich 
let audioDmi = new Audio('sound/Symphony No. 5 in D Minor, Op. 47_ I. Moderato (Remastered).mp3');
let isPlayingDmi = false;
let playPauseIconDmi = document.getElementById('playPauseIconDmi');
let mp3ButtonDmi = document.getElementById('mp3ButtonDmi');

function togglePlayDmi() {
    togglePlay(audioDmi, playPauseIconDmi);
}

document.getElementById('bildDmiButton').addEventListener('click', function () {
    var textDmi = document.querySelector('.textDmi');
    togglePerson(textDmi, mp3ButtonDmi, '.soundDmi');
});
