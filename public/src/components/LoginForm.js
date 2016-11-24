import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {sendUserInfor} from '../actions/index';
import {hideLoginErrInfor} from '../actions/index';
import {Link} from 'react-router';

class LoginForm extends Component {
  click() {
    var username = this.refs.user.value.trim();
    var password = this.refs.pass.value.trim();
    console.log(username+"以及"+password);
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
        <div className="login clearfix container">
          <div className="col-md-6">
            <div><img src="image/3.jpg" id="img-bc"/></div>
            <div><p className="slogan">家常美味，也是人生百味</p></div>
          </div>
          <div className="login-mls col-md-6">
            <h2>烹然心动</h2>
            <form id="loginForm">

              <div className="form-group">
                <label htmlFor="mlsUser">账&nbsp;&nbsp;&nbsp;&nbsp;号：</label>
                <input type="text"  className="form-control" placeholder="用户名" ref="user" onFocus={this.handleFocus.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="mlsPass">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
                <input type="password" className="form-control" placeholder="密码" ref="pass" onFocus={this.handleFocus.bind(this)}/>
                <span>{this.props.loginErrShowed}</span>
              </div>
              <div className="submit-box">
                <button type="button"  className="btn btn-success " onClick={this.click.bind(this)}>登 录
                </button>
              </div>
            </form>
          </div>
          <p className="note-register">还没有账号？&nbsp;<Link to="/register">立即注册</Link></p>
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