import mongoose from 'mongoose';
import rawData from './fixture/raw-data';
import Menu from '../models/Menu';
import Session from '../models/Session';
import User from '../models/User';

const modelsMap = {
  Menu,
  Session,
  User
};

let docs = Object.keys(rawData);

mongoose.connect('mongodb://localhost/todos');

Object.keys(rawData).forEach(v => {
  modelsMap[v].remove(()=> {
    modelsMap[v].create(rawData[v], ()=> {
      docs = docs.filter(doc => doc !== v);
      console.log(`The data of ${v} created`);
      if(docs.length === 0) {
        console.log(`All data refreshed`);
        process.exit(0);
      }
    });
  });
});

