'use strict';

var mongoose = require( 'mongoose' );
var Song = mongoose.model( 'Tracks' );
var results = {
	success: true,
	query: {
		sort: {},
		cond: {},
		pagination: {}
	},
	data: {}
};

var success = true;
var view = -1;
var lang = 'vi';
var week = 0;
var type = 'Karaoke';
var defaultLimit = 5;

exports.getTracks = function( req, res ) {
	// get params
	if ( parseInt( req.params.view ) >= 1 ) view = 1;
	if ( req.params.lang != '' ) lang = req.params.lang;
	if ( req.params.week >= 0 ) week = req.params.week;
	if ( parseInt( req.params.limit ) >= 0 ) defaultLimit = parseInt( req.params.limit );
	// find
	Song.find( {
		lang: lang,
		week: week
	}, function( err, song ) {
		if ( err )
			res.send( err );
		if ( err )
			success  = false;
		// results
		results = {
			success: success,
			query: {
				sort: {
					view: view
				},
				cond: {
					lang: lang,
					week: week,
					type: type
				},
				pagination: {
					limit: defaultLimit,
					skip: 0,
					page: 1,
					total: 0
				}
			},
			data: song
		};
		// output
		res.json( results );
	} ).limit( defaultLimit ).sort( { view: view } );
};