
$(function(){
                
                 
                 $('.main_img').css({"background":"url(img_sub/DD_2.PNG)"});
                 
                 
                $('#img_1')
                   .animate({left:"50px"},
                           {duration:1000,queue:false})
                    .fadeTo("fast", 1, function(){
                });
                 
                 $('#img_2')
                  .animate({left:"50px"},
                           {duration:1000})
                    .fadeTo("fast", 1, function(){
                });
                 
                 
                 //////////////////////////////////////////
                 
                 $('#img_1_sub').mouseover(function(){
                    $(this).animate({width:150});
                 });
                    
                 $('#img_1_sub').mouseout(function(){
                    $(this).animate({width:120});
                 });
                 
                 /////////////////////////////////////////
                 
                  $('#img_2_sub').mouseover(function(){
                    $(this).animate({width:150});
                 });
                    
                 $('#img_2_sub').mouseout(function(){
                    $(this).animate({width:120});
                 });
                 
                 /////////////////////////////////////////
                 
                  $('#img_3_sub').mouseover(function(){
                    $(this).animate({width:150});
                 });
                    
                 $('#img_3_sub').mouseout(function(){
                    $(this).animate({width:120});
                 });
                 
                  /////////////////////////////////////////
                 
                  $('#img_4_sub').mouseover(function(){
                    $(this).animate({width:150});
                 });
                    
                 $('#img_4_sub').mouseout(function(){
                    $(this).animate({width:120});
                 });
                 
                  /////////////////////////////////////////
                 
                  $('#img_5_sub').mouseover(function(){
                    $(this).animate({width:150});
                 });
                    
                 $('#img_5_sub').mouseout(function(){
                    $(this).animate({width:120});
                 });
                 
                 //////////////////////////////////////////
                 
                 $('.PM').click(function(){
                   
                     $('.main_img').css({"background":"url(img_sub/PM_2.PNG)"})
                     
                     $('#img_1').attr('src', 'img_sub/PRIMARY.PNG')
                     
                     $('#img_2').attr('src', 'img_sub/PRIMARY_TEXT.PNG')
                     
                     $('#img_1').css({"left":"0px"})
                     
                     $('#img_2').css({"opacity":"0"})
                     
                       $('#img_1')
                   .animate({left:"50px"},
                           {duration:1000,queue:false})
                    .fadeTo("fast", 1, function(){
                })
                 
                 $('#img_2')
                  .animate({left:"50px"},
                           {duration:1000})
                    .fadeTo("fast", 1, function(){
                })
                     
                 $('#img_1_sub').attr('src', 'img_sub/PM_image1.jpg') 
                      $('#img_2_sub').attr('src', 'img_sub/PM_image2.jpg')   
                      $('#img_3_sub').attr('src', 'img_sub/PM_image3.jpg')   
                      $('#img_4_sub').attr('src', 'img_sub/PM_image4.jpg')   
                      $('#img_5_sub').attr('src', 'img_sub/PM_image5.jpg');
                 
                 });
                 
                 
                 
                 
                 
                 /////////////////////////////////////////////////////////////////
                 
                  
                 
                     $('.DD').click(function(){
                   
                     $('.main_img').css({"background":"url(img_sub/DD_2.PNG)"})
                     
                     $('#img_1').attr('src', 'img_sub/DYNAMIC_DUO.PNG')
                     
                     $('#img_2').attr('src', 'img_sub/DYNAMIC_DUO_Text.PNG')
                     
                     $('#img_1').css({"left":"0px"})
                     
                     $('#img_2').css({"opacity":"0"})
                     
                       $('#img_1')
                   .animate({left:"50px"},
                           {duration:1000,queue:false})
                    .fadeTo("fast", 1, function(){
                })
                 
                 $('#img_2')
                  .animate({left:"50px"},
                           {duration:1000})
                    .fadeTo("fast", 1, function(){
                })
                     
                $('#img_1_sub').attr('src', 'img_sub/DD_image1.jpg') 
                      $('#img_2_sub').attr('src', 'img_sub/DD_image2.jpg')   
                      $('#img_3_sub').attr('src', 'img_sub/DD_image3.jpg')   
                      $('#img_4_sub').attr('src', 'img_sub/DD_image4.jpg')   
                      $('#img_5_sub').attr('src', 'img_sub/DD_image5.jpg');
                 
                 });
                 
                 
                    $('.DD').mouseover(function(){
                         $(this).css('background','#333')
                         $(this).css('color','#fff');
                     });
                 
                     $('.DD').mouseout(function(){
                         $(this).css('background','#dfeaed')
                         $(this).css('color','#333');
                         
                         ;
                     });
                 
                 
                 
                    $('.PM').mouseover(function(){
                         $(this).css('background','#333')
                         $(this).css('color','#fff');
                     });
                 
                     $('.PM').mouseout(function(){
                         $(this).css('background','#dfeaed')
                         $(this).css('color','#333');
                         
                         ;
                     });
                 
                 ///////////////////////////끝///////////////////////////
                });
        
        
