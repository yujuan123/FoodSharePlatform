import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadUserMessage} from '../actions/index';

//触发带有函数的 action
import {getUserCenterMessage} from '../actions/index';
class UserMessage extends Component {
  constructor(props){
    super(props);
  }
  
  /*componentWillUpdate，不会在首次 render 组件的周期调用*/
  componentWillUpdate(nextProps){
    if(nextProps.userCenterMessageShowed.username){
      this.props.loadUserMessage(nextProps.userCenterMessageShowed.username);
    }
  }
  
  render() {
    let {username, phone, regtime} = this.props.userMessageShowed;
    console.log(username+"phone: "+phone+"regtime: "+regtime);

    return (
        <div >
          <div className="row">
            <div className="col-md-4">
              <img src="image/userImg.jpg" className="img-thumbnail userImg"/>
            </div>
            <div className="col-md-4">
              <ul className="userMessage-ul">
                <li><h1>{username}</h1></li>
                <li><h5>{phone}</h5></li>
                <li><h5>{regtime+"加入"}</h5></li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return state;
};
const mapDispatchToProps = (dispatch)=>({
  getUserCenterMessage:()=>{
    dispatch(getUserCenterMessage());
  },
  loadUserMessage: (userName)=> {
    dispatch(loadUserMessage(userName));
  }
});
const UserMessagePackage = connect(mapStateToProps,mapDispatchToProps)(UserMessage);
export default UserMessagePackage ;