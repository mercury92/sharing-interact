//audio Home 
audioHome = $('#audioHome');
audioHomebut = $('#audioHomebut');

//mute audio Home
$('#muteHome').click(function() {
    var button = $(this);
    var muted = false;
    if (!muted) {
        button.attr("disabled", "");
        audioHome.animate({
            volume: 0
        }, 1500, function() {
            muted = true;
            button.removeAttr("disabled", "");
        });
    } else {
        button.attr("disabled", "");
        audioHome.animate({
            volume: 0.5
        }, 500, function() {
            muted = false;
            button.removeAttr("disabled", "");
        });
    }
});

//mute all sound




$(function() { // wait for document ready

    /* ============================================================   c0   ============================================================*/

    //Begin click
    $('html').on('keypress', function(e) {
        if (e.which == 13) {
            $('#audioHomebut').get(0).play();
            $('#audioHome').get(0).play();
            $('#mute').css("display", "block");
            $('#showvoc').css("display", "block");
            $('.HomeCursor').fadeOut(1000);
            $('.icon-scroll').fadeIn();
            $('body').css("overflow-y", "auto");
        }
    });
    $(".HomeCursor").click(function() {
        $('#audioHomebut').get(0).play();
        $('#audioHome').get(0).play();
        $('#mute').css("display", "block");
        $('#showvoc').css("display", "block");
        $('.nav-toggle-label').css("display", "block");
        $('.subtextmobile').fadeOut(1000);
        $('.HomeCursor').fadeOut(1000);
        $('.icon-scroll').fadeIn();
        $('body').css("overflow-y", "auto");
        $('.subtextmobile').css("display", "none");
    });
    //mute
    $('#mute').on('click', function() {

        /*** Mute all video and audio on page ***/
        $('body video, body audio').each(function() {
            /*** Do it here globally ***/
            $(this).prop('muted', true);
            $('#mute').css("display", "none");
            $('#unmute').css("display", "block");
            $('.card').css("pointer-events", "none");
            $('.voc1').css("pointer-events", "none");
            responsiveVoice.pause();
        });

    });

    /*** UnMute all ***/
    $('#unmute').on('click', function() {

        /*** Un Mute all video and audio on page ***/
        $('body video, body audio').each(function() {
            /*** Do it here globally ***/
            $(this).prop('muted', false);
            $('#unmute').css("display", "none");
            $('#mute').css("display", "block");
            $('.card').css("pointer-events", "auto");
            $('.voc1').css("pointer-events", "auto");
            responsiveVoice.resume();
        });

    });


    $('#showvoc').on('click', function() {
        $('#showvoc').css("display", "none");
        $('#unshowvoc').css("display", "block");
        $('.vocab').css("display", "none");
    });

    /*** UnMute all ***/
    $('#unshowvoc').on('click', function() {
        $('#showvoc').css("display", "block");
        $('#unshowvoc').css("display", "none");
        $('.vocab').css("display", "block");
    });

    // voc tab


    /* -----  S H A R I N G -----*/
    var controller = new ScrollMagic.Controller();
    var c101Btext = gsap.timeline();
    c101Btext
        .to("#trigger0 .mainTextHome", {
            scale: 1.1,
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 1.4,
            ease: 'linear'
        })
        .to(".textHome .plane", {
            width: '35%',
            ease: 'linear'
        })
        .to(".textHome .plane-container", {
            width: '15%',
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 1.6,
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 1.8,
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 2,
            ease: 'linear'
        })
        .to(".textHome .plane-container", {
            width: '25%',
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 5,
            ease: 'linear'
        })
        .to(".icon-scroll", {
            autoAlpha: 0,
            ease: 'linear'
        })
        .to(".icon-scroll", {
            display: 'none',
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 8,
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 10,
            ease: 'linear'
        })
        .to(".textHome .plane-container", {
            width: '35%',
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 20,
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 30,
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 50,
            ease: 'linear'
        })
        .to(".textHome .plane-container", {
            width: '60%',
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 60,
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 70,
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 90,
            yPercent: 5,
            ease: 'linear'
        })
        .to(".textHome .plane-container", {
            width: '80%',
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 100,
            yPercent: 10,
            ease: 'linear'
        })
        .to(".textHome .plane-container", {
            width: '120%',
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 105,
            yPercent: 20,
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 110,
            yPercent: 60,
            ease: 'linear'
        })
        .to("#trigger0 .textHome .frame", {
            margin: '5% 0 0 20%',
            ease: 'linear'
        })
        .to(".textHome .plane-container", {
            width: '180%',
            ease: 'linear'
        })
        .to(".textHome .plane", {
            width: '30%',
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 120,
            yPercent: 90,
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 150,
            yPercent: 120,
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 200,
            yPercent: 160,
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            scale: 220,
            yPercent: 200,
            ease: 'linear'
        })
        .to(".c0-01", 0, {
            background: '#000000'
        }, "-=4")
        .to("#trigger0 .mainTextHome", {
            opacity: 0,
            ease: 'linear'
        })
        .to("#trigger0 .mainTextHome", {
            textShadow: 'white',
            ease: 'linear'
        })
        .to(".navwhitetop", 5, {
            yPercent: 100,
            ease: 'ease.Out'
        })
        .to(".navwhitebottom", 5, {
            yPercent: -100,
            ease: 'ease.Out'
        }, "-=5")
        .to(".textHome .frame", {
            yPercent: '30%',
            ease: 'linear'
        })
        .to("body", 0.5, {
            background: 'url(images/bg/bg.jpg)',
            ease: 'easeOut'
        })
    new ScrollMagic.Scene({
            triggerElement: '.textHomeTrigger',
            triggerHook: '1',
            duration: '180%',
        })
        .addTo(controller)
        //.addIndicators({name: "c101text ", colorEnd: "#FFFFFF",indent:"600"})
        .setTween(c101Btext);

    // S H A R I N G Trigger
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.textHomeTrigger',
            triggerHook: '1',
            duration: '200%'
        })
        .setPin('.textHome', {
            pushFollowers: false
        })
        .addTo(controller)
    //.addIndicators()

    //Home Button Effect
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.openHome',
            triggerHook: '0.5'
        })
        .setClassToggle('.openHome', 'puff-out-center')
        .addTo(controller)
    // .addIndicators({name: "Homebuttfadeout", colorEnd: "black",indent:"600"});

    //pin    

    /* ============================================================   c1   ============================================================*/
    $('audio').on('play ended', function() {
        setInterval(function() {
            if (responsiveVoice.isPlaying()) {
                $('.sbar').css("display", "inline-block");
                $('#sbarSecond').css("display", "none");
            } else {
                $('.sbar').css("display", "none");
            }
        }, 100);
    });


    // Open c1
    var controller = new ScrollMagic.Controller();
    var fontAlphafadein = gsap.timeline();
    fontAlphafadein
        .to(".trigger0_5", 10, {
            background: 'white',
            ease: 'easeIn'
        }),


        new ScrollMagic.Scene({
            triggerElement: '#triggerB1',
            triggerHook: '0'
        })
        .setTween(fontAlphafadein)
        .addTo(controller)
    //.addIndicators({name: "b1 fixed",colorTrigger: "magenta",colorStart:"MediumVioletRed",colorEnd: "DarkMagenta",indent:"0"})

    //set fix intro1
    var controller = new ScrollMagic.Controller();
    var fontAlphafadein = gsap.timeline();
    fontAlphafadein
        .to(".cardExampIn", 0.5, {
            autoAlpha: 1,
            ease: 'ease.Out'
        })
    new ScrollMagic.Scene({
            triggerElement: '.trigger0_5',
            triggerHook: '0.3',
            duration: '100%'
        })
        .setTween(fontAlphafadein)
        .setPin('#intro1', {
            pushFollowers: false
        })
        .addTo(controller)

    var controller = new ScrollMagic.Controller();
    var fontAlphafadein = gsap.timeline();
    fontAlphafadein
        .to(".navwhitetop", 2, {
            top: '-50%',
            ease: 'ease.Out'
        })
        .to(".navwhitebottom", 2, {
            bottom: '-50%',
            ease: 'ease.Out'
        }, "-=2")

    new ScrollMagic.Scene({
            triggerElement: '.movietrigger',
            triggerHook: '0.5',
            duration: '100%'
        })
        .setTween(fontAlphafadein)
        .addTo(controller)
    //.addIndicators({name: "b1 fixed",colorTrigger: "magenta",colorStart:"MediumVioletRed",colorEnd: "DarkMagenta",indent:"0"})


    //c1-B01 Fixed pink  
    var controller = new ScrollMagic.Controller();
    var fontAlphafadein = gsap.timeline();
    new ScrollMagic.Scene({
            triggerElement: '#trigger1',
            triggerHook: '1',
            duration: '50%',
        })
        .on("start", function(e) {
            $('#audioHome').get(0).pause();
        })
        .setPin('#triggerB1', {
            pushFollowers: false
        })
        .addTo(controller)


    //trigger05 fixed describe
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.describe',
            triggerHook: '0.4',
            duration: '100%'
        })
        //.addIndicators({name: "c1-01 Text2 fixed",colorTrigger: "orange",colorStart:"darkorange",colorEnd: "orangered",indent:"300"})
        .setPin('.describe', {
            pushFollowers: false
        })
        .addTo(controller);
    //.addIndicators({name: "b1 fixed",colorTrigger: "magenta",colorStart:"MediumVioletRed",colorEnd: "DarkMagenta",indent:"0"})

    //c1-B01 text fadein 
    /*
    var controller = new ScrollMagic.Controller();
    var c101Btext = gsap.timeline();
    c101Btext
    .from(".b1_1",0.5,{autoAlpha:0, y:60,ease:'sin.in'})
    .from(".b1_2",0.5,{autoAlpha:0, y:60,ease:'sin.in'})
    .from(".b1_3",0.5,{autoAlpha:0, y:60,ease:'sin.in'})
    
     new ScrollMagic.Scene({
        triggerElement:'#trigger1' ,
        triggerHook:'0.5',
        duration:'100%' ,
    })
    .setClassToggle('#triggerB1 .textHome .mainTextHome','c1-B01textFadein')
    .addTo(controller)
    .addIndicators({name: "c1B01 text fadein",colorTrigger: "magenta",colorStart:"black",colorEnd: "DarkMagenta",indent:"100"})
    .setTween(c101Btext);
    */
    //c1-01b text animation End: 

    /*========================================================    loop ========================================================*/

    //fontAlpha fadein

    $('.fontAlpha').each(function() {
        var controller = new ScrollMagic.Controller();
        var fontAlphafadein = gsap.timeline();
        fontAlphafadein
            .from(this, {
                autoAlpha: 0,
                ease: 'Power4.easeOut'
            })
        new ScrollMagic.Scene({
                triggerElement: this.children[0],
                triggerHook: '0.9'
            })
            .setClassToggle(this, 'c1-B01textFadein')
            .addTo(controller)
            .setTween(fontAlphafadein)
        //.addIndicators({name: "fontAlphaFadein", colorEnd: "#FFFFFF",indent:"600"});
    })


    function isPlaying(audelem) {
        return !audelem.paused;
    }



    $('.pin').each(function() {
        //  pin voice cancle
        var controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
                triggerElement: this.children[0],
            })
            .on("start", function(e) {
                responsiveVoice.cancel();
                $('.sbar').css("display", "none");
            })
            .addTo(controller)
        //.addIndicators({name: "pin voice cancle",colorTrigger: "magenta",colorStart:"black",colorEnd: "DarkMagenta",indent:"100"})
    })



    const ut = new SpeechSynthesisUtterance('');
    speechSynthesis.speak(ut);

    /*==========================    End loop ==========================*/

    /* ----------------------------- c1-01 ------------------------ */

    //c1-01  Main fixed
    var controller = new ScrollMagic.Controller();
    var Upper = gsap.timeline();
    Upper.to('.c101_Pin2', 1, {
        yPercent: -60,
    })
    Upper.to('.c101_Pin3', 1, {
        yPercent: -19,
    })

    new ScrollMagic.Scene({
            triggerElement: '#trigger1',
            triggerHook: '0',
            duration: '200%'
        })
        .setTween(Upper)
        .setPin('.c1-01', {
            pushFollowers: false
        })
        //.addIndicators({name: "c1-01 fixed",colorTrigger: "orange",colorStart:"darkorange",colorEnd: "orangered",indent:"300"})
        .addTo(controller)

    //c1-01 Text 2 box    
    //["It was a hot ..." ]
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: '.c101_Pin2',
            triggerHook: '1',
            duration: '100%'
        })
        //.addIndicators({name: "c1-01 Text2 fixed",colorTrigger: "orange",colorStart:"darkorange",colorEnd: "orangered",indent:"300"})
        .setPin('.c101_Pin2', {
            pushFollowers: false
        })
        .addTo(controller);




    /* ----------------------------- c1-02 ------------------------ */

    // c1-02 Main fixed
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '#trigger2',
            triggerHook: '0',
            duration: "240%"
        })
        .setPin('.c1-02', {
            pushFollowers: false
        })
        .addTo(controller)
    //.addIndicators({name: "c102fix", colorEnd: "#FFFFFF",indent:"400"})

    // c1-02 first box Fadein
    // [Suddenly, A paper plane ...]
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: ".c1-02_pin1",
            triggerHook: '0.8',
        })
        .setClassToggle('.c1-02_pin1 .fontAlpha', 'c1-c1-02fistboxFadeIn')
        //.addIndicators({name: "c102Fbox", colorEnd: "#FFFFFF",indent:"200"})
        .addTo(controller)

    // c1-02 first box Fixed
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.c1-02_pin1',
            triggerHook: '0.2',
            duration: "200%"
        })
        //.addIndicators({name: "c1-02 pin", colorEnd: "#FFFFFF",indent:"200"})
        .setPin('.c1-02_pin1', {
            pushFollowers: false
        })
        .addTo(controller)

    //plane bgColor
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.c1-02_pin1',
            triggerHook: '1',
            duration: '100%'
        })
        .setClassToggle('.c1-02 img.bg', 'grayscale')
        .addTo(controller)


    /* ----------------------------- c1-03 ------------------------ */

    // c1-03 Main fixed
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '#trigger3',
            triggerHook: '0',
            duration: "100%"
        })
        .setPin('.c1-03', {
            pushFollowers: false
        })
        .addTo(controller)
    //.addIndicators({name: "c102fix", colorEnd: "#FFFFFF",indent:"400"})

    //planePaper fade Bottom
    var controller = new ScrollMagic.Controller();
    var planeFade = gsap.timeline();
    planeFade
        .to(".planePaper", 0.1, {
            yPercent: 100,
            ease: 'Power4.easeOut'
        })
        .to(".planePaper", 0, {
            autoAlpha: '0',
            ease: 'Power4.easeOut'
        })

    new ScrollMagic.Scene({
            triggerElement: '#trigger3',
            triggerHook: '1',

        })
        .setTween(planeFade)
        //.addIndicators({name: "planePaper fade top", colorEnd: "#FFFFFF",indent:"400"})
        .addTo(controller);

    var controller = new ScrollMagic.Controller();
    var planeFade = gsap.timeline();
    planeFade

        .from(".planePaper", 0, {
            autoAlpha: '0',
            ease: 'Power4.easeOut'
        })
        .from(".planePaper", 0.1, {
            yPercent: 100,
            ease: 'Power4.easeOut'
        })

    new ScrollMagic.Scene({
            triggerElement: '#trigger2',
            triggerHook: '1',

        })
        .setTween(planeFade)
        //.addIndicators({name: "planePaper fade top", colorEnd: "#FFFFFF",indent:"400"})
        .addTo(controller);

    // c1-03  first box Fixed
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.c1-03_pin1',
            triggerHook: '0.5',
            duration: "50%"
        })
        //.addIndicators({name: "c1-02 pin", colorEnd: "#FFFFFF",indent:"200"})
        .setPin('.c1-03_pin1', {
            pushFollowers: false
        })
        .addTo(controller)




    /* ----------------------------- c1-04 ------------------------ */
    //c1-04 Main Fixed
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.c1-04',
            triggerHook: '0',
            duration: "150%"
        })
        .setPin('.c1-04', {
            pushFollowers: false
        })
        .addTo(controller)
    //.addIndicators({name: "c1-04 pin", colorEnd: "#FFFFFF",indent:"400"})



    //c1-04 first box fixed
    var controller = new ScrollMagic.Controller();
    var c101Leave = gsap.timeline();
    c101Leave
        .to(".c1-04 .bg", 0.1, {
            scale: 0.8,
            ease: 'linear'
        })

    new ScrollMagic.Scene({
            triggerElement: '.c1-04_pin1 .card',
            triggerHook: '0.6',
            duration: '50%'

        })
        .addTo(controller)
        //.addIndicators({name: "c101Leave", colorEnd: "#FFFFFF",indent:"800"})
        .setTween(c101Leave);


    /*========================================================    c2     ========================================================*/

    // c1-02 scale sm to fit
    var controller = new ScrollMagic.Controller();
    var c102small = gsap.timeline();
    c102small
        .from('.c2-01 .bg', 0.3, {
            scale: 0.9,
            ease: 'linear'
        })
    new ScrollMagic.Scene({
            triggerElement: ".c2-01",
            triggerHook: '0.8'
        })
        //.addIndicators({name: "c102small", colorEnd: "#FFFFFF",indent:"400"})
        .addTo(controller)
        .setTween(c102small)


    // c2-B02  Fixed
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '#trigger5',
            triggerHook: '1',
            duration: "40%"
        })
        .setPin('#triggerB5_2', {
            pushFollowers: false
        })
        .addTo(controller)
    //.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"400"})



    //c2-01 Main Fixed
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.c2-01_pin1',
            triggerHook: '1',
            duration: "300%"
        })
        .setPin('.c2-01', {
            pushFollowers: false
        })
        .addTo(controller)
    //.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"400"})

    //c2-02 Color Hightlight grey
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.c2-01_pin1',
            triggerHook: '1',
            duration: "100%"
        })
        .setClassToggle('.c2-01 .bg', 'grayscale')
        .setTween(c202color)
        //.addIndicators({name: "c2-02 BgColor", colorEnd: "#FFFFFF",indent:"400"})
        .addTo(controller)


    // c2-02 BgColor
    var controller = new ScrollMagic.Controller();
    var c202color = gsap.timeline();
    c202color
        .to('body', 1, {
            background: '#191a1b',
            ease: 'linear'
        })
        .to('.c2-01', 2, {
            autoAlpha: '0',
            ease: 'linear'
        })
    new ScrollMagic.Scene({
            triggerElement: '#trigger6',
            triggerHook: '1',
            duration: "150%"
        })
        .setTween(c202color)
        //.addIndicators({name: "c2-02 BgColor", colorEnd: "#FFFFFF",indent:"400"})
        .addTo(controller)

    //c2-02 Main Fixed
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.c2-02',
            triggerHook: '0',
            duration: "100%"
        })
        .setPin('.c2-02', {
            pushFollowers: false
        })
        .addTo(controller)
    // .addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"400"})


    //planePaper fade Bottom
    var controller = new ScrollMagic.Controller();
    var planeFade = gsap.timeline();
    planeFade
        .to(".planePaper_a1", 0.1, {
            yPercent: 100,
            ease: 'Power4.easeOut'
        })
        .to(".planePaper_a1", 0, {
            autoAlpha: '0',
            ease: 'Power4.easeOut'
        })

    new ScrollMagic.Scene({
            triggerElement: '#trigger8',
            triggerHook: '0.5',

        })
        .setTween(planeFade)
        //.addIndicators({name: "planePaper fade top", colorEnd: "#FFFFFF",indent:"400"})
        .addTo(controller);

    var controller = new ScrollMagic.Controller();
    var planeFade = gsap.timeline();
    planeFade

        .from(".planePaper_a1", 0, {
            autoAlpha: '0',
            ease: 'Power4.easeOut'
        })
        .from(".planePaper_a1", 0.1, {
            yPercent: 100,
            ease: 'Power4.easeOut'
        })

    new ScrollMagic.Scene({
            triggerElement: '#trigger7',
            triggerHook: '1',

        })
        .setTween(planeFade)
        //.addIndicators({name: "planePaper fade top", colorEnd: "#FFFFFF",indent:"400"})
        .addTo(controller);


    //c2-03 Main Fixed
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.c2-03',
            triggerHook: '0',
            duration: "100%"
        })
        .setPin('.c2-03', {
            pushFollowers: false
        })
        .addTo(controller)
    //.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"400"})

    // c2-03 BgColor
    var controller = new ScrollMagic.Controller();
    var c202color = gsap.timeline();
    c202color
        .to('body', 1, {
            background: 'url(images/bg/bg.jpg',
            ease: 'linear'
        })
    new ScrollMagic.Scene({
            triggerElement: '.c2-03',
            triggerHook: '1',
            duration: "50%"
        })
        .setTween(c202color)
        //.addIndicators({name: "c2-02 BgColor", colorEnd: "#FFFFFF",indent:"400"})
        .addTo(controller)

    //c2-03  leave
    var controller = new ScrollMagic.Controller();
    var c101Leave = gsap.timeline();
    c101Leave
        .to(".c2-04 video", 0.1, {
            scale: 0.8,
            ease: 'linear'
        })

    new ScrollMagic.Scene({
            triggerElement: '.c2-04',
            triggerHook: '0.5',
            duration: '50%'

        })
        .addTo(controller)
        // .addIndicators({name: "c101Leave", colorEnd: "#FFFFFF",indent:"800"})
        .setTween(c101Leave);

    /*========================================================    c3     ========================================================*/
    //c3-01  sm
    var controller = new ScrollMagic.Controller();
    var c101Leave = gsap.timeline();
    c101Leave
        .from(".c3-01 .bg", 0.1, {
            scale: 0.8,
            ease: 'linear'
        })

    new ScrollMagic.Scene({
            triggerElement: '#trigger9',
            triggerHook: '0.5',
            duration: '50%'

        })
        .addTo(controller)
        //.addIndicators({name: "c101Leave", colorEnd: "#FFFFFF",indent:"800"})
        .setTween(c101Leave);



    // c3-01 INtro fixed
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.c3-01',
            triggerHook: '1',
            duration: "50%"
        })
        .setPin('#triggerB9', {
            pushFollowers: false
        })
        .addTo(controller)
    //.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"400"})

    // c3-01 Main fixed
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.c3-01',
            triggerHook: '0',
            duration: "200%"
        })
        .setPin('.c3-01', {
            pushFollowers: false
        })
        .addTo(controller)
    //.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"400"})

    // c3-02 Main fixed
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.c3-02',
            triggerHook: '0',
            duration: "100%"
        })
        .setPin('.c3-02', {
            pushFollowers: false
        })
        .addTo(controller)
    //.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"400"})

    //paper plane fade in
    var controller = new ScrollMagic.Controller();
    var planeFade = gsap.timeline();
    planeFade
        .to(".planePaper_2", 0, {
            autoAlpha: 1,
            display: 'block',
            ease: 'Power4.easeOut'
        })
        .from(".planePaper_2", 0.1, {
            yPercent: 90,
            ease: 'Power4.easeOut'
        }, "-=0")

    new ScrollMagic.Scene({
            triggerElement: '#trigger10',
            triggerHook: '1',

        })
        .setTween(planeFade)
        //.addIndicators({name: "planePaper fade top", colorEnd: "#FFFFFF",indent:"400"})
        .addTo(controller);



    //planePaper fade Bottom
    var controller = new ScrollMagic.Controller();
    var planeFade = gsap.timeline();
    planeFade
        .to(".planePaper_2", 0.1, {
            yPercent: 100,
            ease: 'Power4.easeOut'
        })
        .to(".planePaper_2", 0, {
            autoAlpha: '0',
            ease: 'Power4.easeOut'
        })

    new ScrollMagic.Scene({
            triggerElement: '#trigger11',
            triggerHook: '1',

        })
        .setTween(planeFade)
        //.addIndicators({name: "planePaper fade top", colorEnd: "#FFFFFF",indent:"400"})
        .addTo(controller);


    //c3-03 sm
    var controller = new ScrollMagic.Controller();
    var c101Leave = gsap.timeline();
    c101Leave
        .to(".c3-03 .bg", 0.001, {
            yPercent: -5,
            ease: 'linear'
        })
        .to(".c3-03 .bg", 0.001, {
            scale: 0.8,
            ease: 'linear'
        }, "-=0.001")

    new ScrollMagic.Scene({
            triggerElement: '#trigger11',
            triggerHook: '0.5'

        })
        .addTo(controller)
        //.addIndicators({name: "c101Leave", colorEnd: "#FFFFFF",indent:"800"})
        .setTween(c101Leave);

    //c3-03 Main fixed

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '#trigger11',
            triggerHook: '0',
            duration: "100%"
        })
        .setPin('.c3-03', {
            pushFollowers: false
        })
        .addTo(controller)
    //.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"400"})




    //sound1
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '.c1-01',
            triggerHook: '1'
        })
        .on("start", function(e) {
            $('#sound1').get(0).play();
        })
        .addTo(controller)
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: '#trigger15',
            triggerHook: '1'
        })
        .on("start", function(e) {
            $('#sound1').get(0).pause();
        })
        .addTo(controller)

    var aud0 = document.getElementById("audioHome");
    var aud1 = document.getElementById("sound1");
    var aud2 = document.getElementById("audioHomebut");
    aud2.volume = 0.1;
    aud1.volume = 0.2;
    aud0.volume = 0.2;

});


/*========================================================    c4     ========================================================*/
//c4-01 sm
var controller = new ScrollMagic.Controller();
var c101Leave = gsap.timeline();
c101Leave
    .from(".c4-01 .bg", 0.001, {
        yPercent: -5,
        ease: 'linear'
    })
    .from(".c4-01 .bg", 0.001, {
        scale: 0.8,
        ease: 'linear'
    }, "-=0.001")

new ScrollMagic.Scene({
        triggerElement: '#trigger12',
        triggerHook: '0.5'

    })
    .addTo(controller)
    //.addIndicators({name: "c101Leave", colorEnd: "#FFFFFF",indent:"800"})
    .setTween(c101Leave);


//c4-01 Main fixed
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement: '#trigger12',
        triggerHook: '0',
        duration: "100%"
    })
    .setPin('.c4-01', {
        pushFollowers: false
    })
    .addTo(controller)
//.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"400"})

//c4-02 Main fixed
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement: '#trigger13',
        triggerHook: '0',
        duration: "100%"
    })
    .setPin('.c4-02', {
        pushFollowers: false
    })
    .addTo(controller)
  //.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"400"})



/*========================================================    End Section     ========================================================*/
//navbar
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement: '#trigger1',
        triggerHook: '1'
    })
    .setClassToggle('.ax', 'fadeout')
    .addTo(controller)

//navside
//nav a
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement: '.page',
        triggerHook: '1',
        duration: '400%'
    })
    .setClassToggle('.a', 'newnav')
    .addTo(controller)
//.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"1400"})
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement: '.page',
        triggerHook: '1',
        duration: '400%'
    })
    .setClassToggle('.dot1', 'dotfadein')
    .addTo(controller)
//.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"1400"})



////nav b
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement: '#trigger1',
        triggerHook: '1',
        duration: '1300%'
    })
    .setClassToggle('.b', 'newnav')
    .addTo(controller)
//.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"1400"})
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement: '#trigger1',
        triggerHook: '1',
        duration: '1300%'
    })
    .setClassToggle('.dot2', 'dotfadein')
    .addTo(controller)
//.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"1400"})

////nav c
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement: '#trigger5',
        triggerHook: '1',
        duration: '1000%'
    })
    .setClassToggle('.c', 'newnav')
    .addTo(controller)
//.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"1400"})
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement: '#trigger5',
        triggerHook: '1',
        duration: '1000%'
    })
    .setClassToggle('.dot3', 'dotfadein')
    .addTo(controller)
//.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"1400"})


////nav d
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement: '#trigger9',
        triggerHook: '1',
        duration: '1000%'
    })
    .setClassToggle('.d', 'newnav')
    .addTo(controller)
//.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"1400"})

var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement: '#trigger9',
        triggerHook: '1',
        duration: '1000%'
    })
    .setClassToggle('.dot4', 'dotfadein')
    .addTo(controller)
//.addIndicators({name: "c2-B02 pin", colorEnd: "#FFFFFF",indent:"1400"})