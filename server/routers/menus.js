import express from 'express';
import Menus from '../models/Menus';

let router = express.Router();
//查所有数据

router.get('/', (req, res)=> {
  Menus.find({}, {}, {limit: 9}, (err, data)=> {
    res.send(data);
  });
});

router.get('/:id', (req, res)=> {
  Menus.findOne({_id: req.params.id}, (err, doc)=> {
    res.send(doc);
  });
});

module.exports = router;
// export default router;