$(document).ready(function(){
    alert('Chào mừng đến trang')
});

$(document).ready(function(){
    $(window).scroll(function(){    
        if($(this).scrollTop()){    //if về top fade in và ngược lại
            $('.top').fadeIn()
                }
        else{
            $('.top').fadeOut();
        }
    });
    $(".top").click(function(){
        $('html,body').animate({
            scrollTop: 0    //quay về top (0) với tốc độ 1s
        }, 1000);   
    });
});

