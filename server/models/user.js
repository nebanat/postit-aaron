export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        // validates that the username doesnt already exist//
        notEmpty: {
          args: true,
          msg: 'username cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      // validations for the email field defined//
      validate: {
        // validates that the email doesnt already exist//
        isEmail: {
          args: true,
          msg: 'A valid email is required',
        },
        notEmpty: {
          args: true,
          msg: 'Email cannot be empty'
        }

      }

    },
    resetPassToken: {
      type: DataTypes.STRING,
      unique: true
    },
    expirePassToken: {
      type: DataTypes.STRING,
      unique: false
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        min: {
          args: 5,
          msg: 'Password must be at least 5 characters'
        },
        notEmpty: {
          args: true,
          msg: 'Password cannot be empty'
        }

      }
    }
  });
  User.associate = function (models) {
    // relationship between users and groups//
    User.belongsToMany(models.Group, { through: 'UsersGroups', foreignKey: 'userId' });

    // relationship between user and messages//
    // User.hasMany(models.Message, { foreignKey: 'userId' });
  };
  return User;
};

