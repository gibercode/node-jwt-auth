import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true},
  identificationDocument: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export default model('User', UserSchema, 'user');
