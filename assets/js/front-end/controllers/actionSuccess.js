define([], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			this.listenTo( nfRadio.channel( 'forms' ), 'submit:response', this.actionSubmit );
		},

		actionSubmit: function( response ) {
			if ( _.size( response.errors ) == 0 && 'undefined' != typeof response.data.actions ) {
				if ( 'undefined' != typeof response.data.actions.success_message && '' != response.data.actions.success_message ) {
					var form_id = response.data.form_id;
					jQuery( '#nf-form-' + form_id + '-cont .nf-response-msg' ).html( response.data.actions.success_message );

					jQuery('html, body').animate({
						scrollTop: ( jQuery( '#nf-form-' + form_id + '-cont .nf-response-msg' ).offset().top - 50 )
					}, 0 );
				}
			}
		}

	});

	return controller;
} );