/**
 * Created by duanxue on 16-10-12.
 */
const ImageUploaded=(state={},action)=>{
  switch(action.type){
    case 'uploadImage':
      return action.file;
  }
  return state;
}
export default ImageUploaded;