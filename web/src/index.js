const http = require('http');
const redis = require('redis');

var redisClient = redis.createClient('6379', 'redis');
const requestHandler = function(req, res, next) {
	console.log('[REQUEST]', req.url);
	redisClient.incr('counter', function(err, counter) {
		if(err) {
			console.error(err);
			next(err);
		}
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(JSON.stringify({ visitor: counter }));
		res.end();
	})
}

const server = http.createServer(requestHandler);

server.listen(3000, function() {
	console.log('Server listening in http://localhost:3000');
});