// main.js

$(document).ready(function(){

    
    //(메인 동영상)넥스트 버튼 스크립트
    function scrollUpDown(){
          $('.next_btn').animate({'bottom':'50px'}, 800).animate({'bottom':'30px'},800);
      }
      let Timer = setInterval(scrollUpDown, 500);

    $('.next_btn').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:$('#micro').offset().top-70},500);
    });

$(window).scroll(function(){
        
        let micro = $('#micro').offset().top-70;
        $(this).css('color','red');
});


    //(메인1 소개)
    $(window).scroll(function(){
        let main1_scroll = $(this).scrollTop();
        console.log(main1_scroll);
        

        //첫번째 박스
        if(main1_scroll>=595){
            $('.box_wrap1').animate({'left':'15%'},800);
        }
         if(main1_scroll>750){
            $('.b1').addClass('boxact1');
        }
        if(main1_scroll>800){
            $('.box_wrap1>p').addClass('box_wrap_act1');

        }


        //두번째 박스
        if(main1_scroll>=1150){
            $('.box_wrap2').animate({'left':'35%'},800);
        }
        if(main1_scroll>1300){
            $('.b2').addClass('boxact2');
        }
        if(main1_scroll>1350){
            $('.box_wrap2>p').addClass('box_wrap_act2');
        }


        //세번째 박스
        if(main1_scroll>=1705){
            $('.box_wrap3').animate({'left':'55%'},800);
        }
        if(main1_scroll>1860){
            $('.b3').addClass('boxact3');
        }
        if(main1_scroll>1910){
            $('.box_wrap3>p').addClass('box_wrap_act3');
        }


        //네번째 박스
        if(main1_scroll>=2200){
            $('.box_wrap4').animate({'left':'15%'},800);
        }
        if(main1_scroll>2415){
            $('.b4').addClass('boxact4');
        }
         if(main1_scroll>2465){
            $('.box_wrap4>p').addClass('box_wrap_act4');
        }


        //다섯번째 박스
        if(main1_scroll>=2815){
            $('.box_wrap5').animate({'left':'35%'},800);
        }
         if(main1_scroll>2970){
            $('.b5').addClass('boxact5');
        }
         if(main1_scroll>3020){
            $('.box_wrap5>p').addClass('box_wrap_act5');
        }
    });



    //(메인2 디테일 360도)
    $(window).scroll(function(){
        let main2_scroll = $(this).scrollTop();
        console.log(main2_scroll);

        if(main2_scroll>3200){
            // $("#details").fadeTo(1000, 1);
            $('#details').addClass("main2_bg_change");
        }

        if(main2_scroll>3100){
           $('#details> .i360_img>ul>li>img').animate({'top':'0px'},800);
        }

        if(main2_scroll>3200){
           $('#details> article li>.blue').animate({'top':'0px'},800); 
           $('#details> article li>p').animate({'top':'0px'},800);  
       }

        if(main2_scroll>3400){
            $('.ip01').animate({'left':'0px'},900);
            $('.ip02').animate({'right':'0px'},1200);
        }
       
    });


    //(메인3 갤러리)
    //스와이퍼 슬라이드 스크립트
    
    //목록에 호버할 때 테두리 적용하기
    let s_nav = $('#s_nav li a');
    let img_url = "./images/main3_simg01.jpg";
    let n = 1;
        s_nav.click(function(){
            return false;
        });
        s_nav.hover(function(){

           
        //마우스 올렸을 때의 인덱스 값 구하기
        n=$(this).parent().index()+1
    //(a태그의).부모인 li태그의(). 인덱스 값을 구해라(인덱스는 0부터 시작이라서 +1 줌)
        console.log(n);




            $('#s_nav img').removeClass('act1');
            $(this).find('img').addClass('act1');//a태그의 자손 img태그에 테두리 적용
            img_url = $(this).attr('href');


            //이미지 배너의 속성값을 위에서 저장된 변수값으로 대체하여 이미지가 변경되도록한다.
            $('#m_slide #slide_img').attr('src',img_url);

            //시간 제거
            clearInterval(Timer_s);

        },function(){//마우스 아웃시
            $('#s_nav img').removeClass('act1');
            
            $(this).find('img').addClass('act1');//기존 메뉴 이미지의 테두르 서식은 제거한다.

            //다시 움직이게 만듦
            Timer_s= setInterval(auto_slide,3000);
        });

        //자동슬라이드
        function auto_slide(){
            if(n==5){
                n=1;
            }else{
                n++;
            }
            $('#slide_img').attr('src','./images/main3_simg0'+n+'.jpg');//이미지 번호를 삽입하여 이미지 변경하고
            s_nav.find('img').removeClass('act1');//메뉴 이미지 테두리에 서식을 제거하고
            $('#s_nav li').eq(n-1).find('img').addClass('act1')//해당 메뉴 이미지에만 테두리 서식을 적용한다.
            //eq는 인덱스 번호, 인덱스 번호는 0부터 시작하기 때문에 n==1이 되고 싶으면 n-1을 줘야 맞음
        }
        
        //시간 객체를 사용하여 매 3초마다 함수를 반복 실행한다.
        let Timer_s = setInterval(auto_slide, 3000);
    


        //일시정지
        const s_btn = $('i.fa-pause');

        s_btn.click(function(){
            if($(this).hasClass('fas fa-pause')==true){
                clearInterval(Timer_s);
                $(this).attr('class','fas fa-play');
            }else{
                Timer_s = setInterval(auto_slide,3000);
                $(this).attr('class','fas fa-pause');
            }
        });

     
        
        //메인5) 스토어 찾기 스크립트
        
        $('.s1').click(function(){
            hideAll();
            $(this).addClass('active');
            $('.nbsp2').css('display','block');

        });
        function hideAll(){
            $('.s1').removeClass('active');
            $('.s1_title').removeClass('active');
        }
 

});