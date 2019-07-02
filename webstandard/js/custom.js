        $(".light_gallery").lightGallery({
            thumbnail: true,
            autoplay: true,
            pause: 3000,
            progressBar: true
        }); 
        //라이트박스
        
        
        //윈도우 팝업
        $(".window").click(function(e){
            e.preventDefault();
            //window.open("파일명", "팝업이름", "옵션설정");
            //옵션 : left, top, width, height, status, location, menubar, fullscreen
            window.open("sample_popup.html", "popup01", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=no')")
        });
        
        
        //레이어팝업
        $(".layer").click(function(e){
           e.preventDefault();
            //$("#layer").css("display", "block");
            //$("#layer").show();
            //$("#layer").fadeIn();
            $("#layer").slideDown(200);
        });
        $("#layer .close").click(function(e){
           e.preventDefault();
            //$("#layer").css("display", "none");
            //$("#layer").hide();
            //$("#layer").fadeOut();
            $("#layer").slideUp(200);
        });
        
        
        //탭메뉴
        var $tab_list = $(".tab_menu");
        
        $tab_list.find("ul ul").hide();
        $tab_list.find("li.active>ul").show();
        
        function tabMenu(e){
            e.preventDefault();
            var $this = $(this);
            $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
            }
        $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);
   
        
        //배너
        //마크업셋팅 -> css연동 -> 제이쿼리 연동 -> 제이쿼리 호출
        $('.ban').slick({
            infinite: true,
            //무한반복
            slidesToShow: 3,
            //3개 이미지 보여라!
            slidesToScroll: 3,
            //한번에 3개씩 이동!
            autoplay : true,
            autoplaySpeed: 3000,
            dots: true
          });
        
        
        //갤러리
        $(".gallery_img").slick({
            arrows: false,
            //양쪽에 버튼
            fade: true,
            //페이드로 이미지 변경
            pauseOnHover: true,
            //이미지에 호버시 스탑
            infinite:true,
            //무한반복
            autoplay:true,
            //자동재생
            autoplaySpeed:3000,
            speed:300,
            slidesToShow: 1
            
        });
        $(".play").click(function(){
            $(".gallery_img").slick("slickPlay");
            //재생
        })
        
        $(".prev").click(function(){
            $(".gallery_img").slick("slickPrev");
            //이전
        })
        
        $(".pause").click(function(){
            $(".gallery_img").slick("slickPause");
            //정지
        })
        
        $(".next").click(function(){
            $(".gallery_img").slick("slickNext");
            다음
        })
        
    
        
        $(".tit .btn").click(function(e){
            e.preventDefault();
            //클릭했을 때 맨위로 이동되는걸 막는다!, #의 기능 깨주기
            //$("#cont_nav").css("display", "block"); 
            //$("#cont_nav").show();
            //$("#cont_nav").fadeIn();
            //$("#cont_nav").slideDown();
            //$("#cont_nav").toggle();
            //$("#cont_nav").fadeToggle();
            $("#cont_nav").slideToggle(200);
            $(this).toggleClass("on");
        });