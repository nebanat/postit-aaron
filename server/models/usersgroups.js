module.exports = (sequelize, DataTypes) => {
  const UsersGroups = sequelize.define('UsersGroups', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return UsersGroups;
};
