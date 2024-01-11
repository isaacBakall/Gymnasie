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

           
           
// Code for Hildegard av Bingen
let audioHil = new Audio('./sound/Schubert - _Ständchen_ D957.mp3');
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
let audioBar = new Audio('./sound/Chopin - Ballade No.1 in G minor, Op.23 (Krystian Zimerman).mp3');
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
let audioFan = new Audio('./sound/Fanille Saint-Saëns - Danse Macabre.mp3');
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
let audioCla = new Audio('./sound/Tchaikovsky - Swan Lake (Swan Theme).mp3');
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


// Code for Ethel Smyth
let audioEth = new Audio('./sound/Grieg.mp3');
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
let audioAmy = new Audio('./sound/Rachmaninoff_ Piano Concerto No. 1 in F-Sharp Minor, Op. 1 - I. Vivace.mp3');
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