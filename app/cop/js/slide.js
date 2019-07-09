$(document).ready(function(){
    $("#imgbox img").fadeOut(0).eq(0).fadeIn(0);
    var i = 0;
    setInterval(function(){
        if($("#imgbox img").length > (i+1)){
            $("#imgbox img").eq(i).fadeOut(666).next("img").fadeIn(1888);
            i++;
        }
        else{
            $("#imgbox img").eq(i).fadeOut(666).siblings("img").eq(0).fadeIn(1888);
            i = 0;
        }
    },8666);
});

$(document).ready(function(){
    $('#imgtop').removeClass().addClass('mh');
    var i = 0;
    setInterval(function(){
        if(i==0){
            $("#imgtop").removeClass().addClass('mh1').fadeOut(666).fadeIn(600);
            i++;
        }
        else if(i==1){
            $("#imgtop").removeClass().addClass('mh2').fadeOut(666).fadeIn(600);
            i++;
        }
        else{
            $('#imgtop').removeClass().addClass('mh').fadeOut(666).fadeIn(600);
            i = 0;
        }
    },8666);
});