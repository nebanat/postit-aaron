module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        // validates that the username doesnt already exist//
        notEmpty: {
          args: true,
          msg: 'username is required'
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
      unique: false
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
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
        // relationship between users and groups//
        User.belongsToMany(models.Group, { through: 'UsersGroups', foreignKey: 'userId' });
      }
    }
  });
  return User;
};
