const usernameRepeatShowed = (state='',action)=>{
  switch (action.type){
    case 'USERNAMEREPEAT_SHOWED':
      return action.data;
    case 'SHOWREGISTER_ERROR':
      return action.data;
    case 'REGISTER_REDIRECTED':
      return '';
  }
  return state;
};

export default usernameRepeatShowed;