const router = require("express").Router();
const { Post, User, Comments } = require("../models");

//GET all posts
// router.get("/", (req, res) => {
//   Post.findAll({
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
//     .then((dbPostData) => {
//       const posts = dbPostData.map((post) => post.get({ plain: true }));

//       res.render("all-posts", {
//         posts,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

//GET single post
// router.get("/post/:id", (req, res) => { 
//   Post.findByPk(req.params.id, {
//     include: [
//       User,
//       {
//         model: Comments,
//         include: [User]
//       },
//     ],
//   })
//     .then((dbPostData) => {
//       if (dbPostData) {
//         const post = dbPostData.get({ plain: true });

//         res.render("single-post", { post });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

// router.get("/login", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }

//   res.render("login");
// });

// router.get("/signup", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }

//   res.render("signup");
// });

module.exports = router;