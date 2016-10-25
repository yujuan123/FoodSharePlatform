/**
 * Created by duanxue on 16-10-11.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import request from 'superagent';
import {connect} from 'react-redux';
import {  addMaterial }  from '../actions/index';
class AddMaterial extends Component{
  click(){
    let ip1=this.refs.sourceText.value.trim();
    let ip2=this.refs.amountText.value.trim();
    if(ip1&&ip2){
      this.props.addMaterial({source:ip1,amount:ip2});
    }
    this.refs.sourceText.value='';
    this.refs.amountText.value='';
  }
  handleKeyPress(e){
    if(13 !== e.charCode){
      return ;
    }
    this.click();
  }
  render(){
    return (<form action="#" className="form-horizontal">
         <div>
           <h4 className="text-left">
             <b>用料</b>
             <small className="text-danger">必填</small>
           </h4>
         </div>
         <div className="form-group">
           <div  className="text-left col-md-5 col-sm-5">
           <b>用料：</b>
           <input className="material-input" type="text" ref="sourceText" id="inputSource"
                  placeholder="用料名称" onKeyPress={this.handleKeyPress.bind(this)}
                  style={{marginLeft:'10px'}}
                 />
           </div>
           <div className="col-md-5 col-sm-5 text-left">
           <b>数量：</b>
           <input className="material-input" type="text" ref="amountText" id="inputAmount"
                  placeholder="用料用量" onKeyPress={this.handleKeyPress.bind(this)}
                  style={{marginLeft:'10px'}}
               />
           </div>
           <button onClick={this.click.bind(this)} style={{marginRight:'2%',float:'right'}}>添加</button>
         </div>
    </form>)
  }
}
const mapStateToProps=(state)=>(state);
const mapDispatchToProps=(dispatch)=>({
  addMaterial:(material)=>{
    dispatch(addMaterial(material))
  }
});
const AddMaterialPackage=connect(mapStateToProps,mapDispatchToProps)(AddMaterial);
export default AddMaterialPackage;