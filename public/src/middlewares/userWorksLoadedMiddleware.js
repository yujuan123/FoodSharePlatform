import request from 'superagent';
const userWorksLoadedMiddleware = store=>next=>action=>{
  switch(action.type){
    case 'USERWORKS_LOADED':
      request.get(`/menus/userWorks/${action.username}`)
          .end((err,res)=>{
            next({
              type:'USERWORKS_SHOWED',
              data:res.body
            })
          });
      break;
  }
  next(action);
};
export default userWorksLoadedMiddleware;