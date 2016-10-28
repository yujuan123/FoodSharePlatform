import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import regRouters from './server/routers';
import multer from 'multer';
import path from 'path';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve('public/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({storage: storage});

const app = express();

// mongoose.connect('mongodb://localhost/todos');

mongoose.connect('mongodb://jiamin:dx64192@ds031617.mlab.com:31617/peng');

app.post('/profile', upload.single('avatar'), (req, res)=> {
  res.send({
    err: null,
    filePath: 'uploads/' + path.basename(req.file.path)
  });

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'));

regRouters(app);

app.use('*', (req, res)=> {
  res.sendFile(path.resolve('./public/index.html'));
});

app.listen(process.env.PORT, function() {
  console.log('server started at http://localhost:3000'); // eslint-disable-line no-console
});

export default app;