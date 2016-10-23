var express = require('express'),
	restful = require('node-restful'),
	mongoose = restful.mongoose;

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var jsonParser = bodyParser.json();

// using json parser
app.use(jsonParser);

// using method override of the request
app.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}))
 
mongoose.connect('mongodb://localhost/simpleapi');

var UserSchema = mongoose.Schema({
	handlename: String,
	tweet: String,
	followers: Number
});

var TUsers = restful.model('tusers', UserSchema);

TUsers.methods(['get', 'put', 'post', 'delete']);

TUsers.register(app, '/api/tusers')


app.listen(3000);
console.log('Started the server...')