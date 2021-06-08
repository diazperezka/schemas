import { Sequelize } from "sequelize";
declare const UserModel: (sequelize: Sequelize) => import("sequelize").ModelCtor<import("sequelize").Model<any, any>>;
export { UserModel };
