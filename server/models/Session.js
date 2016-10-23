import mongoose from 'mongoose';

const Session = mongoose.model('Session',{
  username:String,
  password:String,
  randomId:String
});

export default Session;