import React ,{Component} from 'react';
import {Link} from 'react-router';
class Navigate extends Component{
    render(){
      return (
          <div className="grid main-menu-block">
            <ul id="main-menu">
              <li className="settings-txt"><Link to="/">Home</Link></li>
              <li className="settings-txt"><Link to="/menu">Menus</Link></li>
              <li className="settings-txt"><Link to="/userUploaded">Upload</Link></li>
              <li className="settings-txt"><Link to="/userCenter">About ME</Link></li>
              <li className="settings-txt"><Link to="/login">Log In</Link></li>
              <li className="settings-txt"><Link to="/register">Register</Link></li>
            </ul>
          </div>
      )
    }
}

export default Navigate;



