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

var model = {
    "etats": ["Protégée","Impécable","Légèrement abîmée","Abîmée","Au bord du gouffre"]
    
}
