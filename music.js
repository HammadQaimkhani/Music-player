const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
 let isplaying = false;
const playMusic= () =>{
    isplaying = true;
    music.play();
    play.classList.replace("fa-play",'fa-pause');
    img.classList.add("anime");
};
const pauseMusic= ()=>{
    isplaying = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove("anime");
};
play.addEventListener("click", ()=>{
    isplaying ?  pauseMusic() : playMusic();
});
// const nextMusic = () =>{

// };
