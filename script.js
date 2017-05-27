

var current = null;
$('.images').click(function(){
  // targeting last
  if(current !== null){
    $('.content li').eq(current).css({"width": "20%"});
    $('.content li').eq(current).find('.slice').css({"display": "block"});
    $('.content li').eq(current).find('.full-img').css({"display": "none"});
  }
  console.log($('.content').eq(current));

  if(current === $(this).parent().index()) {
    $('.content li').eq(current).css({"width": "20%"});
    $('.content li').eq(current).find('.slice').css({"display": "block"});
    $('.content li').eq(current).find('.full-img').css({"display": "none"});
  } else {
    current = $(this).parent().index();
    $(this).parent().css({"width": "50%"});
    $(this).find('.slice').css({"display": "none"});
    $(this).find('.full-img').css({"display": "block"});
  }

  
});