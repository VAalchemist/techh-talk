//imports
const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

//associations

// User.hasMany(Post, {
//   foreignKey: 'userId',
// });

// User.hasMany(Comments, {
//   foreignKey: 'userId',
// });


// Post.belongsTo(User, {
//   foreignKey: 'userId',
// });

// Post.hasMany(Comments, {
//   foreignKey: '`postId',
// });

// Comments.belongsTo(User, {
//   foreignKey: 'userId',
// });

// Comments.belongsTo(Post, {
//   foreignKey: 'postId',
// });

module.exports = {User, Post, Comments};