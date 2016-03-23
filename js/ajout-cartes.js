$(function () {
   // Remplissage du dropdown d'année
   var dropDown = $('#dropDownAnnee');
    
    for (var i = 2016; i != 1900; i--) {
        dropDown.append('<option value="'+ i +'">'+ i +'</option>');
    }
});