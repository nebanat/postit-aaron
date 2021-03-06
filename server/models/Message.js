export default (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Message body cannot be empty'
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'User has to create a message'
        }
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username of the author is required'
        }
      }
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'A message has to be posted to a group'
        }
      }
    },
    priority: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['normal', 'urgent', 'critical']
    },

  });
  Message.associate = function (models) {
    Message.belongsTo(models.User, { foreignKey: 'userId', as: 'message' });

    Message.belongsTo(models.Group, { foreignKey: 'groupId', as: 'user' });
  };
  return Message;
};
