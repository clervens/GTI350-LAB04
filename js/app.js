var app
if (app = localStorage.getItem('autosave')) {
  app = JSON.parse(app);
} else {
  app = { values: [] };
}
$(function() {

  setInterval(function() {
    localStorage.setItem('autosave', JSON.stringify(app));
  }, 1000);

  loadLayout();
});


function loadLayout() {
    $.get('/common/nav.html', function (nav) {
        $('body').prepend(nav);
    });
}

jQuery.extend({

  getQueryParameters : function(str) {
	  return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
  }

});

var model = {
    "etats": ["Protégée","Impécable","Légèrement abîmée","Abîmée","Au bord du gouffre"]

}
