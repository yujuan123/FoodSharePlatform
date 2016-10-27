import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadUserMessage} from '../actions/index';
import UserWorkItem from './UserWorkItem';

//触发带有函数的 action
import {getUserCenterMessage} from '../actions/index';
class UserMessage extends Component {
  constructor(props){
    super(props);
  }
  
  /*componentWillUpdate，不会在首次 render 组件的周期调用*/
  //黑屏，就是因为 将要更新
  componentWillUpdate(nextProps){
    console.log("UserMessage :  ?   "+nextProps.userCenterMessageShowed.isCompleted);
    if(nextProps.userCenterMessageShowed.isCompleted){
      if(nextProps.userCenterMessageShowed.username){
        this.props.loadUserMessage(nextProps.userCenterMessageShowed.username);
        this.props.loadUserWorks(nextProps.userCenterMessageShowed.username);
        //让 username 不再返回
        this.props.blockUserMessage();
      }
    }
  }
  
  render() {
    let {username, phone, regtime} = this.props.userMessageShowed;
    let userWorksShowed = this.props.userWorksShowed;
    console.log(username+"phone: "+phone+"regtime: "+regtime);

    return (
        <div >
          <div className="row">
            <div className="col-md-3">
              <img src="image/userImg.jpg" className="img-thumbnail userImg"/>
            </div>
            <div className="col-md-3">
              <ul className="userMessage-ul">
                <li><h1>{username}</h1></li>
                <li><h5>{phone}</h5></li>
                <li><h5>{regtime+"加入"}</h5></li>
              </ul>
            </div>
          </div>
          <div>
            <hr/>
            <h2>作品展示</h2>
            <div className="row">
              {
                userWorksShowed.map((v,k)=>{
                  return <UserWorkItem id={v._id} name={v.name} date={v.date} image={v.image} description={v.description}/>
                })
              }
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
  },
  loadUserWorks:(userName)=>{
    dispatch({
      type:'USERWORKS_LOADED',
      username:userName
    })
  },
  blockUserMessage:()=>{
    dispatch({
      type:'USERMESSAGE_BLOCKED'
    })
  }
  
});
const UserMessagePackage = connect(mapStateToProps,mapDispatchToProps)(UserMessage);
export default UserMessagePackage ;