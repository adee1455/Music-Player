//initialize

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = $('#masterPlay');
let myProgressBar = $('#myProgressBar');
let songItems = Array.from($('.songItem'));

let songs = [

    {songName: "Warriyo - Mortals ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Hume -Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Deaf - Kiev", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Bella Ciao - Money Hiest", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Sorry - Justin Bieber", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "STAY - Justin Bieber", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "LOVE - Justin Bieber", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
]

songItems.forEach((element,i) => {

    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

//play/pause

masterPlay.on('click', function(){

    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.removeClass('fa-play-circle');
        masterPlay.addClass('fa-pause-circle');
        $('#gif').css('opacity',1);
    }
    else{
        audioElement.pause();
        masterPlay.removeClass('fa-pause-circle');
        masterPlay.addClass('fa-play-circle');
        $('#gif').css('opacity',0);
    }
});

//listen to events

audioElement.addEventListener('timeupdate', function(){


    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.val(progress); 

});
myProgressBar.on('change', function(){
    audioElement.currentTime = myProgressBar.val() * audioElement.duration / 100;
})
