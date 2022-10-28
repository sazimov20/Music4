let currentMusic = 0;

const music = document.querySelector('#audio');


const seekBar = document.querySelector('.seek-bar');
const musicName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const songDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backwadBtn = document.querySelector('.backward-btn');

playBtn.addEventListener('click',() => {
    if (playBtn.className.includes('pause')) {
        music.play(); 
    } else{
        music.pause(); 
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play')
})

 //setup music
const setMusic = (i)=> {
    seekBar.value = 0;  //set range slide value to 0;
    let music = song[i];
    currentMusic = i;
     music.src = song.path;
     
     musicName.innerHTML = song.name;
     artistName.innerHTML = song.artist;
     disk.style.backgroundImg = `url('${song.cover}')`;
     
     currentTime.innerHTML = '00:00';
      setTimeout(() => {
        seekBar.max = song.duration;
         songDuration.innerHTML = formatTime(music.duration);   
        }, 300); 
     
}
setMusic(0);


 //formatting time in min and seconds format

const formatTime = (time)=> {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}



const playMusic = () => {
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.add('play');    
}




 //seek bar
setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime)
    //if (Math.follor(music.currentTime) == Math.floor(seekBar.max)){
        //fowardBtn.click(); } 
}, 500);

seekBar.addEventListener('change', () =>{
    music.currentTime = seekBar.value;
})
 //forward and  backward button
forwardBtn.addEventListener('click', () =>{
    if ( currentMusic <= 0){
      currentMusic = song.length - 1;    
    } else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playBtn.click();    
})

backwadBtn.addEventListener('click',() =>{
    if (currentMusic <= 0) {
        currentMusic = songs.length - 1;
    }else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
})