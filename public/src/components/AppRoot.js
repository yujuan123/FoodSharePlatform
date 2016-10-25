import React,{Component} from 'react';
import Navigate from './Navigate';
import Footer from './Footer';
class AppRoot extends Component{
  render(){
    return (
        <div className="appRoot">
          <Navigate/>
          <div className="clearfix"></div>
          {this.props.children}
          <div className="clearfix"></div>
          <Footer/>
        </div>
    );
  }
}
export default AppRoot;