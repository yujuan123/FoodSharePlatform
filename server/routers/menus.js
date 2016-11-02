import express from 'express';
import uuid from 'node-uuid';
var cookieParser = require('cookie-parser');

import Menu from '../models/Menu';
import Session from '../models/Session';
import User from '../models/User';
const router = express.Router();

//请注意 ：
router.use(cookieParser());

//确认用户身份的合法性
router.get('/verifyUserIdentity', (req, res)=> {
  if (req.cookies.user) {
    Session.findOne({randomId: req.cookies.user}, (err, doc)=> {
      if (err) {
        res.status(403).send('');
      }
      if (doc) {
        res.status(200).send(doc.username);//此处是个字符串 res.text()
      }
    })
  } else {
    res.status(403).send('');
  }
});

router.get('/verifyUserUploadIdentity', (req, res)=> {
  if (req.cookies.user) {
    Session.findOne({randomId: req.cookies.user}, (err, doc)=> {
      if (err) {
        res.status(500).send('数据库出错!');
      }
      if (doc && !err) {
        res.status(200).send(doc.username);
      }
    })
  } else {
    res.status(403).send('');
  }

});
//返回所有图片并按更新排序

router.get('/', (req, res)=> {
  Menu.find({}).sort({_id: -1}).exec(function (err, data) {
    res.send(data);
  })
});

router.get('/homePage', (req, res) => {
  Menu.find({}).sort({_id: -1}).limit(3).exec(function (err, data) {
    res.send(data);
  });
});

//注册
router.post('/checkRegister', (req, res)=> {//I Think req
  User.findOne({username: req.body.username}, (err, doc)=> {
    if (doc && (!err)) {
      res.send("该用户已存在");
    }
    if(!doc&&(!err)){
      //保存用户注册信息到用户表
      new User({
        username:req.body.username,
        password:req.body.password,
        regtime:req.body.regtime
      }).save((err,doc)=>{
        if(doc&&!err){
          res.send("注册成功");//I Think 注册成功后直接调转到 登录页面
        }
        if(err){
          res.send("注册失败");
        }
      })
    }
    
  })
});

//登录时
router.post('/checkLogin', (req, res)=> {
  User.findOne({username: req.body.username}, (err, doc)=> {
    console.log("发来的数据" + req.body.username);
    if (err) {
      console.log("出错了");
      res.status(501).send({err: '出错了'});
    }
    if (!doc) {

      console.log("找到的数据" + doc);
      console.log("该用户不存在");
      res.status(500).send({err: "该用户不存在"});
    }
    else {
      if (req.body.password === doc.password) {
        console.log("都正确");
        var randomId = uuid.v4();
        new Session({
          username: req.body.username,
          password: req.body.password,
          randomId: randomId
        }).save((err, doc)=> {
          //有了 A UUID is a 16-octet (128-bit) number，就该设置 cookie
          //请注意：
          res.cookie('user', randomId, {path: '/'});
          //个人中心页面要 usename
          res.status(200).send({data: doc.username});
        })
      } else {
        res.status(500).send({err: "输入密码有误"});
      }
    }
  })
});

//上传页面发送所有数据
router.post('/', (req, res)=> {
  new Menu(req.body).save((err)=> {
    if (err) {
      res.status(404).send('fail');
    } else {
      res.status(200).send('success');
    }
  });
});


//根据id 返回一条数据
router.get('/:id', (req, res)=> {
  Menu.findOne({_id: req.params.id}, (err, doc)=> {
    res.status(200).send(doc);
  })
});

router.get('/userWorks/:username', (req, res)=> {
  Menu.find({username: req.params.username}, (err, doc)=> {
    if (err) {
      res.status(501).send("出错了");
    }
    if (doc && (!err)) {
      res.status(200).send(doc);
    }
  })
});
//根据 username 返回一条数据
router.get('/userCenter/:username', (req, res)=> {
  User.findOne({username: req.params.username}, (err, doc)=> {
    console.log(req.params.username);
    res.status(200).send(doc);
  })
});

//删除用户作品
router.delete('/userCenter/:workId',(req,res)=>{
  Menu.findOneAndRemove({_id:req.params.workId},(err,doc)=>{
    if(err){
      res.status(501).send("出错了");
    }
  })
});

module.exports = router;

    