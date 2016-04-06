function fillDropdowns() {
    // Remplissage du dropdown d'année
    var dropDownAnnee = $('.dropDownAnnee');

    for (var i = 2016; i != 1900; i--) {
        dropDownAnnee.append('<option value="' + i + '">' + i + '</option>');
    }
    
    // Remplissage du dropdown d'état
    var dropDownEtat = $('.dropDownEtat');
    
    model.etats.forEach(function (etat) {
        dropDownEtat.append('<option value="' + etat + '">' + etat + '</option>');
    });
}

$(function () {
    fillDropdowns();
    
    // Autocomplete
    $('.input-nom').typeahead({source: model.nom_joueurs});
    $('.input-equipe').typeahead({source: model.equipes});
    $('.input-serie').typeahead({source: model.series});
    
    $('.modal').modal({show: false});
    
    $('#btnInsererResultats').click(function() {
        $('.modal-succes-insertion').modal('show');
        $('.table-resultats').find('.glyphicon').removeClass('glyphicon-plus btn').addClass('glyphicon-ok');
        $(this).prop("disabled",true);
        $('#lblNbCartesCartable').text('4');
    });
    
    $('.btn-cartes-insereres').click(function() {
        $('.modal-cartes-inserees').modal('show');
    });
    
    $('form').submit(function (e) {
        e.preventDefault();
        $('.succes-ajout-cartable').show();
        $("html, body").animate({ scrollTop: 0 }, "fast");
        return false;
    });
    
    
});