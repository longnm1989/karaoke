'use strict';

module.exports = function( app ) {
	var kara = require( '../controllers/karaoke' );
	// routes
	app.route( '/song/:view/:lang/:week/:type/:limit' ).get( kara.getTracks );
};