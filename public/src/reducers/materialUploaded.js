 /**
 * Created by duanxue on 16-10-11.
 */
const materialUploaded=(state=[],action)=>{
  switch(action.type){
    case 'materialUpload':
      return [
        ...state,
        action.data
      ];//目前理解是将现有state加入state数组中。
    case 'deleteMaterial':
      return state.filter((v,k)=>{
        return k!==action.id});
   }
  return state;
}
export default materialUploaded;