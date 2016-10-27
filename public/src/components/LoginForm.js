import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {sendUserInfor} from '../actions/index';
import {hideLoginErrInfor} from '../actions/index';

class LoginForm extends Component {
  click() {
    var username = this.refs.username.value.trim();
    var password = this.refs.password.value.trim();
    console.log(username);
    this.props.sendUserMessage({
      username: username,
      password: password
    });
    this.refs.username.value = '';
    this.refs.password.value = '';
  }

  componentWillUpdate(nextProps) {
    console.log("reducer 里的数据" + this.props.userNameSent.username);
    if (nextProps.userNameSent.isSent) {
      this.props.router.push('/userCenter');//  /userCenter
    }
  }

  handleFocus() {
    this.props.hideLoginErrMessage('');
  }

  render() {
    return (
        <div className="food-body ">
          <div >
            <h1 className='text-center'> 烹然心动 </h1>
          </div>
          <form id="homePage-form" >
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="用户名" ref="username"
                     onFocus={this.handleFocus.bind(this)}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="密码" ref="password"
                     onFocus={this.handleFocus.bind(this)}/>
              <span>{this.props.loginErrShowed}</span>
            </div>
            <div className="login-wrap">
              <button type="button"  className="btn btn-success " onClick={this.click.bind(this)}>登 录
              </button>
            </div>
          </form>
        </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return state;
};
const mapDispatchToProps = (dispatch)=>({
  sendUserMessage: (userMessage)=> {
    dispatch(sendUserInfor(userMessage));
  },
  hideLoginErrMessage: (errMessage)=> {
    dispatch(hideLoginErrInfor(errMessage));
  }
});

const LoginFormPackage = connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));
export default LoginFormPackage;