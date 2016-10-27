import React, {Component} from 'react';
import {connect} from 'react-redux';
import RecentMenuItem from './RecentMenuItem';
import {Link} from 'react-router';

class RecentMenuList extends Component {
  componentDidMount() {
    this.props.initRecentMenu();
  }

  render() {
    let recentMenuList = this.props.recentMenuList || [];
    return (
        <div className="food-body">
          <div className="row">
            <div className="col-md-3 recent-list">菜谱新秀</div>
            <div className="col-md-1 col-md-offset-8"><Link to="/menu">更多>></Link></div>
          </div>
          {
            recentMenuList.map((v, k)=> {
              return <RecentMenuItem id={v._id} name={v.name} date={v.date} description={v.description}
                                     image={v.image}/>
            })
          }
        </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return {recentMenuList: state.recentMenuList};
};
const mapDispatchToProps = (dispatch)=>({
  initRecentMenu: ()=> {
    dispatch({
      type: 'INIT_RECENTMENU'
    })
  }
});
//注意：
//要给 RecentMenuList 组件connect 所需要的state
const RecentMenuListPackage = connect(mapStateToProps, mapDispatchToProps)(RecentMenuList);
export default RecentMenuListPackage;