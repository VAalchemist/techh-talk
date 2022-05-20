const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config.connection");
const SequelizeStore = require('connect-session-sequelize');

const shh = {
  secret: 'Super duper secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(shh));

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ forcer: false }).then(() => {
  app.listen(PORT, () => console.log('We out here on PORT 3001!'));
});