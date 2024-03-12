import { User } from "@/models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();
  const pass = body.password;
  const email = body.email;

  mongoose.connect(process.env.MONGO_URL);

  const user = await User.findOne({ email });
  if (user && bcrypt.compareSync(pass, user.password)) {
    return Response.json(user);
  } else {
    return null;
  }
}
