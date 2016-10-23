import request from 'superagent';
const sendUserMessageMiddleware = store=>next=>action=>{
  switch (action.type){
    case 'USERMESSAGE_SENT':
      request.post('/menus/checkLogin')
          .send(action.userMessage)
          .type('json')
          .end((err,res)=>{
            console.log(action.userMessage);
            if(res.status===500){
              console.log("500");
              next({
                type:'LOGINERRMESSAGE_SHOWED',
                err:res.body.err
              })
            }
            if(res.ok && !err){
              console.log("lalalala");
              next({
                type:'USERNAME_SENT',
                data:{
                  isSent:true,
                  username:res.body.data
                }
              })
            }
          });
      break;
  }
  next(action);
};
export default sendUserMessageMiddleware;