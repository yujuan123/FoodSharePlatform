import React ,{Component} from 'react';
import UserWorkItem from './UserWorkItem';
import {connect} from 'react-redux';
class UserWorks extends Component{
  componentWillUpdate(nextProps){
    if(nextProps.userCenterMessageShowed.username){
      this.props.loadUserWorks(nextProps.userCenterMessageShowed.username);
    }
  }
  render() {
    let userWorksShowed = this.props.userWorksShowed;
    console.log("作品展示 ："+userWorksShowed);
    return (
        <div>
          <hr/>
          <h2>作品展示</h2>
          <div className="row">
            {
              userWorksShowed.map((v,k)=>{
                return <UserWorkItem id={v._id} name={v.name} date={v.date} image={v.image} description={v.description}/>
              })
            }
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return state;
};

const mapDispatchToProps = (dispatch)=>({
  loadUserWorks:(userName)=>{
    dispatch({
      type:'USERWORKS_LOADED',
      username:userName
    })
  }
});
const UserWorksPackage = connect(mapStateToProps,mapDispatchToProps)(UserWorks);
export default UserWorksPackage;
