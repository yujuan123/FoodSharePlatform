const userNameSent = (state={},action)=>{
  switch (action.type){
    case 'USERNAME_SENT':
      return action.data;
    break;
  }
  return state;
};

export default userNameSent;