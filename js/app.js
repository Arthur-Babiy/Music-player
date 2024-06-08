import { tracks } from './items.js';

const audioPlayer = document.getElementById('audioPlayer');
const trackTitle = document.getElementById('trackTitle');
const trackImg = document.getElementById('trackImg');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playlistButton = document.getElementById('playlistButton');
const playlist = document.getElementById('playlist');

let currentTrackIndex = 0;

tracks.forEach((track, index) => {
    const listItem = document.createElement('div');
    listItem.textContent = `${index + 1}. ${track.title}`;
    listItem.classList.add('playlist-item');
    listItem.addEventListener('click', () => {
        loadTrack(index);
        playlist.style.display = 'none';
        playTrack();
    });
    playlist.appendChild(listItem);
});

function loadTrack(index) {
    const track = tracks[index];
    audioPlayer.src = track.src;
    trackTitle.textContent = track.title;
    trackImg.src = track.cover;
    currentTrackIndex = index;
}

playlistButton.addEventListener('click', () => {
    playlist.style.display = (playlist.style.display === 'block') ? 'none' : 'block';
});

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
}

function playTrack() {
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
}

nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);
playPauseBtn.addEventListener('click', togglePlayPause);


loadTrack(currentTrackIndex);
