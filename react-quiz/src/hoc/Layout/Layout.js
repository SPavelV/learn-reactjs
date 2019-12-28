import React, { Component } from 'react';
import classes from './Layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';

export default class Layout extends Component {
  state = {
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState({menu: !this.state.menu})
  }

  render() {
    return (
      <div className={classes.Layout}>
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.isOpen}
        />

        <main >
          {this.props.children}
        </main>
      </div>
    )
  }
}
