$(document).ready(function () {
    initDisplay();
    // submit btn submit
    $("#submit_btn").click(function () {
        $('#submit_score_form').submit();
    });
    $("#restart_btn").click(function () {
        reloadPage();
    });
});
function reloadPage(){
    location.reload(true);
}
var move = 0;
function initDisplay() {
    //y axis vehicles
    $("#car2").css({ top: "300px" });
    setContainment($(".mainboxY"),$("#car2"),0,300,0,100,"y");

    $("#car4").css({ top: "400px" , left: "100px" });
    setContainment($(".mainboxY"),$("#car4"),0,400,0,0,"y");

    $("#truck2").css({ left: "100px" });
    setContainment($(".mainboxY"),$("#truck2"),0,0,0,300,"y");
    
    $("#car6").css({ left: "100px"});
    setContainment($(".mainboxY"),$("#car6"),0,0,0,400,"y");

    $("#car8").css({ top: "200px"});
    setContainment($(".mainboxY"),$("#car8"),0,200,0,200,"y");

    $("#truck4").css({ top: "200px"});
    setContainment($(".mainboxY"),$("#truck4"),0,0,0,0,"y");

    //x axis vehicles
    setContainment($(".mainboxX"),$("#car1"),0,0,300,0,"x");

    setContainment($(".mainboxX"),$("#truck1"),0,0,300,0,"x");

    setContainment($(".mainboxX"),$("#red_car"),0,0,300,0,"x");

    $("#car3").css({ left: "200px" });
    setContainment($(".mainboxX"),$("#car3"),100,0,200,0,"x");

    $("#car5").css({ left: "300px" });
    setContainment($(".mainboxX"),$("#car5"),300,0,100,0,"x");

    setContainment($(".mainboxX"),$("#car7"),0,0,400,0,"x");
}
function setContainment($box, $drag, spaceX1, spaceY1, spaceX2, spaceY2, axis) {
    var x1 = $box.offset().left + spaceX1;
    var y1 = $box.offset().top + spaceY1;
    var x2 = $box.offset().left + $box.width() - $drag.width() - spaceX2;
    var y2 = $box.offset().top + $box.height() - $drag.height() - spaceY2;
    $drag.draggable({
        containment: [x1, y1, x2, y2],
        axis: axis,
        drag: function () {
            goalCheck();
        },
        stop: function () {
            stopFunction($drag);
            move++;
            $("#score").text(move);
            $("#move").val(move);
        }});
}
function goalCheck() {
    if ($("#red_car").position().left > 665) {
        $('#score_modal').modal({
            focus: true
        })
    }
}
function stopFunction($drag) {
    console.log("top " + $drag.position().top);
    console.log("left " + $drag.position().left);
    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    //restrict x vehicles
    //restrict car1
    if ($("#truck4").position().top < 95) {
        x2 = 100; 
    }
    if ($("#car6").position().top < 95) {
        x2 = 200;
    }
    if($("#car2").position().top < 95) {
        x1 = 100;
    }
    if ($("#truck2").position().top < 95 && $("#car1").position().left < 669){
        x2 = 300;
    } else if ($("#truck2").position().top < 95 && $("#car1").position().left > 669){
        x1 = 400;
    }
    if($("#car4").position().top < 95 && $("#car1").position().left > 560) {
        x1 = 300;
    } else if ($("#car4").position().top < 95 && $("#car1").position().left < 560) {
        x2 = 400;
    }
    setContainment($(".mainboxX"),$("#car1"),x1,0,x2,0,"x");
    //restrict truck1
    x1 = x2 = y1 = y2 = 0;
    if ($("#truck4").position().top < 195) {
        x2 = 100; 
    }
    if ($("#car6").position().top < 195) {
        x2 = 200;
    }
    if($("#car2").position().top < 195) {
        x1 = 100;
    }
    if ($("#truck2").position().top < 195){
        x2 = 300;
    }
    if($("#car4").position().top < 195 && $("#truck1").position().left > 560) {
        x1 = 300;
    } else if ($("#car4").position().top < 195 && $("#truck1").position().left < 560) {
        x2 = 400;
    }
    setContainment($(".mainboxX"),$("#truck1"),x1,0,x2,0,"x");
    //restrict redcar
    x1 = x2 = y1 = y2 = 0;
    if ($("#truck4").position().top < 297) {
        x2 = 100; 
    }
    if ($("#car6").position().top > 0 || $("#car8").position().top < 298) {
        x2 = 200;
    }
    if($("#car2").position().top > 0 && $("#car2").position().top < 298) {
        x1 = 100;
    }
    if ($("#truck2").position().top < 298 && $("#red_car").position().left < 669){
        x2 = 300;
    } else if ($("#truck2").position().top < 298 && $("#red_car").position().left > 669){
        x1 = 400;
    }
    if($("#car4").position().top > 0 && $("#car4").position().top < 298 && $("#red_car").position().left < 569) {
        x2 = 400;
    } else if ($("#car4").position().top > 0 && $("#car4").position().top < 298 && $("#red_car").position().left > 569) {
        x1 = 300;
    }
    setContainment($(".mainboxX"),$("#red_car"),x1,0,x2,0,"x");
    //restrict car3
    x1 = x2 = y1 = y2 = 0;
    if ($("#truck4").position().top > 0) {
        x2 = 100;
    }
    if ($("#car6").position().top > 100 || $("#car8").position().top < 397) {
        x2 = 200;
    }
    if($("#car2").position().top > 100 && $("#car2").position().top < 397) {
        x1 = 100;
    }
    if ($("#truck2").position().top > 0 && $("#car3").position().left < 669){
        x2 = 300;
    } else if ($("#truck2").position().top > 0 && $("#car3").position().left > 669){
        x1 = 400;
    }
    if($("#car4").position().top > 100 && $("#car4").position().top < 398 && $("#car3").position().left < 569) {
        x2 = 400;
    } else if ($("#car4").position().top > 100 && $("#car4").position().top < 398 && $("#car3").position().left > 569) {
        x1 = 300;
    }
    setContainment($(".mainboxX"),$("#car3"),x1,0,x2,0,"x");
    //restrict car5
    x1 = x2 = y1 = y2 = 0;
    if ($("#truck4").position().top > 100) {
        x2 = 100;
    }
    if ($("#car8").position().top > 205) {
        x2 = 200;
    }
    if($("#car2").position().top > 205) {
        x1 = 100;
    }
    if ($("#truck2").position().top > 100 && $("#car5").position().left < 669){
        x2 = 300;
    } else if ($("#truck2").position().top > 100 && $("#car5").position().left > 669){
        x1 = 400;
    }
    if($("#car4").position().top > 200 && $("#car5").position().left < 569) {
        x2 = 400;
    } else if ($("#car4").position().top > 200 && $("#car5").position().left > 569) {
        x1 = 300;
    }
    setContainment($(".mainboxX"),$("#car5"),x1,0,x2,0,"x");
    //restrict car7
    x1 = x2 = y1 = y2 = 0;
    if ($("#truck4").position().top > 201) {
        x2 = 100;
    }
    if ($("#car8").position().top > 300) {
        x2 = 200;
    }
    if($("#car2").position().top > 301) {
        x1 = 100;
    }
    if ($("#truck2").position().top > 200 && $("#car7").position().left < 669){
        x2 = 300;
    } else if ($("#truck2").position().top > 200 && $("#car7").position().left > 669){
        x1 = 400;
    }
    if($("#car4").position().top > 301 && $("#car7").position().left < 569) {
        x2 = 400;
    } else if ($("#car4").position().top > 301 && $("#car7").position().left > 569) {
        x1 = 300;
    }
    setContainment($(".mainboxX"),$("#car7"),x1,0,x2,0,"x");
    //restrict y vehicles
    //restrict car2
    x1 = x2 = y1 = y2 = 0;
    if ($("#car1").position().left < 365) {
        y1 = 100;
    }
    if ($("#truck1").position().left < 365) {
        y1 = 200;
    }
    if ($("#car7").position().left < 365) {
        y2 = 100;
    }
    if ($("#car5").position().left < 365) {
        y2 = 200;
    }
    if ($("#red_car").position().left < 365 && $("#car2").position().top < 297) {
        y2 = 400;
    } else if ($("#red_car").position().left < 365 && $("#car2").position().top > 297){
        y1 = 300;
    }
    if ($("#car3").position().left < 365 && $("#car2").position().top < 397 && $("#red_car").position().left > 370) {
        y2 = 300;
    } else if ($("#car3").position().left < 365 && $("#car2").position().top > 397){
        y1 = 400;
    }
    setContainment($(".mainboxY"),$("#car2"),0,y1,0,y2,"y");
    //restrict car4
    x1 = x2 = y1 = y2 = 0;
    if ($("#car1").position().left < 565 && $("#car1").position().left > 272) {
        y1 = 100;
    }
    if ($("#truck1").position().left < 565) {
        y1 = 200;
    }
    if ($("#car7").position().left < 565 && $("#car7").position().left > 272) {
        y2 = 100;
    }
    if ($("#car5").position().left < 565 && $("#car5").position().left > 272) {
        y2 = 200;
    }
    if ($("#red_car").position().left < 565 && $("#red_car").position().left > 272 && $("#car4").position().top < 297) {
        y2 = 400;
    } else if ($("#red_car").position().left < 565 && $("#red_car").position().left > 272 && $("#car4").position().top > 297){
        y1 = 300;
    }
    if ($("#car3").position().left < 565 && $("#car3").position().left > 272 && $("#car4").position().top < 397) {
        if($("#red_car").position().left > 565  || $("#red_car").position().left < 272){
            y2 = 300;
        }
    } else if ($("#car3").position().left < 565 && $("#car3").position().left > 272 && $("#car4").position().top > 397){
        y1 = 400;
    }
    setContainment($(".mainboxY"),$("#car4"),0,y1,0,y2,"y");
    //restrict truck2
    x1 = x2 = y1 = y2 = 0;
    if ($("#car1").position().left > 375 && $("#car1").position().left < 665) {
        y1 = 100;
    }
    if ($("#truck1").position().left > 275) {
        y1 = 200;
    }
    if ($("#car7").position().left > 375 && $("#car7").position().left < 665) {
        y2 = 100;
    }
    if ($("#car5").position().left > 375 && $("#car5").position().left < 665) {
        y2 = 200;
    }
    if ($("#red_car").position().left < 667 && $("#red_car").position().left > 375) {
        y1 = 300;
    }
    if ($("#car3").position().left < 667 && $("#car3").position().left > 375) {
        y2 = 300;
    }
    setContainment($(".mainboxY"),$("#truck2"),0,y1,0,y2,"y");
    //restrict car6
    x1 = x2 = y1 = y2 = 0;
    y2 = 598 - $("#car8").position().top;
    if ($("#car1").position().left > 472) {
        y1 = 100;
    }
    if ($("#truck1").position().left > 375) {
        y1 = 200;
    }
    if ($("#car3").position().left > 472) {
        y2 = 300;
    }
    if ($("#red_car").position().left > 472) {
        y2 = 400;
    }
    setContainment($(".mainboxY"),$("#car6"),0,y1,0,y2,"y");
    //restrict car8
    x1 = x2 = y1 = y2 = 0;
    y1 = $("#car6").position().top + 200;
    if ($("#red_car").position().left > 472) {
        y1 = 300;
    }
    if ($("#car3").position().left > 472) {
        y1 = 400;
    }
    if ($("#car5").position().left > 472) {
        y2 = 200;
    }
    if ($("#car7").position().left > 472) {
        y2 = 100;
    }
    setContainment($(".mainboxY"),$("#car8"),0,y1,0,y2,"y");
    //restrict truck4
    x1 = x2 = y1 = y2 = 0;
    if ($("#car1").position().left > 575) {
        y1 = 100;
    }
    if ($("#truck1").position().left > 470) {
        y1 = 200;
    }
    if ($("#car7").position().left > 575) {
        y2 = 100;
    }
    if ($("#car5").position().left > 575) {
        y2 = 200;
    }
    if ($("#red_car").position().left > 575) {
        y1 = 300;
    }
    if ($("#car3").position().left > 575) {
        y2 = 300;
    }
    setContainment($(".mainboxY"),$("#truck4"),0,y1,0,y2,"y");
}