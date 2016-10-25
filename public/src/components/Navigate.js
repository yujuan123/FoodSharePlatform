import React ,{Component} from 'react';
import {Link} from 'react-router';
class Navigate extends Component{
    render(){
      return (
          <div className="grid main-menu-block food-body">
            <ul id="main-menu" >
              <li className="settings-txt"><Link to="/">首页</Link></li>
              <li className="settings-txt"><Link to="/menu">菜品列表</Link></li>
              <li className="settings-txt"><Link to="/userUploaded">上传菜谱</Link></li>
              <li className="settings-txt"><Link to="/userCenter">个人中心</Link></li>
              <li className="settings-txt"><Link to="/login">登录</Link></li>
              <li className="settings-txt"><Link to="/register">注册</Link></li>
            </ul>
          </div>
      )
    }
}

export default Navigate;



