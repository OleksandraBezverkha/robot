$(document).ready(function() {
    function  Robot(){
    $(".robot").css({"width":$("td").width(),"height":$("td").height()})

    $(document).bind('keydown', function(e) {
            //left = 37,
            //up = 38,
            //right = 39,
            //down = 40///////////

        coord_road = [];

        $(".road").each(function(){
            coord_road.push($(this).offset().top +":"+$(this).offset().left);
        });
        coord_cross1 = [];

        $(".cross1").each(function(){
            coord_cross1.push($(this).offset().top +":"+$(this).offset().left);
        });
        coord_cross2 = [];

        $(".cross2").each(function(){
            coord_cross2.push($(this).offset().top +":"+$(this).offset().left);
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

        if (e.keyCode == 40&&!coord_road.includes(robot_coord_down_next)&&(!coord_cross1.includes(robot_coord_down_next)||coord_cross1.includes(robot_coord_down_next)&&lgh1.flag==true)&&robot_top<zone_height) {
            $(".robot").css("top",  $(".robot").offset().top+robot_height)}

/////right
        if (e.keyCode == 39&&!coord_road.includes(robot_coord_right_next)&&(!coord_cross2.includes(robot_coord_right_next)||coord_cross2.includes(robot_coord_right_next)&&lgh3.flag==true)&&robot_left<zone_width) {
            $(".robot").css("left",  $(".robot").offset().left + robot_width);}
//////////up
        if (e.keyCode == 38&&!coord_road.includes(robot_coord_up_next)&&(!coord_cross1.includes(robot_coord_up_next)||coord_cross1.includes(robot_coord_up_next)&&lgh1.flag==true)&&robot_top>zone_top) {
            $(".robot").css("top",  $(".robot").offset().top - robot_height);}
//////////////left

        if (e.keyCode == 37&&!coord_road.includes(robot_coord_left_next)&&(!coord_cross2.includes(robot_coord_left_next)||coord_cross2.includes(robot_coord_left_next)&&lgh3.flag==true)&&robot_left>zone_left) {
            $(".robot").css("left",  $(".robot").offset().left - robot_width);}
    });}
    function Light(sec1,sec2,sec3,indx){
        def_sec1=10;
        def_sec2=2;
        def_sec3=13;
        this.flag=false;
        var this_ = this;
        //red= $('.light'+indx+' .red');
        //yellow= $('.light'+indx+' .yellow');
        //green= $('.light'+indx+' .green');
        //t1=$('.light'+indx+' .sec1');
        //t2=$('.light'+indx+' .sec2');
        //t3=$('.light'+indx+' .sec3');
        setInterval(function() {
            if (sec1 < 0) {
                if (sec2 < 0) {
                    $('.light'+indx+' .red').css("background-color", " #ffbcad");
                    $('.light'+indx+' .yellow').css("background-color", " #fffc9b");
                    $('.light'+indx+' .green').css("background-color", " #2bcd1e");
                    $('.light'+indx+' .sec2').html("");
                    $('.light'+indx+' .sec3').html('<p>'+sec3+'</p>');
                    this_.flag=true;
                    sec3--;
                    if(sec3 < 0){$('.light'+indx+' .green').css("background-color", " #b3ff9e");
                        $('.light'+indx+' .sec3').html("");
                        sec1=def_sec1;sec2=def_sec2;sec3=def_sec3,this_.flag=false;}
                    else if(sec3 <3 ){
                        $('.light'+indx+' .green').animate({ 'backgroundColor': '#affa9a' }, "slow");
                    }
                }
                else {
                    $('.light'+indx+' .yellow').css("background-color", " yellow");
                    $('.light'+indx+' .sec1').html("");
                    $('.light'+indx+' .sec2').html('<p>'+sec2+'</p>');
                    sec2--;}
            }
            else {
                $('.light'+indx+' .red').css("background-color", "red");
                $('.light'+indx+' .sec1').html('<p>'+sec1+'</p>');
                sec1--;}
        }, 1000);
    }
    robot=new Robot();
    lgh1=new Light(10,2,13,1);
    lgh2=new Light(10,2,13,2);
    lgh3=new Light(-1,-1,13,3);
    lgh4=new Light(-1,-1,13,4);
    //lgh2=new Light(10,2,15);
});