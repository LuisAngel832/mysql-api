'use strict';
import pkg from 'sequelize';
const { Model, DataTypes } = pkg;

export default (sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    comments: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};