import mongoose from 'mongoose';

const User = mongoose.model('User',{
  username:String,
  password:String,
  phone:String,
  regtime:String
});

export default User;  