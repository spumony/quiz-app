import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../store/actions/auth';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <Redirect to={'/'} />;
  }
}

const mapDispatchToProps = {
  logout,
};

Logout.propTypes = {
  logout: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Logout);
