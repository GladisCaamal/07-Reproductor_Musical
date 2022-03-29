let currentMusic = 0;

const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const playpausebtn = document.querySelector('.play-btn.pause');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backward-btn');
const songlist = document.querySelector('.song-list');

let songArray = [];
let songHeading = ' ';
let songIndex = 0;
let  isPlaying = false;

playBtn.addEventListener('click', () => {
    if(playBtn.className.includes('pause')){
        music.play();
    } else {
        music.pause();
    }
    playBtn.classList.toggle('pause');
})

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;

    currentTime.innerHTML = '00:00'
    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
}
setMusic(0);

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min= `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec= `0${sec}`;
    }
    return `${min}:${sec}`;
}

setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML =formatTime(music.currentTime);

}, 500);

seekBar.addEventListener('change', () =>{
    music.currentTime = seekBar.value;
})

forwardBtn.addEventListener('click', () => {
    if(currentMusic >= songs.length - 1){
        currentMusic = 0;
    } else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playBtn.click();
})

backwardBtn.addEventListener('click', () => {
    if(currentMusic <= 0){
        currentMusic = songs.length - 1;
    } else {
        currentMusic--;
    }
    setMusic(currentMusic);
    playBtn.click();
})

//no c
function loadAudio(){
    audio.src = songArray[songIndex];

    let songlistItems= songlist.getElementnsByTagName('li');
    songHeading = songlistItems[songIndex].getAttribute('data-name');
    songName.innerText = songHeading; 
    
    for(i=0; i<songlistItems.length; i++){
        songlistItems[i].classList.remove('active');
    }
}

function loadsongs(){
    let songs = songlist.getElementnsByTagName('li');
    for(i=0; i<songs.length; i++){
        songArray.push(songs[i]).getAttribute('data-src')
    }

    loadAudio();
}

loadsongs();


function playAudio(){
    audio.play();
    playBtn.querySelector('i.btn').classList.remove('pause');
    playBtn.querySelector('i.btn').classList.remove('forwardbtn');
    isPlaying = false;
}



playBtn.addEventListener('click', function(){
    if(isPlaying){
        pauseAudio();
    }
    else{
        playAudio();
 }
}, false);

nextbtn.addEventListener('click',function(){
        songIndex++;
        if(songIndex > songArray.length - 1){
            songIndex = 0;
        };
        loadAudio();
        playAudio();
}, false);

function previousSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songArray.length - 1;
    };
    loadAudio();
    playAudio();
}

playbtnpause.addEventListener('click',function(){
   if(isPlaying){
       pauseAudio();
   }
   else{
       playAudio();
   }
}, false);

songlist.addEventListener('click', function(e){
  songIndex = e.target.closest('li').getAttribute('data-index');
  loadAudio();
  playAudio();
}, false);
