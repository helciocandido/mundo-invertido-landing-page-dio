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

window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('music');
  audio.play();
  audio.volume = 0;
});
