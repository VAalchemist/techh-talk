const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.DB_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
    })
};

app.use(session(sess));

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });


//views
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //true?
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`We out here on port ${PORT}!`));
});