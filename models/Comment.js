const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Comment extends Model {}

//create fields(columns) for Comment model
Comment.init({
  body: {
    type: DataTypes.STRING,
    allowNull: false
  }  
},
  {
  sequelize,
});



module.exports = Comment;