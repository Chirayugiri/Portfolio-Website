var typed = new Typed(".auto-input", {
    strings: ["Chirayu Giri", "Mobile App Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

$(document).ready(function(){
    $(".skill").click(function(){
        $(".skill-info").toggle(500);
        $(".hobby-info").hide(500);
        $(".edu-info").hide(500);

        $(".hobby").removeClass("active");
        $(".edu").removeClass("active");
        $(".skill").addClass("active");
    });

    $(".hobby").click(function(){
        $(".hobby-info").toggle(500);
        $(".skill-info").hide(500);
        $(".edu-info").hide(500);

        $(".skill").removeClass("active");
        $(".edu").removeClass("active");
        $(".hobby").addClass("active");
    });

    $(".edu").click(function(){
        $(".edu-info").toggle(500);
        $(".skill-info").hide(500);
        $(".hobby-info").hide(500);

        $(".hobby").removeClass("active");
        $(".skill").removeClass("active");
        $(".edu").addClass("active");
    })
});


//code for navbar for small screen devices

$(document).ready(function(){
    $(".fa-bars").click(function(){
        $("ul").slideDown("slow");
    })
    $(".fa-xmark").click(function(){
        $("ul").slideUp("slow");
    })
});


