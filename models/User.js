const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//create user model
class User extends Model {
  // method to run on instance to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);

  }
}



//create fields(columns) for user model
User.init(
  // TABLE COLUMN DEFINITIONS GO HERE
  {
  id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true

  },

  username: {
      type: DataTypes.STRING,
      allowNull: false


  },

  password: {
      type: DataTypes.STRING,
      allowNull: false,
    validate: {
      len: [6]
}
  }
},
  
  {
  // TABLE CONFIGURATION OPTIONS GO HERE
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
      },
      
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
      }
    },
    
  // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'user'

});

module.exports = User;
