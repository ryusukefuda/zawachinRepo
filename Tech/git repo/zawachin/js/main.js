
     // 0 : zawachin
     // 1 : tomochin
     var imgSrcOrg = [
           ["images/imgdata/0.jpg","0"],
           ["images/imgdata/1.jpg","0"],
           ["images/imgdata/2.jpg","0"],
           ["images/imgdata/3.jpg","0"],
           ["images/imgdata/4.jpg","0"],
           ["images/imgdata/5.jpg","0"],
           ["images/imgdata/6.jpg","1"],
           ["images/imgdata/7.jpg","1"],
           ["images/imgdata/8.jpg","1"],
           ["images/imgdata/9.jpg","1"],
           ["images/imgdata/10.jpg","1"],
           ["images/imgdata/11.jpeg","0"],
           ["images/imgdata/12.jpg","0"],
           ["images/imgdata/13.jpg","1"],
           ["images/imgdata/14.png","0"],
           ["images/imgdata/15.jpg","1"],
           ["images/imgdata/16.png","1"],
           ["images/imgdata/17.jpg","1"],
                 ];

     //shuffle array
     function arrayShuffle(list){
          var d,
          c,
          b = list.length;
            while(b){
                c = Math.floor(Math.random() * b); // 配列の数だけ乱数生成
                d = list[--b];                     // dは配列の数マイナス１
                list[b] = list[c];                 // 配列の乱数番目に
                list[c] = d;
            }
            return list;
     }
     var imgSrc = arrayShuffle(imgSrcOrg);

     var i = 0;
     var win = 0;
     var lose = 0;
     var score = 0;
     var count = imgSrc.length;


     //Click start button
     $("#run").click(function(){

         $("#run").css("display","none");
         $(".topText1").css("display","none");
         $(".topText2").css("display","none");
         $(".social").css("display","none");
         $(".photo").css("display","block");
         $("#zawachin").css("display","block");
         $("#tomochin").css("display","block");
         $(".where").css("display","block");
         $('.imgZawa').attr('src', imgSrc[i][0]);

     });

     //Show score function
     function showResult(){
         $("#floatingBarsG").css("display","none");
         $(".rate").css("display","block");
         $(".number").text(Math.floor(score));
         $(".social").css("display","block");
         $(".back").css("display","block");
     }


     //Click zawachin button
     $("#zawachin").click(function(){
         if(i != 17 ){
           $(".where").text( i+2 + "/" +  count);
         }
         if ($('.imgZawa').attr('src') == imgSrc[i][0] ){
           if(imgSrc[i][1] == 0){
             alert("正解!!ざわちんだよ");
             win++;
           }else{
             alert("はいっハズレ。");
             lose++;
           }
         }
         i++;

         score = win / count * 100;
         if (i >= count){

           $(".photo").css("display","none");
           $("#zawachin").css("display","none");
           $("#tomochin").css("display","none");
           $(".number").css("display","block");

           $("#floatingBarsG").css("display","block");
           //wait 1 second
           setTimeout("showResult()", 1500);

         }

         $('.imgZawa').attr('src', imgSrc[i][0]);

     });

     //Click tomochin button
     $("#tomochin").click(function(){
         if(i != 17 ){
           $(".where").text( i+2 + "/" +  count);
         }

         if ($('.imgZawa').attr('src') == imgSrc[i][0] ){
           if(imgSrc[i][1] == 1){
             alert("正解!!");
             win++;
           }else{
             alert("ハズレ!!ざわちんだよー。");
             lose++;
           }
         }
         i++;

         score = win / count * 100;
         if (i >= count){

           $(".photo").css("display","none");
           $("#zawachin").css("display","none");
           $("#tomochin").css("display","none");
           $(".number").css("display","block");

           $("#floatingBarsG").css("display","block");
           //wait 1 second
           setTimeout("showResult()", 1500);

         }

         $('.imgZawa').attr('src', imgSrc[i][0]);

     });

     //Click back button
     $(".back").click(function(){
        location.reload();  
     });


