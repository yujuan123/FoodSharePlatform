//reducer 是一个单纯的函数
const menuLoadedShowed = (state={},action)=>{
  switch(action.type){
    case 'MENULOADED_REQUESTED':
      return{
        isCompleted:false
      };
    case 'MENULOADED_RECEIVED':
      return {
        isCompleted:action.isCompleted,
        username:action.userName
      }
  }
  return state;
};
export default  menuLoadedShowed;