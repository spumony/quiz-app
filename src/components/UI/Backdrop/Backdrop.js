import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.module.css';

const Backdrop = ({ onClick }) => (
  <div
    className={classes.Backdrop}
    onClick={onClick}
  />
);

Backdrop.propTypes = {
  onClick: PropTypes.func,
};

export default Backdrop;
