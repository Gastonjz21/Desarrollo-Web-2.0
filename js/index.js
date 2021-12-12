$(document).ready(function(){

    $('#banner').css({'height':$(window).height() + 'px'});

    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrolltop();

        if(scroll > 200){
            $('#logo').css({'margin-top': '-5px', 'width': '50px', 'heigth': '50px'});
        } else{
            $('#logo').css({'margin-top': '150px', 'width': '300px', 'heigth': '300px'});
        }

    });

});