import React from 'react';
import PropTypes from 'prop-types';
import classes from './MenuToggle.module.css';

const MenuToggle = ({ isOpen, onToggle }) => {
  const cls = [
    classes.MenuToggle,
    'fa',
  ];

  if (isOpen) {
    cls.push('fa-times');
    cls.push(classes.open);
  } else {
    cls.push('fa-bars');
  }

  return (
    <i
      className={cls.join(' ')}
      onClick={onToggle}
    />
  );
};

MenuToggle.propTypes = {
  isOpen: PropTypes.func,
  onToggle: PropTypes.func,
};

export default MenuToggle;
