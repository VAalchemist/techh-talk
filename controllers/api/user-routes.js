const router = require('express').Router();
const req = require('express/lib/request');
const { User } = require('../../models');



// Create a user
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Get user by id
router.get('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found this account' });
        return;
      }
      
      const validPassword = dbUserData.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(404).json({ message: 'Not valid password' });
        return;
      }

      req.session.save(() => {
        req.session.userId = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: 'You logged in' });
      });
    });  
});


//Logout

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).json({ message: 'You logged out' }).end();
    });
  }
  else {
    res.status(400).end();

  }
});

//DELETE user
router.delete('/user/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;