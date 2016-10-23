import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import UserMessage  from '../components/UserMessage';
import {getUserCenterMessage} from '../actions/index';
import {redirectUserCenter} from '../actions/index';
class UserCenterApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserCenterMessage();
  }
  componentWillUpdate(nextProps){
    if(nextProps.userCenterRedirect){//注意 userCenterRedirect reducer返回值是个布尔值，不是个对象
      console.log("重定向到登录页面");
      this.props.router.push('/login');
      this.props.redirectUserCenter();
    }
  }
 
  render() {
    return (
          <div className="food-body">
            <UserMessage userId={this.props.userCenterMessageShowed.username}/>
            <div className="clearfix"></div>
          </div>
    )
  }
}
var mapStateToProps = (state)=> {
  return state;
};

const mapDispatchToProps = (dispatch)=> ({
  getUserCenterMessage: ()=> {
    dispatch(getUserCenterMessage())
  },
  redirectUserCenter:()=>{
    dispatch(redirectUserCenter())
  }
});
var UserCenterAppPackage = connect(mapStateToProps, mapDispatchToProps)(withRouter(UserCenterApp));

export default UserCenterAppPackage;