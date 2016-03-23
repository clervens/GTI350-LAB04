$(function() {

  loadLayout();
  
});


function loadLayout() {
    $.get('common/nav.html', function (nav) {
        $('body').prepend(nav);
    });
}

