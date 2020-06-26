
function voc() {
    const vocTab = document.getElementById("vocTab");
    const vocBtn = document.getElementById("vocBtn");

    var audio = new Audio("sounds/buttons/vocbtn2.mp3");
    var audiodown = new Audio("sounds/buttons/vocbtn3.mp3");
    audio.volume = 0.1;
    audiodown.volume = 0.1;
    //vocTab
    if (vocTab.style.left == "0%") {
        vocTab.style.left = "-10%";
    } else {
        vocTab.style.left = "0%";
    }

    //vocbtn
    if (vocBtn.style.left == "6.5%") {
        vocBtn.classList.remove("vocbtnclicked");
        vocBtn.style.left = "0"
        audio.play();
    } else {
        vocBtn.classList.add("vocbtnclicked");
        vocBtn.style.left = "6.5%"
        audiodown.play();
    }
}

function vocList() {
    const vocLists = document.querySelectorAll('.vocList');
    //vocList
    for (let vocList of vocLists) {
        if (vocList.style.left === "0%") {
            vocList.style.left = "-10%";
        } else {
            vocList.style.left = "0%";
        }
    }
}

function vocBtn() {
    voc();
    vocList();
}


// circleHome behide bg
var t = 0;

function moveit() {
    t += 0.01;

    var r = 500; // radius
    var xcenter = 200; // center X position
    var ycenter = 100; // center Y position

    var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t)));

    $('.c001Bg_Shape').animate({
        top: newTop,
        left: newLeft,
    }, 1, function() {
        moveit();
    });
}
moveit();


function planePaperFadein() {
    $('#planpaer1').fadeIn();
}

function planePaper2Fadein() {
    $('.planePaper_a1').css("display", "block");
}


const scrollRestoration = history.scrollRestoration
if (scrollRestoration === 'manual') {
    console.log('The location on the page is not restored, user will need to scroll manually.');
}

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

//mobile


//mute
audioHome = $('#audioHome');

function toface() {
    $('.planePaper_a1').css("display", "block");
    audioHome.play;
}

responsiveVoice.enableWindowClickHook();
responsiveVoice.clickEvent();

function isPlaying(audelem) {
    return !audelem.paused;
}

function soudnc101() {
    document.getElementById('sound-c101').play(), 5000;
    document.getElementById('sbarSecond').style.display = "inline-block";
    document.getElementById('sbarFirst').style.display = "none";
}

function nav(){
    if( $('.nav-toggle-label').css("display", "block")){
        $('body').css("display", "")
    }
}
nav();