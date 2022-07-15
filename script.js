console.log("Welcome To Spotify");

let songIndex=0;
// let audioElement = new Audio('songs/3.mp3');
let masterPlay=document.getElementById('masterPlay');
let range=document.getElementById('range');

let songs=[
    {songName:"",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
];
// audioElement.play();

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
});
range.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
});