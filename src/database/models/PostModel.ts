import { DataTypes } from "sequelize"
import { db } from "../db"

export const PostModel = db.define("post", {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  contentText:{
    type: DataTypes.STRING
  },
}, {
  tableName: "post"
});