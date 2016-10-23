import request from 'superagent';
const userMessageLoadedMiddleware = store=>next=>action=>{
  switch(action.type){
    case 'USERMESSAGE_LOADED':
      request.get(`/menus/userCenter/${action.userName}`)
          .end((err,res)=>{
            next({
              type:'USERMESSAGE_SHOWED',
              data:res.body
            })
          });
      break;
  }
  next(action);
};
export default userMessageLoadedMiddleware;