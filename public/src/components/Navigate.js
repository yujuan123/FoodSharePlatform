import React, {Component} from 'react';
import {Link} from 'react-router';
class Navigate extends Component {
  render() {
    return (
        <div id="header" className="grid-clear food-body">
          <div className="grid" id="logo">
            <a href=" " className="settings-text">
              Cook In My Life
            </a >
          </div>
          <div className="grid main-menu-block">
            <ul id="main-menu">
              <li className="settings-txt"><Link to="/" activeClassName="active">首页</Link></li>
              <li className="settings-txt"><Link to="/menu" activeClassName="active">菜品列表</Link></li>
              <li className="settings-txt"><Link to="/userUploaded" activeClassName="active">上传菜谱</Link></li>
              <li className="settings-txt"><Link to="/userCenter" activeClassName="active">我的主页</Link></li>
              <li className="settings-txt"><Link to="/login" activeClassName="active">登录</Link></li>
              <li className="settings-txt"><Link to="/register" activeClassName="active">注册</Link></li>
            </ul>
          </div>
        </div>
    )
  }
}

export default Navigate;



