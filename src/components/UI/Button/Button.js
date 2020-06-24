import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = ({
  type,
  onClick,
  disabled,
  children,
}) => {
  const cls = [
    classes.Button,
    classes[type],
  ];

  return (
    <button
      onClick={onClick}
      className={cls.join(' ')}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.string,
  children: PropTypes.object,
};

export default Button;
