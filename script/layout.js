

$(document).ready(function(){


    //세로스크롤 값 구하기
    $(window).scroll(function(){
        // let sPos = $(this).scrollTop();
        let sPos = $(this).scrollTop();
        

        console.log(sPos);




 //1번 내비
 if(sPos>625){
    $('#m_nav').css('opacity','1');
    $('#m_nav>ul>li:first-child').addClass('color_change');
 }else if(sPos>3246){
    $('#m_nav>ul>li:first-child').addClass('color_change');
 }else{
    $('#m_nav>ul>li:first-child').removeClass('color_change');
    $('#m_nav').css('opacity','0');

 }



//2번 내비3247
if(sPos>=3464){
    $('#m_nav>ul>li:first-child').removeClass('color_change');

    $('#m_nav>ul>li:nth-child(2)').addClass('color_change');
 }else if(sPos>=4229){
    $('#m_nav>ul>li:first-child').removeClass('color_change');

    $('#m_nav>ul>li:nth-child(2)').addClass('color_change');
 }else{
    $('#m_nav>ul>li:nth-child(2)').removeClass('color_change');

 }


 //3번 내비
 if(sPos>=4230){
    $('#m_nav>ul>li:nth-child(2)').removeClass('color_change');

    $('#m_nav>ul>li:nth-child(3)').addClass('color_change');
 }else if(sPos>=5135){
    $('#m_nav>ul>li:nth-child(2)').removeClass('color_change');

    $('#m_nav>ul>li:nth-child(3)').addClass('color_change');
 }else{
    $('#m_nav>ul>li:nth-child(3)').removeClass('color_change');

 }

 //4번 내비
 if(sPos>=5136){
    $('#m_nav>ul>li:nth-child(3)').removeClass('color_change');

    $('#m_nav>ul>li:nth-child(4)').addClass('color_change');
 }else if(sPos>=6161){
    $('#m_nav>ul>li:nth-child(3)').removeClass('color_change');

    $('#m_nav>ul>li:nth-child(4)').addClass('color_change');
 }else{
    $('#m_nav>ul>li:nth-child(4)').removeClass('color_change');

 }

 //마지막 내비
 if(sPos>6162){
    $('#m_nav>ul>li:nth-child(4)').removeClass('color_change');

    $('#m_nav>ul>li:last-child').addClass('color_change');
 }else if(sPos>=7290){
    $('#m_nav>ul>li:nth-child(4)').removeClass('color_change');

    $('#m_nav>ul>li:last-child').addClass('color_change');
 }else{
    $('#m_nav>ul>li:last-child').removeClass('color_change');

 }










        if(sPos>=715){
            $('header').addClass('act');//1. 배경색 변경
            //$('header').css('position','fixed');//고정
            // $('header').mouseout
            //2. 로고변경
            $('header h1 img').attr('src','./images/header_logo_black.png');
            //3. 메뉴색상 변경
            $('header .gnb > li>a').css('color','#333');
        } else {
            $('header').removeClass('act');
            //2. 로고 원래대로
            $('header h1 img').attr('src','./images/header_logo_white.png');
            //3. 메뉴색상, 알람아이콘 원래대로
            $('header .gnb > li>a').css('color','#fff');
        }

        //호버시, 
        $('header').hover(function(){
            let sPos = $(window).scrollTop();
            if(sPos < 715){
            $('header').addClass('act');//1. 배경색 변경
            //2. 로고변경
            $('header h1 img').attr('src','./images/header_logo_black.png');
            //3. 메뉴색상 변경
            $('header .gnb > li>a').css('color','#333');
            }
        }, function(){
            let sPos = $(window).scrollTop();
            if(sPos < 715){
            $('header').removeClass('act');
             //2. 로고 원래대로
            $('header h1 img').attr('src','./images/header_logo_white.png');
             //3. 메뉴색상, 알람아이콘 원래대로
            $('header .gnb > li>a').css('color','#fff');
        }
        });

    });

    //화면 스크롤 내리지 않고 헤더에 마우스 오버시 색상 변경






    //내비게이션 글자 누르면 scrollTop값이 0px되게 하기
    //내비게이션 변수선언
    let gnb = $('.gnb li');

    gnb.click(function(){
        let i = $(this).index()+1;//+2를 주는 이유: 0,1번 섹션은 내비게이션에 포함되지 않기때문에
        console.log(i);//0,1,2,3,4,...

        $('html, body').animate({scrollTop:$('main section').eq(i).offset().top-70},400,'easeOutCubic');

        
    //main section의 인덱스번호를 찾아서
    // -70인 이유: 헤더랑 겹치지 않기위해서
    //오프셋 탑 -70이 될때까지 올라가라
        return false;
    });


    
//고정내비게이션 제이쿼리
    let nav_c = $('#m_nav li');
    //고정 내비 클릭시 
    nav_c.click(function(){
        let c = $(this).index()+1;
        //해당 섹션으로 이동
        $('html, body').animate({scrollTop:$('main section').eq(c).offset().top-70},400,'easeOutCubic');

        // 클래스 추가/삭제
        nav_c.removeClass('color_change');
        $(this).addClass('color_change');

        return false;
    });

        
   

   
    

    //모달창 스크립트
     //1. 모달 변수 생성하기
    const modal = `
    <div class="modal">
        <div class="inner">
            <a href="#" title""><img src="./images/modal_img05.jpg" alt="모달이미지"></a>
            <p>
                <input type="checkbox" id="ch">
                <label for="ch">오늘 하루 열지 않음</label>
                <input type="button" value="닫기" id="c_btn">
            </p>
        </div>
    </div>
    `;

    //모달변수를 body의 맨 뒤쪽에 출력한다
    $('body').append(modal);



    //쿠키 생성하기
    let ch = $('.modal #ch');//체크박스 변수

    //1. 현재 브라우저에 쿠키 정보가 있는지, 없는지 유무를 판단하여 모달이 나오지 않게 함
    if($.cookie('popup')=='none'){//쿠키의 이름을 popup으로 정함
        $('.modal').hide();
    }

    //2. 쿠키의 존재 유무를 체크하여 쿠키를 생성하거나 모달윈도우 숨기기
    function closeModal(){
        if(ch.is(':checked')){//만약 사용자가 체크박스에 체크를 하면

            //쿠키를 생성해야함
            $.cookie('popup','none', {expires:1, path:'/'});//expires:1==1일

        }
    
        
            //체크박스에 체크 안 한 경우 그냥 모달 숨기기
        $('.modal').hide();
    
        }
        //닫기 버튼을 클릭하면 closeModal 함수를 실행하여 쿠키를 생성하고 모달을 숨긴다
        $('.modal #c_btn').click(function(){
            closeModal();
        });

      
 });
