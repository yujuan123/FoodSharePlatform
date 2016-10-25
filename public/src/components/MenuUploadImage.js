/**
 * Created by duanxue on 16-10-9.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import request from 'superagent';
import {connect} from 'react-redux';
import {uploadImage} from '../actions/index';
class MenuUploadImage extends Component {
  isClick(){
    let  input=this.refs.file;
    let  img=this.refs.image;
    if(input.files&&input.files[0]){
      var fileObj=new FileReader();
      fileObj.onload=function(event){//属性绑定方法
        img.src=event.target.result;

      }
      fileObj.readAsDataURL(input.files[0]);
    }
    this.handleClick(input.files[0]);
  }
  handleClick(file){
    console.log(this.props);
    let formData=new FormData();
    formData.append('avatar',file);
    request
        .post('/profile')
        .send(formData)
        .end((err,res)=>{
          this.props.uploadImage(res.body.filePath);
        });
  }
  render() {
    return <div>
      <div>
      <img src="" ref="image" style={{height:'400px',width:'600px'}}/>
        </div>
      <input type="file" ref="file" style={{width:'90px',margin:'10px 0 20px 45%'}} onChange={this.isClick.bind(this)}/>
    </div>
  }
}
const mapStateToProps=(state)=>(state);
const mapDispatchToProps=(dispatch)=>(
{
  uploadImage:(file)=> {
    dispatch(uploadImage(file));
  }
}
);
const MenuUploadImagePackage=connect(mapStateToProps,mapDispatchToProps)(MenuUploadImage);
export default MenuUploadImagePackage;