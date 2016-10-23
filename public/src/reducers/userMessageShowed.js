const userMessageShowed = (state={},action)=>{
  switch(action.type){
    case 'USERMESSAGE_SHOWED':
      return action.data;
  }
  return state;
};
export default userMessageShowed;