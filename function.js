2
3
4
5
6
7
8
9
10
// Code By Webdevtrick ( https://webdevtrick.com )
$(document).ready(function(){
 $(".scroll").click(function(event){
 event.preventDefault();
 $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
 $('.navbar-default a').removeClass('selected');
 $(this).addClass('selected');
  });

});
