'use strict';

var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var SongSchema = new Schema( {
	author: String,
	duration: String,
	id: String,
	lang: String,
	thumbnail_uri: String,
	title: String,
	view: Number,
	week: Number
} );

module.exports = mongoose.model( 'Tracks', SongSchema );