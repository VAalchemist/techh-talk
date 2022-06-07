//imports
const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

//associations

User.hasMany(Post, {
  foreignKey: 'userId',
});


Post.belongsTo(User, {
  foreignKey: 'userId',
});

Post.hasMany(Comments, {
  foreignKey: '`postId',
});


module.exports = {User, Post, Comments};