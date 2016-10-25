import request from 'superagent';
const sendUsernameMiddleware = store=>next=>action=>{
  switch(action.type){
    case 'USERNAMEINPUT_SENT':
      request.post('/menus/checkRegister')
          .send(action.user)
          .type('json')
          .end((err,res)=>{
            if(!err){
              next({
                type:'USERNAMEREPEAT_SHOWED',
                data:res.text
              })
            }
          });
      break;
  }
  next(action);
};

export default sendUsernameMiddleware;