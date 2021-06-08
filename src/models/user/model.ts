import { DataTypes, Sequelize } from "sequelize";

const UserModel = (sequelize: Sequelize) => {
  return sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.UUID,
    },
  });
};

export { UserModel };
