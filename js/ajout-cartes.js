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

function removeRow() {
    $(this).closest('tr').remove();
}

function initialiserRowCarte(row) {
    // Remplissage du dropdown d'année
    var dropDownAnnee = row.find('.anneeInput');

    for (var i = 2016; i != 1900; i--) {
        dropDownAnnee.append('<option value="' + i + '">' + i + '</option>');
    }
    
    // Remplissage du dropdown d'état
    var dropDownEtat = row.find('.etatInput');
    
    model.etats.forEach(function (etat) {
        dropDownEtat.append('<option value="' + etat + '">' + etat + '</option>');
    });
    
    row.find('.nameInput').val($('#lblNom').val());
    row.find('.noInput').val($('#lblNo').val());
    row.find('.equipeInput').val($('#lblEquipe').val());
    dropDownAnnee.val($('#dropDownAnnee').val());
    row.find('.serieInput').val($('#lblSerie').val());
    dropDownEtat.val($('#dropDownEtat').val());
    row.find('.quantityInput').val($('#lblQuantity').val());
    // #lblNo, #lblEquipe, #dropDownAnnee, #lblSerie, #dropDownEtat, #lblQuantity
    
    // Autocomplete
    $('.input-nom').typeahead({source: model.nom_joueurs});
    $('.input-equipe').typeahead({source: model.equipes});
    $('.input-serie').typeahead({source: model.series});
    
    $('.btn-image-modal').click(function() {
        $('.modal').modal('show');
    });
}

$(function () {
    $('.succes-ajout-cartes').hide();

    $('form').submit(function (e) {
        e.preventDefault();
        $('.succes-ajout-cartes').show();
        $("html, body").animate({ scrollTop: 0 }, "fast");
        return false;
    });
    
    // création de la table d'ajouts
    var tableRow = `<tr> 
			<td> 
				<input id="lblNom1" name="lblNom" type="text" placeholder="" class="form-control input-md nameInput input-nom" data-provide="typeahead" autocomplete="off" required="">
			</td>
			<td>
				<input id="lblNo" name="lblNo" type="number" value="99" min="1" max="99" placeholder="" class="form-control noInput" required="">
			</td>
			<td>
				<input id="lblEquipe1" name="lblNom" type="text" placeholder="" class="form-control input-md equipeInput input-equipe" data-provide="typeahead" autocomplete="off" required="">
			</td>
			<td>
                <select name="dropDownAnnee" class="form-control dropDownAnnee anneeInput"></select>
			</td>
            <td>
				<input id="lblSerie1" name="lblSerie" type="text" placeholder="" class="form-control input-md serieInput input-serie" data-provide="typeahead" autocomplete="off" required="">
			</td>
			<td>
                <select name="dropDownEtat" class="form-control dropDownEtat etatInput"></select>
            </td>
			<td>
				<input id="lblQuantity" name="lblQuantity" type="number" value="1" min="1" max="99" class="form-control quantityInput">
			</td>
            <td>
                <button type="button" class="btn btn-default btn-image-modal" aria-label="Left Align">...</button>
            </td>
            <td>
                <button type="button" class="btn btn-default btn-retirer-carte" aria-label="Left Align">
                  <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
                </button>
            </td>
            
		</tr>`;
    
    var bodyCartableCarte = $('#bodyTableCartes');
    
    for (var i = 0; i != 2; i++) {
        bodyCartableCarte.append(tableRow);
    }
    
    fillDropdowns();
    
    $('.btn-ajout-carte').click(function() {
        bodyCartableCarte.append(tableRow);
        
        $('.btn-retirer-carte').click(function() {
            $(this).closest('tr').remove();
        });
        
        initialiserRowCarte(bodyCartableCarte.find('tr:last-child'));
    });
    
    $('.btn-retirer-carte').click(function() {
        $(this).closest('tr').remove();
    });
     
    
    // Binding des attributs communs avec les cartes du tableau
    $('#lblNom').on('input change paste', function (e) {
        var inputValue = $(this).val();
        $('.nameInput').val(inputValue);
    });
    
    $('#lblNo').on('input change paste', function (e) {
        var inputValue = $(this).val();
        $('.noInput').val(inputValue);
    });
    
    $('#lblEquipe').on('input change paste', function (e) {
        var inputValue = $(this).val();
        $('.equipeInput').val(inputValue);
    });
    
    $('#dropDownAnnee').on('input change paste', function (e) {
        var inputValue = $(this).val();
        $('.anneeInput').val(inputValue);
    });
    
    $('#lblSerie').on('input change paste', function (e) {
        var inputValue = $(this).val();
        $('.serieInput').val(inputValue);
    });
    
    $('#dropDownEtat').on('input change paste', function (e) {
        var inputValue = $(this).val();
        $('.etatInput').val(inputValue);
    });
    
    $('#lblQuantity').on('input change paste', function (e) {
        var inputValue = $(this).val();
        $('.quantityInput').val(inputValue);
    });
    
    
    // Autocomplete
    $('.input-nom').typeahead({source: model.nom_joueurs});
    $('.input-equipe').typeahead({source: model.equipes});
    $('.input-serie').typeahead({source: model.series});
    
    $('.modal').modal({show: false});
    
    $('.btn-image-modal').click(function() {
        $('.modal').modal('show');
    });
    
});