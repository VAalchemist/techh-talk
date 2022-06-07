const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}


//create fields(columns) for Post model
Post.init({
  title: DataTypes.STRING,
  body: DataTypes.STRING
},
  {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'Post'
});



module.exports = Post;