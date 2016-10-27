import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
//前端验证：长度，再次确认问题
//后台验证：用户名重复问题
class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      usernameErr: '',
      passwordErr: '',
      vertifyPasswordErr: ''
    };
  }

  click() {
    let userNameLegaled = '';
    let passwordLegaled = '';
    let username = this.refs.username.value.trim();
    let password = this.refs.password.value.trim();
    let passwordVertified = this.refs.passwordVertified.value.trim();
    if (!/^[\u4e00-\u9fa5A-Za-z0-9-_]*$/.test(username)) {
      this.setState({usernameErr: "用户名只能中英文，数字，下划线"});
    } else {
      userNameLegaled = username;
    }
    if (password.length < 6) {
      this.setState({passwordErr: "密码长度不能小于6位"});
    } else {
      if (password != passwordVertified) {
        this.setState({vertifyPasswordErr: "两次密码输入不一致"});
      } else {
        passwordLegaled = password;
      }
    }
    if (userNameLegaled && passwordLegaled) {
      /*注册获取当前时间*/
      let date = new Date();
      let regtime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      this.props.sendUserName({username: userNameLegaled, password: passwordLegaled, regtime: regtime})
    }
  }

  focus() {
    this.setState({usernameErr: ''});
    this.setState({passwordErr: ''});
    this.setState({vertifyPasswordErr: ''});
    this.props.showRegisterErr('');
  }

  componentWillUpdate(nextProps) {
    if (nextProps.usernameRepeatShowed === '注册成功') {
      this.props.router.push('/login');
      this.props.redirectRegister();
    }
  }

  render() {
    return (
        <div className="food-body">
          <div>
            <h1 className='text-center'> 烹然心动 </h1>
          </div>
          <form>
            <div>
              <input type="text" className="form-control" id="exampleInputEmail" placeholder="用户名" ref="username"
                     default="" onFocus={this.focus.bind(this)}/>
              <label className=" text-danger ">{this.state.usernameErr}</label>
              <label className=" text-danger ">{this.props.usernameRepeatShowed}</label>
              <br/><br/>
            </div>
            <div>
              <input type="password" className="form-control" id="exampleInputPassword" placeholder="密码" ref="password"
                     default="" onFocus={this.focus.bind(this)}/>
              <label className=" text-danger ">{this.state.passwordErr}</label>
              <br/><br/>
            </div>
            <div>
              <input type="password" className="form-control" id="exampleInputPassword" placeholder="再次确认密码"
                     ref="passwordVertified"
                     default="" onFocus={this.focus.bind(this)}/>
              <label className=" text-danger ">{this.state.vertifyPasswordErr}</label>
              <br/><br/>
            </div>
            <button type="button" id='register-btn' className="btn btn-success" onClick={this.click.bind(this)}>注 册
            </button>
          </form>
        </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return state;
};
const mapDispatchToProps = (dispatch)=>({
  sendUserName: (user)=> {
    dispatch({
      type: 'USERNAMEINPUT_SENT',
      user
    })
  },
  showRegisterErr: (data)=>({
    type: 'SHOWREGISTER_ERROR',
    data
  }),
  redirectRegister: ()=> {
    dispatch({
      type: 'REGISTER_REDIRECTED'
    })
  }
});
const RegisterFormPackage = connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterForm));
export default RegisterFormPackage;