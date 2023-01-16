$(window).bind("load resize submit",function(e){
    $('form').each(function() {
      var formHeight = $(this).height();
      $(this).siblings('.w-form-done').css({'min-height': formHeight});
    });
  });