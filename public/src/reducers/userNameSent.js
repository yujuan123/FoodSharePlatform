const userNameSent = (state={},action)=>{
  switch (action.type){
    case 'USERNAME_SENT':
        console.log("从数据库拿到理用户数据"+action.data);
      return action.data;
  }
  return state;
};

export default userNameSent;