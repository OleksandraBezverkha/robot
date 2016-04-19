$(document).ready(function() {
    $(".robot").css({"width":$("td").width(),"height":$("td").height()})

    $(document).bind('keydown', function(e) {
            //left = 37,
            //up = 38,
            //right = 39,
            //down = 40///////////

        coordinates = [];

        $(".road").each(function(){
            coordinates.push($(this).offset().top +":"+$(this).offset().left);
        });
        robot_top=$(".robot").offset().top;
        robot_left=$(".robot").offset().left;
        robot_height=$(".robot").height();
        robot_width=$(".robot").width();
        robot_coord_down_next=robot_top+robot_height+":"+robot_left;
        robot_coord_up_next=robot_top-robot_height+":"+robot_left;
        robot_coord_right_next=robot_top+":"+(robot_left+robot_width);
        robot_coord_left_next=robot_top+":"+(robot_left-robot_width);
        zone_top=$(".zone").offset().top;
        zone_left=$(".zone").offset().left;
        zone_height=zone_top+$(".zone").height()-robot_height;
        zone_width=zone_left+$(".zone").width()-robot_width;
//////down

        if (e.keyCode == 40&&!coordinates.includes(robot_coord_down_next)&&robot_top<zone_height ) {
            $(".robot").css("top",  $(".robot").offset().top+robot_height)}
        else{$(".robot").css("top",  $(".robot").offset().top)}
/////right
        if (e.keyCode == 39&&!coordinates.includes(robot_coord_right_next)&&robot_left<zone_width) {
            $(".robot").css("left",  $(".robot").offset().left + robot_width);}
        else{$(".robot").css("left",  $(".robot").offset().left);}
//////////up
        if (e.keyCode == 38&&!coordinates.includes(robot_coord_up_next)&&robot_top>zone_top) {
            $(".robot").css("top",  $(".robot").offset().top - robot_height);}
        else{$(".robot").css("top",  $(".robot").offset().top);}
//////////////left

        if (e.keyCode == 37&&!coordinates.includes(robot_coord_left_next)&&robot_left>zone_left) {
            $(".robot").css("left",  $(".robot").offset().left - robot_width);}
        else{$(".robot").css("left",  $(".robot").offset().left);}
    });
    //sec1=10;
    //sec2=2;
    //sec3=15;
    //red= $('.red');
    //yellow= $('.yellow');
    //green= $('.green');
    //t1=$(".sec1");
    //t2=$(".sec2");
    //t3=$(".sec3");
    //setInterval(function() {
    //    if (sec1 < 0) {
    //        if (sec2 < 0) {
    //            red.css("background-color", " #ffbcad");
    //            yellow.css("background-color", " #fffc9b");
    //            green.css("background-color", " #2bcd1e");
    //            t2.html("");
    //            t3.html('<p>'+sec3+'</p>');
    //            sec3--;
    //            if(sec3 < 0){green.css("background-color", " #b3ff9e");
    //                t3.html("");
    //                sec1=10;sec2=2;sec3=15;}
    //            else if(sec3 <3 ){
    //                green.animate({ 'backgroundColor': '#affa9a' }, "slow"); }
    //        }
    //        else {
    //            yellow.css("background-color", " yellow");
    //            t1.html("");
    //            t2.html('<p>'+sec2+'</p>');
    //            sec2--;}
    //    }
    //    else {
    //        red.css("background-color", "red");
    //        t1.html('<p>'+sec1+'</p>');
    //        sec1--;}
    //}, 1000);
});