var express				= require( 'express' );
var app					= express();
var port				= process.env.PORT || 3000;
var mongoose			= require( 'mongoose' );
var Song				= require( './app/models/karaoke' );

var mongodbHost			= 'ds129146.mlab.com';
var mongodbPort			= '29146';
var authenticate		= 'duongnv:duongnv1@';
var mongodbDatabase		= 'tops';

var urlMongo			= 'mongodb://' + authenticate + mongodbHost + ':' + mongodbPort + '/' + mongodbDatabase;

var bodyParser			= require( 'body-parser' );

mongoose.connect( urlMongo, {
	useMongoClient: true
} );

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

var routes				= require( './app/routes/karaoke' );
routes( app );

app.listen( port );

console.log( 'Running' );