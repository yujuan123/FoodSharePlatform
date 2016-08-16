/**
 * Created by jae on 16-8-13.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import MenuItem from './MenuItem';

class Menu extends Component {
  render() {
    let menu = this.props.menu;
    //let {people}=this.props;

    return (
        <div className="row">
          {
            menu.map((v, k)=> (
                <MenuItem key={k} name={v.name} image={v.image} date={v.date} description={v.description}/>
            ))
          }
        </div>

    );
  }
}

export default Menu;