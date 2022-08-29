import { subscribeToHellfireClub } from './firebase/hellfire-club.js';

const invertBtn = document.getElementById('switch-theme-button');
const volumeBtn = document.getElementById('volume-btn');
const volumeUp = '<span class="material-symbols-outlined"> volume_up </span>';
const volumeOff = '<span class="material-symbols-outlined"> volume_off </span>';

invertBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  const theme = document.body.classList[0];
  const music =
    theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg';

  const audio = document.getElementById('music');
  audio.src = `./assets/musics/${music}`;
});

volumeBtn.addEventListener('click', () => {
  const audio = document.getElementById('music');
  if (volumeBtn.innerHTML == volumeOff) {
    audio.play();
    audio.volume = 0;
    volumeBtn.innerHTML = volumeUp;
  } else {
    volumeBtn.innerHTML = volumeOff;
    audio.play();
    audio.volume = 0.2;
  }
});

/*** * Form subscription * ***/

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');

btnSubscribe.addEventListener('click', async () => {
  const subscription = {
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value,
  };
  const subscriptionID = await subscribeToHellfireClub(subscription);
  console.log(subscriptionID);

  txtName.value = '';
  txtEmail.value = '';
  txtLevel.value = '';
  txtCharacter.value = '';
});
