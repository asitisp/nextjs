import mongoose, { Schema, Document } from "mongoose";


export type UserRole = "user" | "admin" | "moderator";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: UserRole; // ✅ narrow type here
}

const UserSchema = new Schema<IUser>({
  username:{ type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin", "moderator"],
    default: "user",
  },
});
export default mongoose.models.User || mongoose.model("User", UserSchema);
