const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Comments extends Model {}

//create fields(columns) for Comment model
Comments.init({
  body: {
    type: DataTypes.STRING,
    allowNull: false
  }  
},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
});



module.exports = Comments;