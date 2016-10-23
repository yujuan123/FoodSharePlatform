const loginErrShowed = (state='',action)=>{
  switch (action.type){
    case 'LOGINERRMESSAGE_SHOWED':
      return action.err;
    break;
  }
  return state;
};
export default loginErrShowed;