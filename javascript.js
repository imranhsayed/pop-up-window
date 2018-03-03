( function ( $ ) {
	"use strict";

	var element = document.querySelector( '.element' ),
		popUpEl = document.getElementById( 'my-popup' );

	element.addEventListener( 'click', function () {
		popUpEl.classList.toggle( 'show' );
		var shadowDiv = $( '.shadow-div' ),
			isShadowDiv = $( 'body' ).find( 'div' ).hasClass( 'shadow-div' );
		if ( isShadowDiv ) {
			shadowDiv.remove();
		} else {
			$( '<div class="shadow-div" ></div>' ).insertBefore( element );
		}
		$( '.shadow-div' ).on( 'click', removeShadowDiv );

		/**
		 * Removes the shadow div and the pop up div.
		 * @param event
		 */
		function removeShadowDiv( event ) {
			event.target.remove();
			popUpEl.classList.toggle( 'show' );
		}
	} );



})( jQuery );