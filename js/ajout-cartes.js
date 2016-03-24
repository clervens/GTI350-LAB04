$(function () {
    // Remplissage du dropdown d'année
    var dropDown = $('#dropDownAnnee');

    for (var i = 2016; i != 1900; i--) {
        dropDown.append('<option value="' + i + '">' + i + '</option>');
    }
    
    var dropDownEtat = $('#dropDownEtat');
    
    model.etats.forEach(function (etat) {
        dropDownEtat.append('<option value="' + etat + '">' + etat + '</option>');
    });

    $('.succes-ajout-cartes').hide();

    $('form').submit(function (e) {
        e.preventDefault();
        $('.succes-ajout-cartes').show();
        return false;
    });
});