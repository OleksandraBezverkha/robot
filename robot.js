$(document).ready(function() {

    $(document).bind('keydown', function(e) {
            //left = 37,
            //up = 38,
            //right = 39,
            //down = 40
        robot_top=$(".robot").offset().top;
        robot_left=$(".robot").offset().left;
        park1_top=$(".park1").offset().top;
        park3_top=$(".park3").offset().top;
        park1_left=$(".park1").offset().left;
        walk4_top=$(".walk4").offset().top;
        walk3_top=$(".walk3").offset().top;
        walk1_left=$(".walk1").offset().left;
        walk2_left=$(".walk2").offset().left;
        walk2_top=$(".walk2").offset().top;
        cross1_1_left=$(".cross1").offset().left;
        cross1_2_left=$(".cross1").offset().left+$(".cross1").width()-$('.robot').width();
        //cross2_1_top=$(".cross2_1").offset().top;
        //cross2_1_left=$(".cross2_1").offset().left;
        //cross2_2_top=$(".cross2_2").offset().top;
        zone1_top=park1_top+$('.park1').height()+$('.walk3').height()-$('.robot').height();
        zone1_left=park1_left+$('.park1').width()+$('.walk1').width()-$('.robot').width();
        zone2_top=walk4_top-$('.robot').height();
        zone3_top=$(".walk2").offset().top+$('.robot').height();
        height=$('table').height()-$('.robot').height();
        width=$('table').width()-$('.robot').width();

        zone1_height=park1_top+$('.walk3').height()+$('.park1').height()-$('.robot').height();
        zone1_width=park1_left+$('.walk1').width()+$('.park1').width()-$('.robot').width();

//////down
        if (e.keyCode == 40&&robot_top<zone1_height||e.keyCode == 40&&robot_top<height&&robot_top>=walk4_top) {
            $(".robot").css("top",  $(".robot").offset().top + 10); }
        if (e.keyCode == 40&&robot_top>= zone1_height&&robot_left>=cross1_1_left&&robot_left<=cross1_2_left&&robot_top<height&&(green.css("background-color")=="rgb(43, 205, 30)"||green.css("background-color")=="rgb(175, 250, 154)")) {
            $(".robot").css("top",  $(".robot").offset().top+ 10); }
        if (e.keyCode == 40&&robot_top> zone1_height&&robot_left>=cross1_1_left&&robot_left<=cross1_2_left&&robot_top<height&&(green.css("background-color")!="rgb(43, 205, 30)"||green.css("background-color")!="rgb(175, 250, 154)")) {
            $(".robot").css("top",  $(".robot").offset().top+ 10); }

///////right
        if (e.keyCode == 39&&robot_left<zone1_width&&robot_top<=zone1_height||e.keyCode == 39&&robot_left<zone1_width&&robot_top>=walk4_top) {
            $(".robot").css("left",  $(".robot").offset().left + 10);}
        if (e.keyCode == 39&&robot_top>=zone1_height&&robot_top<=walk4_top&&robot_left>=cross1_1_left&&robot_left<cross1_2_left) {
            $(".robot").css("left",  $(".robot").offset().left+ 10);}
//////////up
        if (e.keyCode == 38&&robot_top>walk4_top||e.keyCode == 38&&robot_top<=zone1_height&&robot_top>park1_top) {
            $(".robot").css("top",  $(".robot").offset().top - 10);}
        if (e.keyCode == 38&&robot_top<=walk4_top&&robot_left>=cross1_1_left&&robot_left<=cross1_2_left&&robot_top>park1_top&&(green.css("background-color")=="rgb(43, 205, 30)"||green.css("background-color")=="rgb(175, 250, 154)")) {
            $(".robot").css("top",  $(".robot").offset().top- 10);}
        if (e.keyCode == 38&&robot_top< walk4_top&&robot_left>=cross1_1_left&&robot_left<=cross1_2_left&&robot_top>park1_top&&(green.css("background-color")!="rgb(43, 205, 30)"||green.css("background-color")!="rgb(175, 250, 154)")) {
            $(".robot").css("top",  $(".robot").offset().top- 10);}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////||e.keyCode == 37&&robot_top<=cross2_1_top&&robot_top>=cross2_2_top&&robot_left<=walk2_left&&robot_left>=cross2_1_top
//////////////left
        if (e.keyCode == 37&&robot_left>park1_left&&robot_top<=zone1_height||e.keyCode == 37&&robot_left>park1_left&&robot_left<=zone1_width&&robot_top>=walk4_top) {
           $(".robot").css("left",  $(".robot").offset().left -10);}
        if (e.keyCode == 37&&robot_top>=zone1_height&&robot_top<=walk4_top&&robot_left>cross1_1_left&&robot_left<=cross1_2_left) {
            $(".robot").css("left",  $(".robot").offset().left -10);}


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