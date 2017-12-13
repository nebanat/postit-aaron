import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'username cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
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
      allowNull: false,
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

  User.beforeCreate((user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(8), null
    );
  });

  User.associate = function (models) {
    // relationship between users and groups//
    User.belongsToMany(
      models.Group,
      { through: 'UsersGroups', foreignKey: 'userId' }
    );
  };

  return User;
};

