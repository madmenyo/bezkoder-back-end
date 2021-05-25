const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup mongoose DB
const db = require("./app/models");
const dbConfig = require('./app/config/db.config');
const Role = db.role;

db.mongoose
  //.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
  .connect(dbConfig.HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then( () => {
    console.log("Successfully coonnected to mongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connections error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to toles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  })
}
  
  

//simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the login tutorial back-end."});
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// Set port and start server
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}.`)
});