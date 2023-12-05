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

           
           
// Code for Johann Sebastian Bach
let audioJos = new Audio('./sound/Jan.mp3');
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