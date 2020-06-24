import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './Layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';

class Layout extends Component {
  state = {
    menu: false,
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  }

  menuCloseHandler = () => {
    this.setState({
      menu: false,
    });
  }

  render() {
    return (
      <div className={classes.Layout}>
        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
          isAuth={this.props.isAuth}
        />

        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: !!state.auth.token,
});

Layout.propTypes = {
  isAuth: PropTypes.func,
  children: PropTypes.object,
};

export default connect(mapStateToProps)(Layout);
