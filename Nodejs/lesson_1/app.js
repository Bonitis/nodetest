

/**
*	Express App
*	@author Sean Rogers <smr04003@gmail.com>
**/

/** Require modules **/

var express = require("express");

/** Initialize Express app object **/

var app = express();

/** Variables **/

// Server will be browsed at http://localhost:3000

var root = __dirname
  ,	port = 3000;


/** Configure Express app **/

app.use( express.static( root + "/public"));

/** Create some Express routes **/

app.get( "/hello", function helloCallback ( req, res  ) {

	res.send( "Why, hello there!");

});

app.get("/someJSON", function someJSONCallback ( req, res ) {

	res.json({
		"one": {
			"so": "cool"
		},
		"two": "super cool",
		"three": ["love", "json", "and","JavaScript"]
	});
});

app.get( "/beginning", function beginningCallback (req, res) {

	res.send("<h1>This is just a beginning</h1><p>I love Node <3</p>" );

});
/** Start server on port 3000 **/

app.listen( port, function listenCallback () {
	console.log( "Express server is listening on port " + port );
	console.log( "To test, browse to http://localhost:" + port );	
});
