const userWorksShowed = (state=[],action)=>{
  switch(action.type){
    case 'USERWORKS_SHOWED':
      return action.data;
  }
  return state;
};
export default userWorksShowed;