import  request from 'superagent';
const deleteWorkMiddleware = store=>next=>action=>{
  switch(action.type){
    case 'USERWORK_DELETED':
      request.delete(`/menus/userCenter/${action.workId}`)
          .end(()=>{
            store.dispatch({
              type:'USERWORKS_LOADED'
            })
          });
      break;
  }
  next(action);
};
export default deleteWorkMiddleware;
