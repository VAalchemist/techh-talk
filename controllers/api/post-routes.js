const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


//POST
router.post('/', withAuth, (req, res) => {
  const body = req.body;
  console.log(req.session.userId);

  Post.create({...body, userId: req.session.userId})
    .then(dbPostData => {
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//PUT
router.put('/:id', withAuth, (req, res) => {
  Post.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(editPost => {
      if (editPost > 0) {
        res.status(200).end();
      }
      else {
        res.status(404).end();
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//DELETE
router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(removePost => {
      if (removePost > 0) {
        res.status(200).end();
      }
      else {
        res.status(404).end();
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});






module.exports = router;