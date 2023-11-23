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
            

            //code for Jan Pieterszoon Sweelinck
            let audioJan = new Audio('./sound/Jan.mp3');
            let isPlayingJan = false;
            let playPauseIconJan = document.getElementById('playPauseIconJan');
            let mp3ButtonJan = document.getElementById('mp3ButtonJan');

            function togglePlayJan() {
                togglePlay(audioJan, playPauseIconJan);
            }

            document.getElementById('bildJanButton').addEventListener('click', function () {
                var textJan = document.querySelector('.textJan');
                
                togglePerson(textJan, mp3ButtonJan, '.soundJan');
            });



            //Arrangelo Corelli
            let audioCore = new Audio('./sound/Core.mp3');
            let isPlayingCore = false;
            let playPauseIconCore = document.getElementById('playPauseIconCore');
            let mp3ButtonCore = document.getElementById('mp3ButtonCore');

            function togglePlayCore() {
                togglePlay(audioCore, playPauseIconCore);
            }

            document.getElementById('bildCoreButton').addEventListener('click', function () {
                var textCore = document.querySelector('.textCore');

                togglePerson(textCore, mp3ButtonCore, '.soundCore');

            });



            //code for Johann Pachelbel
            let audioPachelbel = new Audio('./sound/pach.mp3');
            let playPauseIconPachelbel = document.getElementById('playPauseIconPachelbel');
            let mp3ButtonPachelbel = document.getElementById('mp3ButtonPachelbel');
            let isPlayingPachelbel = false;

            function togglePlayPachelbel() {
                togglePlay(audioPachelbel, playPauseIconPachelbel);
            }

            document.getElementById('bildPachelbelButton').addEventListener('click', function () {
                var textPachelbel = document.querySelector('.textPachelbel');


                togglePerson(textPachelbel, mp3ButtonPachelbel, '.soundPachelbel');
            });


            // Code for Antonio Vivaldi
            let audioVivaldi = new Audio('./sound/Vivaldi - Spring.mp3');
            let playPauseIconVivaldi = document.getElementById('playPauseIconVivaldi');
            let mp3ButtonVivaldi = document.getElementById('mp3ButtonVivaldi');

            function togglePlayVivaldi() {
                togglePlay(audioVivaldi, playPauseIconVivaldi);
            }

            document.getElementById('bildVivaldiButton').addEventListener('click', function () {
                var textVivaldi = document.querySelector('.textVivaldi');

                togglePerson(textVivaldi, mp3ButtonVivaldi, '.soundVivaldi');

            });


            //Georg Friedrich Händel
            let audioHänd = new Audio('./sound/Händel.mp3');
            let playPauseIconHänd = document.getElementById('playPauseIconHänd');
            let mp3ButtonHänd = document.getElementById('mp3ButtonHänd');

            function togglePlayHänd() {
                togglePlay(audioHänd, playPauseIconHänd);
            }

            document.getElementById('bildHändButton').addEventListener('click', function () {
                var textHänd = document.querySelector('.textHänd');

                togglePerson(textHänd, mp3ButtonHänd, '.soundHänd');

            });

            // Code for Johann Sebastian Bach
            let audioBach = new Audio('./sound/Bach.mp3');
            let playPauseIconBach = document.getElementById('playPauseIconBach');
            let mp3ButtonBach = document.getElementById('mp3ButtonBach');

            function togglePlayBach() {
                togglePlay(audioBach, playPauseIconBach);
            }

            document.getElementById('bildBachButton').addEventListener('click', function () {
                var textBach = document.querySelector('.textBach');

                togglePerson(textBach, mp3ButtonBach, '.soundBach');
            });

            



            