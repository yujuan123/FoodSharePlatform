import React ,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'; 
import {deleteUserWork} from '../actions/index';

class UserWorkItem extends Component{
  handleClick(){
    let id = this.props.id;
    this.props.deleteUserWork(id);
  }
  render(){
    console.log("现在我的主页数据"+this.props);
    let {id,image,name,date,description} = this.props||[];

    return (
        <div className="text-center col-sm-6 col-md-4">
          <div className="thumbnail">
            <Link to={'/menuDetail/'+id}>
              <img id="food-img" src={image} alt="..."/>
            </Link>
            <div className="caption row">
              <div className="col-md-4" >{name}</div>
              <div className="col-md-6" >{date}</div>
              <div className="col-md-2"><button className="btn-warning" onClick={this.handleClick.bind(this)} ><span className="glyphicon glyphicon-trash"></span></button>
              </div>
            </div>
            <p id="food-description">{description}</p>
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return state;
};
const mapDispatchToProps = (dispatch)=>({
  deleteUserWork: (workId)=>{
      dispatch(deleteUserWork(workId));
  }
});

var UserWorkItemPackage = connect(mapStateToProps,mapDispatchToProps)(UserWorkItem);
export default UserWorkItemPackage;