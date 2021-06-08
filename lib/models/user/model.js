"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var sequelize_1 = require("sequelize");
var UserModel = function (sequelize) {
    return sequelize.define("User", {
        firstName: {
            type: sequelize_1.DataTypes.STRING,
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
            unique: true,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
        },
        token: {
            type: sequelize_1.DataTypes.UUID,
        },
    });
};
exports.UserModel = UserModel;
