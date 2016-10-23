//个人中心页 信息显示
//
const userCenterMessageShowed = (state={},action)=>{
  switch(action.type){
    case 'USERCENTERMESSAGE_REQUESTED':
      return {
        isCompleted:false
      };
    case 'USERCENTERMESSAGE_RECEIVED':
      return {
        username:action.userName,
        isCompleted:action.isCompleted
      };
    case 'USERMESSAGE_BLOCKED':
      return {
        isCompleted:false
      };
  }
  return state;
};
export default userCenterMessageShowed;