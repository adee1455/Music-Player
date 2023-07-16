//initialize

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = $('#masterPlay');
let myProgressBar = $('#myProgressBar');
let songItems = Array.from($('.songItem'));
let songMasterName = $('#songMasterName');
let songTitle = $('.songTitle');
let titleImage = $('#titleImage');
let songItemPlay = $('.songItemPlay');
let pausedTime = 0;

let songs = [

    {songName: "Warriyo  ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Deaf ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Bella Ciao", filePath: "songs/4.mp3", coverPath: "covers/4.webp"},
    {songName: "Sorry", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Drillis Ertugrul", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg"},
    {songName: "LOVE", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
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
        
        Array.from($('.songItemPlay')).forEach((element) => {
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
        })
        
        
    }
    else{
        audioElement.pause();
        masterPlay.removeClass('fa-pause-circle');
        masterPlay.addClass('fa-play-circle');
        $('#gif').css('opacity',0);
        songItemPlay.removeClass('fa-pause-circle');
        songItemPlay.addClass('fa-play-circle');
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

const makeAllPlays = () => {

    Array.from($('.songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    }
    )}

Array.from($('.songItemPlay')).forEach((element) => {
    
    element.addEventListener('click', (e) => {
        
        if(audioElement.paused || audioElement.currentTime<=0){
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/' + (songIndex) + '.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        audioElement.currentTime = pausedTime;
        $('#gif').css('opacity',1);
        songMasterName.text(songs[songIndex-1].songName);
        songTitle.text(songs[songIndex-1].songName);
        titleImage.attr('src',songs[songIndex-1].coverPath);
        masterPlay.removeClass('fa-play-circle');
        masterPlay.addClass('fa-pause-circle');
        }
        else {
            audioElement.pause();
            pausedTime = audioElement.currentTime;
            songItemPlay.removeClass('fa-pause-circle');
            songItemPlay.addClass('fa-play-circle');
            masterPlay.removeClass('fa-pause-circle');
            masterPlay.addClass('fa-play-circle');

        }
    })


})

$('#previous').on('click', function(){

    if(songIndex<=0){
        songIndex = 1;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = 'songs/' + (songIndex+1) + '.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    $('#gif').css('opacity',1);
    songMasterName.text(songs[songIndex].songName);
    songTitle.text(songs[songIndex].songName);
    titleImage.attr('src',songs[songIndex].coverPath);
    masterPlay.removeClass('fa-circle-play');
    masterPlay.addClass('fa-pause-circle');
})

$('#next').on('click', function(){

    if(songIndex>=7){
        songIndex = 1;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = 'songs/' + (songIndex+1) + '.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    $('#gif').css('opacity',1);
    songMasterName.text(songs[songIndex].songName);
    songTitle.text(songs[songIndex].songName);
    titleImage.attr('src',songs[songIndex].coverPath);
    masterPlay.removeClass('fa-circle-play');
    masterPlay.addClass('fa-pause-circle');
    
})
