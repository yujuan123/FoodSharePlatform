import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import UserMessage  from '../components/UserMessage';
import UserWorksPackage  from '../components/UserWorks';
import {getUserCenterMessage} from '../actions/index';
class UserCenterApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserCenterMessage();
  }

 
  render() {
    return (
          <div className="food-body">
            <UserMessage userId={this.props.userCenterMessageShowed.username}/>
            <UserWorksPackage/>
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
  }

});
var UserCenterAppPackage = connect(mapStateToProps, mapDispatchToProps)(UserCenterApp);

export default UserCenterAppPackage;