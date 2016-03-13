$(document).ready(function() {

  var bigImage = document.getElementById('image');

  $(document).keydown(function(e) {
    switch(e.which) {
      case 40: // down

        animateHTML('Trees');
        $(bigImage).addClass('trees');
        $(bigImage).removeClass('urban');

        // document.location.href = "/Users/izzymarkwick/code/task_three/urban/index.html";

      break;

      case 38: // up

        animateHTML('Urban');
        $(bigImage).addClass('urban');
        $(bigImage).removeClass( "trees" );   

        // document.location.href = "/Users/izzymarkwick/code/task_three/trees/index.html";
      
      break;

      default: return;
    }
    e.preventDefault();
  });
});

var animateHTML = function(copy) {

  var header = document.getElementById('banner-title');

  $(header).animate({'opacity': 0}, 400, function(){
    $(this).html(copy).animate({'opacity': 1}, 400);
  });
};

