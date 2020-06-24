import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './Drawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose();
  }

  renderLinks(links) {
    return links.map((link, index) => (
      <li key={index}>
        <NavLink
          to={link.to}
          exact={link.exact}
          activeClassName={classes.active}
          onClick={this.clickHandler}
        >
          {link.label}
        </NavLink>
      </li>
    ));
  }

  render() {
    const links = [
      { to: '/', label: 'List', exact: true },
    ];

    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    if (this.props.isAuth) {
      links.push({ to: '/quiz-creator', label: 'Create quiz', exact: false });
      links.push({ to: '/logout', label: 'Log out', exact: false });
    } else {
      links.push({ to: '/auth', label: 'Log in', exact: false });
    }

    return (
      <>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks(links)}
          </ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </>
    );
  }
}

Drawer.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.func,
  isAuth: PropTypes.func,
};

export default Drawer;
