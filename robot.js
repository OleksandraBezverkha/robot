$(document).ready(function() {

    $(document).bind('keydown', function(e) {
            //left = 37,
            //up = 38,
            //right = 39,
            //down = 40///////////
        /////////////////////////////table
        table_top=$("table").offset().top;
        table_left=$("table").offset().left;
        height=$("table").offset().top +$("table").height()-$('.robot').height();
        width=$("table").offset().left +$("table").width()-$('.robot').width();
      ///////////////////////////robot
        robot_top=$(".robot").offset().top;
        robot_left=$(".robot").offset().left;

//////////////////////////////////////////////////////////////////////road1
        road1_top=$(".road1").offset().top-$('.robot').height();
        road1_height=$(".road1").offset().top+$('.road1').height();
        road1_left=$(".road1").offset().left;
        //////////////////////////////////////////////////////////////road2
        road2_left=$(".road2").offset().left-$('.robot').width();
        road2_width=$(".road2").offset().left+$('.road2').width();
/////////////////////////////////////////////cross1
        cross1_top=$(".cross1").offset().top;
        cross1_width=$(".cross1").offset().left+$(".cross1").width()-$('.robot').width();
        cross1_left=$(".cross1").offset().left;
///////////////////////////////////////////////cross2
        cross2_top=$(".cross2").offset().top;
        cross2_width=$(".cross2").offset().left+$(".cross2").width()-$('.robot').width();
        cross2_left=$(".cross2").offset().left;
/////////////////////////////////////////////cross3
        cross3_top=$(".cross3").offset().top;
        cross3_height=$(".cross3").offset().top+$(".cross3").height()-$('.robot').height();

///////////////////////////////////////////////cross4
        cross4_top=$(".cross4").offset().top;
        cross4_height=$(".cross4").offset().top+$(".cross4").height()-$('.robot').height();





//////down
        if (e.keyCode == 40&&robot_top<road1_top&&(robot_left<=road2_left||robot_left>=road2_width)) {
            $(".robot").css("top",  $(".robot").offset().top + 10); }
        if (e.keyCode == 40&&robot_top>=road1_top&&((robot_left>=cross1_left&&robot_left<=cross1_width)||robot_left>=cross2_left&&robot_left<=cross2_width)&&robot_top<road1_height&&(green.css("background-color")=="rgb(43, 205, 30)"||green.css("background-color")=="rgb(175, 250, 154)")) {
            $(".robot").css("top",  $(".robot").offset().top + 10); }
        if (e.keyCode == 40&&robot_left>=road2_left&&robot_left<=road2_width&&(robot_top>=cross3_top&&robot_top<cross3_height||robot_top>=cross4_top&&robot_top<cross4_height)) {
            $(".robot").css("top",  $(".robot").offset().top + 10); }
        if (e.keyCode == 40&&robot_top>=road1_height&&(robot_left<=road2_left||robot_left>=road2_width)&&robot_top<height) {
            $(".robot").css("top",  $(".robot").offset().top + 10); }



/////right
        if (e.keyCode == 39&&(robot_left<road2_left||robot_left>=road2_width)&&robot_top<=road1_top&&robot_left<width) {
            $(".robot").css("left",  $(".robot").offset().left + 10);}
        if (e.keyCode == 39&&robot_left>=road2_left&&robot_left<=road2_width&&(robot_top>=cross3_top&&robot_top<=cross3_height||robot_top>=cross4_top&&robot_top<=cross4_height)) {
            $(".robot").css("left",  $(".robot").offset().left + 10);}
        if (e.keyCode == 39&&robot_top<=road1_height&&((robot_left>=cross1_left&&robot_left<cross1_width)||robot_left>=cross2_left&&robot_left<cross2_width)&&robot_top>road1_top) {
            $(".robot").css("left",  $(".robot").offset().left + 10);}
        if (e.keyCode == 39&&(robot_left<road2_left||robot_left>=road2_width)&&robot_top>=road1_height&&robot_left<width) {
            $(".robot").css("left",  $(".robot").offset().left + 10);}
//////////up
        if (e.keyCode == 38&&robot_top>road1_height&&(robot_left<=road2_left||robot_left>=road2_width)) {
            $(".robot").css("top",  $(".robot").offset().top - 10);}
        if (e.keyCode == 38&&robot_top<=road1_height&&((robot_left>=cross1_left&&robot_left<=cross1_width)||robot_left>=cross2_left&&robot_left<=cross2_width)&&robot_top>road1_top) {
            $(".robot").css("top",  $(".robot").offset().top - 10);}
        if (e.keyCode == 38&&robot_left>=road2_left&&robot_left<=road2_width&&(robot_top>cross3_top&&robot_top<=cross3_height||robot_top>cross4_top&&robot_top<=cross4_height)) {
            $(".robot").css("top",  $(".robot").offset().top - 10);}
        if (e.keyCode == 38&&robot_top<=road1_top&&(robot_left<=road2_left||robot_left>=road2_width)&&robot_top>table_top) {
            $(".robot").css("top",  $(".robot").offset().top - 10);}

//////////////left

        if (e.keyCode == 37&&(robot_left<=road2_left||robot_left>road2_width)&&robot_top<=road1_top&&robot_left>table_left) {
            $(".robot").css("left",  $(".robot").offset().left - 10);}
        if (e.keyCode == 37&&robot_left>=road2_left&&robot_left<=road2_width&&(robot_top>=cross3_top&&robot_top<=cross3_height||robot_top>=cross4_top&&robot_top<=cross4_height)) {
            $(".robot").css("left",  $(".robot").offset().left - 10);}
        if (e.keyCode == 37&&robot_top<=road1_height&&((robot_left>cross1_left&&robot_left<=cross1_width)||robot_left>cross2_left&&robot_left<=cross2_width)&&robot_top>road1_top) {
            $(".robot").css("left",  $(".robot").offset().left - 10);}
        if (e.keyCode == 37&&(robot_left<=road2_left||robot_left>road2_width)&&robot_top>=road1_height&&robot_left>table_left) {
            $(".robot").css("left",  $(".robot").offset().left - 10);}
    });
    sec1=10;
    sec2=2;
    sec3=15;
    red= $('.red');
    yellow= $('.yellow');
    green= $('.green');
    t1=$(".sec1");
    t2=$(".sec2");
    t3=$(".sec3");
    setInterval(function() {
        if (sec1 < 0) {
            if (sec2 < 0) {
                red.css("background-color", " #ffbcad");
                yellow.css("background-color", " #fffc9b");
                green.css("background-color", " #2bcd1e");
                t2.html("");
                t3.html('<p>'+sec3+'</p>');
                sec3--;
                if(sec3 < 0){green.css("background-color", " #b3ff9e");
                    t3.html("");
                    sec1=10;sec2=2;sec3=15;}
                else if(sec3 <3 ){
                    green.animate({ 'backgroundColor': '#affa9a' }, "slow"); }
            }
            else {
                yellow.css("background-color", " yellow");
                t1.html("");
                t2.html('<p>'+sec2+'</p>');
                sec2--;}
        }
        else {
            red.css("background-color", "red");
            t1.html('<p>'+sec1+'</p>');
            sec1--;}
    }, 1000);
});