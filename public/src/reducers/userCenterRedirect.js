const userCenterRedirect = (state=false,action)=>{
  switch(action.type){
    case 'USERMESSAGE_REDIRECTED':
      return action.isRedirected;
    case 'USERCENTER_REDIRECT':
      return false;
  }
  return state;
};
export default userCenterRedirect; 