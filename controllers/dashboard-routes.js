const router = require('express').Router();
const { Post, Comments, User } = require('../models');
const withAuth = require('../utils/auth');



// router.get('/', withAuth, (req, res) => {
//   console.log(req.session);
//   console.log('======================');

//   Post.findAll({
//     where: {
//       userId: req.session.userId
//     },
//     attributes: [
//       'id',
//       'title',
//       'createdAt'
//     ],
//     include: [{
//       model: Comments,
//       attributes: ['id', 'commentText', 'postId', 'userId', 'createdAt'],
//       include: {
//         model: User,
//         attributes: ['username']
//       }
//     },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       const posts = dbPostData.map((post) => post.get({ plain: true }));
//       res.render('all-posts-main', {
//         layout:"dashboard",
//         posts,
//         loggedIn: true
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


// router.get('/new', withAuth, (req, res) => {
//   res.render('new-post', {
//     layout: "dashboard",
//     loggedIn: true
//   });
// });


// router.get('/edit/:id', withAuth, (req, res) => {
//   Post.findByPk({
//     where: {
//       id: req.params.id
//     },
//     attributes: [
//       'id',
//       'title',
//       'body',
//       'createAt'
//     ],
//     include: [{
//       model: Comments,
//       attributes: ['id', 'commentText', 'postId', 'userId', 'createdAt'],
//       include: {
//         model: User,
//         attributes: ['username']
//       }
//     },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (dbPostData) {
//         const post = dbPostData.get({ plain: true });

//         res.render('edit-post', {
//           layout: "dashboard",
//           post,
//           loggedIn: true
//         });
//       }
//       else {
//         res.status(404).json({
//           message: 'No post found with this id'
//         });
//       }      
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//   });
// });

module.exports = router;