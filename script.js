console.log("Welcome To Spotify");

let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let range=document.getElementById('range');
let backward = document.getElementById('backward');
let forward = document.getElementById('forward');
let playSong=document.getElementsByClassName("gaana")[songIndex];

let songs=[
    {songName:"",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"",filePath:"songs/2.mp3",coverPath:"cover/2.jpg"},
    {songName:"",filePath:"songs/3.mp3",coverPath:"cover/3.jpg"},
    {songName:"",filePath:"songs/4.mp3",coverPath:"cover/4.jpg"},
    {songName:"",filePath:"songs/5.mp3",coverPath:"cover/5.jpg"},
    {songName:"",filePath:"songs/6.mp3",coverPath:"cover/6.jpg"},
    {songName:"",filePath:"songs/7.mp3",coverPath:"cover/7.jpg"},
    {songName:"",filePath:"songs/8.mp3",coverPath:"cover/8.jpg"},
    {songName:"",filePath:"songs/9.mp3",coverPath:"cover/9.jpg"},
    {songName:"",filePath:"songs/10.mp3",coverPath:"cover/10.jpg"},
];

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
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
})

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
})

forward.addEventListener('click', ()=>{
    audioElement.pause();
    range.value=0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
    songIndex++;
    audioElement=new Audio(songs[songIndex].filePath);
    audioElement.play()
});

// playSong.addEventListener('click', ()=>{
//     audioElement.pause();
//     range.value=0;
//     document.getElementsByClassName("gaana")[];
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-pause-circle');
    
// })