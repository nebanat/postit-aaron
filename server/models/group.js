
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Group name cannot be empty'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        max: {
          args: 3000,
          msg: 'Group description cannot exceed 3000 characters'
        }
      }
    }
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
        // relationship between groups and users//
        Group.belongsToMany(models.User, { through: 'UsersGroups', foreignKey: 'groupId' });
      }
    }
  });
  return Group;
};
