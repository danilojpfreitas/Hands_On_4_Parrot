import { DataTypes } from "sequelize"
import { db } from "../db"

export const UserModel = db.define("user", {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  apartment:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  password:{
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: "user"
});