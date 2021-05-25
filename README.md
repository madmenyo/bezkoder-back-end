# bezkoder-back-end
The Back-End of the [BezKoder MEAN stack tutorial](https://bezkoder.com/node-js-mongodb-auth-jwt/).

[I also did the front end for it.](https://github.com/madmenyo/bezkoder-front-end)

## Running it

Just run it using `node server.js`, it runs port 8001 and the front end is looking for that. It does need a MongoDB database host URL in the db.config.js, get a free one on mongoDB atlas and paste the connectiong string there. The PORT and DB objects in that file are not being used.
