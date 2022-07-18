console.log("Welcome To Spotify");

let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let range=document.getElementById('range');
let backward = document.getElementById('backward');
let forward = document.getElementById('forward');
let gif=document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0];

let songs=[
    {songName:"",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
];

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        gif.style.opacity=0;
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-pause-circle');
    }
});
audioElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    range.value=progress;
});
range.addEventListener('change',()=>{
    audioElement.currentTime=(audioElement.duration*range.value)/100;
});

backward.addEventListener('click', ()=>{
    audioElement.pause();
    range.value=0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
    if(songIndex!=0){
    songIndex--;
    }
    audioElement=new Audio(songs[songIndex].filePath);
    audioElement.play();
    gif.style.opacity=1;
    audioElement.addEventListener('timeupdate', ()=>{
        let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        range.value=progress;
    });
    range.addEventListener('change',()=>{
        audioElement.currentTime=(audioElement.duration*range.value)/100;
    });
})

forward.addEventListener('click', ()=>{
    audioElement.pause();
    range.value=0;
    audioElement.currentTime=0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
    songIndex++;
    audioElement=new Audio(songs[songIndex].filePath);
    audioElement.play();
    gif.style.opacity=1;
    audioElement.addEventListener('timeupdate', ()=>{
        let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        range.value=progress;
    });
    range.addEventListener('change',()=>{
        audioElement.currentTime=(audioElement.duration*range.value)/100;
    });
});

const list = document.querySelectorAll(".fa");
for(let index=0;index<songs.length;index++){
    const element=list[index];
    element.addEventListener("click", ()=>{
        audioElement.pause();
        range.value=0;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        audioElement=new Audio(songs[index].filePath);
        audioElement.play();
        gif.style.opacity=1;
        audioElement.addEventListener('timeupdate', ()=>{
            let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
            range.value=progress;
        });
        range.addEventListener('change',()=>{
            audioElement.currentTime=(audioElement.duration*range.value)/100;
        });
    });
}

