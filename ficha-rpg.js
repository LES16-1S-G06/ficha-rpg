var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api');

var fichaRPG = module.exports = express.createServer();

// Configuration
fichaRPG.set('views', __dirname + '/views');
fichaRPG.set('view engine', 'jade');
fichaRPG.set('view options', { layout: false });

fichaRPG.use(express.bodyParser());
fichaRPG.use(express.methodOverride());
fichaRPG.use(express.static(__dirname + '/public'));
fichaRPG.use(fichaRPG.router);

// Routes
fichaRPG.get('/', routes.index);
fichaRPG.get('/partials/:name', routes.partials);

// JSON API
fichaRPG.get('/api/racas', api.racas);
fichaRPG.get('/api/classes', api.classes);
fichaRPG.get('/api/personagem/:id', api.personagem);
fichaRPG.post('/api/personagem', api.inserirPersonagem);

// Redirect all others to the index
fichaRPG.get('*', routes.index);

var server = fichaRPG.listen(3000);
console.log('Express server listening on port %d.', server.address().port);
