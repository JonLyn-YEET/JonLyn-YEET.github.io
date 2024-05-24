$( window ).on( "load", function() {


    /* -------------------------------------------------- Navbar -------------------------------------------------- */
    
    // Uncomment the code bellow to hide navbar as default. This is not done in CSS to avoid problems in case js doesn't load.

    /* $("nav .container").hide();
    $("nav .wrapper").css("backgroundColor", "transparent");
    $("nav").css("marginTop", "-40px"); */


    $("#menuIcon").click(function () { 

        if($("nav .container").is(":visible")) {
            $("nav .container").animate({width:'hide'}, 300, function() {
                $("nav .wrapper").animate({backgroundColor: "transparent"}, 300);
                $("nav").animate({marginTop: "-40px"}, 300);
            });
        } else {
            $("nav .wrapper").animate({backgroundColor: getComputedStyle(document.documentElement,null).getPropertyValue('--accentColor1')}, 300);
            $("nav").animate({marginTop: "0px"}, 300, function() {
                $("nav .container").animate({width:'show'}, 300);
            });
        }
    });


    /* -------------------------------------------------- Shop -------------------------------------------------- */

    $(".infoButton").click(function () {
        if($(this).siblings(".wrapper").children(".info").css("display") == "none") {
            $(".item .info").fadeOut();
            $(".infoButton").html("Show Info");
            $(".item .info").height("calc(" + $(".item img").height() + "px - 6% + 1px)");
            $(this).siblings(".wrapper").children(".info").fadeIn();
            $(this).html("Hide Info");
        } else {
            $(this).siblings(".wrapper").children(".info").fadeOut();
            $(this).html("Show Info");
        }
    });

    $(".addCart").click(function () { 
        alert(`${$(this).siblings("h3").html().replace(/(\r\n|\n|\r)/gm, "").trim()} was added to cart.`)
    });


    /* -------------------------------------------------- Contact --------------------------------------------------*/
    
    $("#contactForm").submit(function (e) { 
        if(!$("#fName").val()) {
            e.preventDefault();
            $("#errorMessage").html("Please Input Your First Name");
        }

        else if(!$("#lName").val()) {
            e.preventDefault();
            $("#errorMessage").html("Please Input Your Last Name");
        }

        else if(!$("#email").val()) {
            e.preventDefault();
            $("#errorMessage").html("Please Input Your email address");
        }

        else if(!$("#category").val()) {
            e.preventDefault();  
            $("#errorMessage").html("Please Input a Category");
        }

        else if(!$("#message").val()) {
            e.preventDefault();
            $("#errorMessage").html("Please Input Your Message");
        }

        else {
            $("#errorMessage").html("");
        }
    });
});