import React from 'react';
import PropTypes from 'prop-types';
import classes from './Select.module.css';

const Select = ({
  label,
  value,
  onChange,
  options,
}) => {
  const htmlFor = `${label}-${Math.random()}`;

  return (
    <div className={classes.Select}>
      <label htmlFor={htmlFor}>{label}</label>
      <select
        id={htmlFor}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option
            value={option.value}
            key={option.value + index}
          >
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.object,
};

export default Select;
