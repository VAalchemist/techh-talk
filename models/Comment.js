const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Comment extends Model {

}

//create fields(columns) for Comment model
Comment.init();


















module.exports = Comment;