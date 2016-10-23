/**
 * Created by duanxue on 16-10-12.
 */
import request from 'superagent';
const menuUploadMiddleware=store=>next=>action=>{

  switch(action.type){

    case 'uploadMenu':
      console.log(action.data);
       request
           .post('/menus')
           .send(action.data)
           .type('json')
           .end((err,res)=>{
             if(res.text.trim()==='fail'){
               alert('上传失败');
             }
            else{
              console.log(res.text);
               alert('上传成功')
             }
           });
  }
  next(action);
};
export default menuUploadMiddleware;