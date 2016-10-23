import React,{Component} from 'react';
import Navigate from './Navigate';
class AppRoot extends Component{
  render(){
    return (
        <div className="appRoot">
          <Navigate/>
          {this.props.children}
          <div className="clearfix"></div>
        </div>
    );
  }
}
export default AppRoot;