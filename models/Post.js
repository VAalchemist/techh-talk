const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class Post extends Model {

}


//create fields(columns) for Post model
Post.init();















module.exports = Post;