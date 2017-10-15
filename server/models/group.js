export default (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
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

  });
  Group.associate = (models) => {
    // relationship between groups and users//
    Group.belongsToMany(models.User, { through: 'UsersGroups', foreignKey: 'groupId' });

    // relationship betweeb group and messages//
    // Group.hasMany(models.Message, { foreignKey: 'userId', as: 'messages' });
  };
  return Group;
};
