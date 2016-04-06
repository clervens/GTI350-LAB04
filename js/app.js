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
    if($(".input-tous").length)
        $(".input-tous").typeahead({source: $.merge($.merge(model.nom_joueurs, model.etats), $.merge(model.equipes, model.series))});
});


function loadLayout() {
    $.get('/common/nav.html', function (nav) {
        $('body').prepend(nav);
    });
    $.get('/common/footer.html', function (nav) {
        $('body').append(nav);
    });
}

jQuery.extend({

  getQueryParameters : function(str) {
	  return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
  }

});

var model = {
    "etats": ["Impécable","Légèrement abîmée","Abîmée", "Protégée"],
    "nom_joueurs": ["Sidney Crosby", "Martin Brodeur", "P.K. Subban"],
    "equipes": ["Anaheim Ducks","Arizona Coyotes","Boston Bruins","Buffalo Sabres","Calgary Flames","Carolina Hurricanes","Chicago Blackhawks","Colorado Avalanche","Columbus Blue Jackets","Dallas Stars","Detroit Red Wings","Edmonton Oilers","Florida Panthers","Los Angeles Kings","Minnesota Wild","Montreal Canadiens","Nashville Predators","New Jersey Devils","New York Islanders","New York Rangers","Ottawa Senators","Philadelphia Flyers","Pittsburgh Penguins","San Jose Sharks","St. Louis Blues","Tampa Bay Lightning","Toronto Maple Leafs","Vancouver Canucks","Washington Capitals","Winnipeg Jets"],
    "series": ["O-Pee-Chee", "Upper Deck", "SPx", "Ultra", "Black Diamond"] 
}

$.fn.randomize = function(childElem) {
  return this.each(function() {
      var $this = $(this);
      var elems = $this.children(childElem);

      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

      $this.detach(childElem);  

      for(var i=0; i < elems.length; i++)
        $this.append(elems[i]);      

  });    
}


