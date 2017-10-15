export default (sequelize, DataTypes) => {
  const UsersGroups = sequelize.define('UsersGroups', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return UsersGroups;
};

