import { UserModel } from "./UserModel";
import { PostModel } from "./PostModel";

PostModel.belongsTo(UserModel, {
  foreignKey: 'user_id',
});

UserModel.hasMany(PostModel, {
  foreignKey: 'user_id',
})

export { PostModel, UserModel }