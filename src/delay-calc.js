$(document).ready(function() {

    $('#getResults').click(function() {
        $('#error-message').empty();
        var bpm = $('#bpm').val();
        if (bpm !== '') {
            var tpl = _.template( $('#delayTimeTpl').html() );
            $('#results').html( tpl({bpm: bpm}) );  
            $('.twitter-share-button').show();
            $('.github-source-link').show();
        } else {
            $('#error-message').html('enter a bpm');
        }
          
    });

});
