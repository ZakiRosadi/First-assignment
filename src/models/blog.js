'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  blog.init({
    projectname: DataTypes.STRING,
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE,
    description: DataTypes.STRING,
    technologies: DataTypes.array(DataTypes.STRING),
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'blog',
    // timestamps: true,
    // createdAt: true,
    // updatedAt: 'updateTimestamp'
  });
  return blog;
};