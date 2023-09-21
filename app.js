const music = new Audio('audio/lambo.mp3');
// music.play();

//create array 

const songs = [
    {
        id:'1',
        songName:' Petit <div class="subtitles">D.Z.K</div>',
        poster: "img/homeless.jpg"
    },
    {
        id:'2',
        songName:'Razzia <br> <div class="subtitles">Svnka ft. D.Z.K</div>',
        poster: "img/lambo.jpg"
    },
    // all object type
    {
        id:'3',
        songName:'Never give up <div class="subtitles">D.Z.K</div>',
        poster: "img/nevergiveup.jpg"
    },
    {
        id:'4',
        songName: ' Night Ft.SVNKA <div class="subtitles">D.Z.K</div>',
        poster: "img/night.jpg"
    },
    {
        id:'5',
        songName: 'Broski <div class="subtitles">D.Z.K</div>',
        poster: "img/broski.jpg"
    },
    {
        id:'6',
        songName:' Tripes Ft.SVNKA <div class="subtitles">D.Z.K</div>',
        poster: "img/tripes.jpg"
    },
    {
        id:'7',
        songName:' c est donc ça nos vies <div class="subtitles">D.Z.K</div>',
        poster: "img/nosvies.jpg"
    }
   
]
Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
    } else {
        music.pause();
    }
})