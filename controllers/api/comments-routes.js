const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

//GET
router.get('/', (req, res) => {
  Comments.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//POST
router.post('/', withAuth, (req, res) => {
  Comments.create({ ...req.body, userId: req.session.userId })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});


//DELETE
router.delete('/:id', withAuth, (req, res) => {
  Comments.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with that id' });
        return;
      }

      res.json(dbCommentData);
    })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;