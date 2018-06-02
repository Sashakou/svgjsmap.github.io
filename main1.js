            // obl
$(function() {
    $('.map_view_ua > .link').on('click', function(e) {
        e.preventDefault();
        $('.click').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});
$(function() {
    $('.map_obl_inner > .link2').on('click', function(e) {
        e.preventDefault();
        $('.click2').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});
$('.link').click(function() {
      $('body,html').animate({scrollTop:750},1000);
    });
$('.link2').click(function() {
      $('body,html').animate({scrollTop:1450},1000);
    });          
				//region AZ$
$('.part_3').hover (
	function() {
		$('.window').html($(this).attr('window-data'));
		$('.window').fadeIn();
	},
	function(){
		$('.window').fadeOut(50);
	}
);				

// скрол 2

 $(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
  $('#top').fadeIn();
    } else {
  $('#top').fadeOut();
    }
  });
    $('#top').click(function() {
    $('body,html').animate({scrollTop:0},700);
  });
  });
//пролоадер
jQuery(document).ready(function($) {
  $(window).load(function() {
    setTimeout(function() {
      $('.preloader').fadeOut('slow', function() {});
    }, 1000);
  });
});
