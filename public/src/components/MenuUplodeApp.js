/**
 * Created by duanxue on 16-10-11.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {uploadMenu} from '../actions/index';
import MenuUplodeImagePackage from './MenuUplodeImage';
import AddMaterialPackage from './AddMaterial';
import MaterialsShowPackage from './MaterialsShow';
import {getMenuLoaded } from '../actions/index';
class MenuUplodeApp extends Component {
  componentDidMount(){
    this.props.getMenuLoaded();
  }
  click(){
    //各个页面包括 上传页面都可以通过验证用户的合法性 来获取用户信息！
    let username = this.props.menuLoadedShowed.username;
    let name=this.refs.nameInput.value;
    let description=this.refs.descriptionInput.value;
    let steps=this.refs.stepsInput.value;
    let materials=this.props.materialUploaded;
    let image=this.props.ImageUploaded;
    let newDate=new Date();
    let date = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
    let menu={
      username:username,
      name:name,
      description:description,
      steps:steps,
      data:date,
      image:image,
      materials:materials
    };
    this.props.uploadMenuItem(menu);
  }
  render()
  {
    return (
        <div className="text-center container">
        <div className="food-body">
        <h3><b>菜名：</b>
          <input type="text" ref="nameInput"/>
        </h3>
      <MenuUplodeImagePackage/>
      <div style={{margin:'30px auto 50px' }}>
        <h4 className="text-left"><b>简介：</b></h4>
        <textarea className="form-control" rows="2" placeholder="请简单介绍一下你的菜品吧!" style={{overflow:'auto'}} ref="descriptionInput"> </textarea>
      </div>
        <AddMaterialPackage/>
        <MaterialsShowPackage/>
      <div>
        <h4 className="text-left"><b>做法与步骤：</b></h4>
        <textarea className="form-control" rows="5" ref='stepsInput'
                  style={{overflow:'auto'}}
                  placeholder="为了您的菜谱能够更好的显示，您可以：1.XXX 回车 2.XXX 回车 3.xxx......"> </textarea>
      </div>
      <button onClick={this.click.bind(this)} type="button" className="btn btn-info btn-lg" style={{marginTop:'30px'}}>
        上传菜谱
      </button>
         </div>
        </div>);
          }
}
const mapStateToProps=(state)=>(state);
const mapDispatchToProps=(dispatch)=>({
  uploadMenuItem: (menu)=>{
    dispatch(uploadMenu(menu));
  },
  //触发一下 getMenuLoaded action
  getMenuLoaded:()=>{
    dispatch(getMenuLoaded());
  }
});
const MenuUploadAppPackage=connect(mapStateToProps,mapDispatchToProps)(MenuUplodeApp);
export default MenuUploadAppPackage;
