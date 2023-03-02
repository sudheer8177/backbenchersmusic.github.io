let Music=document.getElementById("Music");
let PlayBack=document.querySelector(".prev");
let playBtn=document.querySelector(".play");
let playForward=document.querySelector(".forward");
let Images=document.querySelector(".image");
let Title=document.querySelector(".title");
let Artist=document.querySelector(".artist");
let progerss=document.querySelector(".progerss");
let progerssBar=document.querySelector(".progerss_nav");
let Repeat=document.querySelector(".loop");
let MuteBtn=document.querySelector(".mute");

isPlaying= false;
const PlayMusic = () =>{
    Music.play();
    isPlaying=true;
    playBtn.classList.replace("fa-circle-play" , "fa-pause");
    Images.classList.add("rot");
}


const PauseMusic = () =>{
    Music.pause();
    isPlaying=false;
    playBtn.classList.replace("fa-pause", "fa-circle-play");
    Images.classList.remove("rot");
}

playBtn.addEventListener('click',() =>{
   if(isPlaying){
    PauseMusic();
   }
   else{
    PlayMusic();
   }
    
})

const songs=[{
   name:"song1",
   title:"Naatu Naatu..",
   artist:"M. M. Keeravani ",
},
{
    name:"song2",
   title:"Believer ..",
   artist:"Dan Reynolds ",
},
{
    name:"song3",
   title:"Memories bring back..",
   artist:"JUSTIN BIEBER",
},
{
    name:"song4",
   title:"HoldOn....",
   artist:"JUSTIN BIEBER",
}
];


const songsLoad = (songs) =>{
   Title.textContent=songs.title;
   Artist.textContent=songs.artist;
   Images.src=songs.name +".jpg";
   Music.src=songs.name +".mp3";
   
};

songsIndex=0;

const Nextsong = () =>{
    songsIndex = (songsIndex + 1)%songs.length;
    songsLoad(songs[songsIndex]);
    PlayMusic();
   
}
const Prevsong = () =>{
    songsIndex = (songsIndex - 1+songs.length)%songs.length;
    songsLoad(songs[songsIndex]);
    PlayMusic();
}


Music.addEventListener('ended',Nextsong)
playForward.addEventListener('click',Nextsong);
PlayBack.addEventListener('click',Prevsong);

Music.ontimeupdate = (e) => {
    progerssBar.style.width=Math.floor((Music.currentTime*100)/Music.duration)+"%";
}

progerss.addEventListener('click',(e) =>{
    Music.currentTime=(e.offsetX / progerss.offsetWidth )*Music.duration;
})

 

MuteBtn.addEventListener("click",()=>{
    if(Music.muted) { 
        MuteBtn.classList.replace("fa-volume-xmark","fa-volume-high");
   
    Music.muted=false;
    }
    else{
        MuteBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        Music.muted=true;
    }
})

Repeat.addEventListener('click',()=>{

    if(Music.loop) { 
        Repeat.classList.remove("repeated")
        Music.loop=false;
         }
         else{
             Music.loop=true;
             Repeat.classList.add("repeated");
             
         }
})

