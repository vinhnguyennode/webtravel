let prev = document.querySelector('#prev');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('.volume_show');
let slider= document.querySelector('#duration_slider');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let index_no = 0;

let playing_song = false;
let autoplay = 0;

// create a audio Element
let track = document.createElement('audio');
// All song list
let All_song = [
    {
        name: "Cố Giang Tình",
        path: "./assest/music/song1.mp3",
        img: "./assest/img/1.jpeg",
        singer: "X2X",
    },
    {
        name: "Gác Lại Âu Lo",
        path: "./assest/music/song2.mp3",
        img: "./assest/img/2.jpg",
        singer: "Dalab",
    },
    {
        name: "Sắp 30",
        path: "./assest/music/song3.mp3",
        img: "./assest/img/3.jpg",
        singer: "Trịnh Đình Quang",
    },
    {
        name: "Sài Gòn Đau Lòng Quá",
        path: "./assest/music/song4.mp3",
        img: "./assest/img/4.jpg",
        singer: "Hoàng Duyên",
    },
    {
        name: "Răng Khôn",
        path: "./assest/music/song5.mp3",
        img: "./assest/img/5.jpg",
        singer: "Phí Phương Anh",
    },
    {
        name: "Kẹo Bông Gòn",
        path: "./assest/music/song6.mp3",
        img: "./assest/img/6.jpg",
        singer: "H2K",
    }
];

// All functions

// function load the track
function load_track (index_no){
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src= All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    timer = setInterval(range_slider, 200);
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
}
load_track(index_no);

// mute sound function

function mute_sound () {
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML= 0;
}

// checking the song is playing or no
function just_play () {
    if (playing_song == false) {
        play_song();
    }else {
        pause_song();
    }
}

// reset song range_slider
function reset_slider () {
    slider.value = 0;
}

// play_song
function play_song() {
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

// pause song
function pause_song() {
    track.pause();
    playing_song = false;
    play.innerHTML= '<i class="fa fa-play" aria-hidden="true"></i>';
}

// next song
function next_song(){
    if (index_no < All_song.length - 1) {
        index_no++;
        load_track(index_no);
        play_song();
    } else {
        index_no = 0;
        load_track(index_no);
        play_song();
    }
}

// prev song
function prev_song() {
    if (index_no > 0) {
        index_no--;
        load_track(index_no);
        play_song();
    } else {
        index_no = All_song.length;
        load_track(index_no);
        play_song();
    }
}

// change volume
function volume_change(){
	volume_show.innerHTML =recent_volume.value;
	track.volume =recent_volume.value/ 100;
}

//  change slider position
function change_duration () {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

function range_slider () {
    let position = 0;
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

    // function will run when the song is over
    if (track.ended) {
        play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        if(autoplay==1){
            index_no++;
            load_track(index_no);
            play_song();
        }
    }
}

// auto play 
function autoplay_switch() {
    if(autoplay==1) {
        autoplay = 0;
        auto_play.style.background= "rgba(255,255,255, 0.2)";
    } else {
        autoplay = 1;
        auto_play.style.background = "#ff8a65";
    }
}


