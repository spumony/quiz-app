import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.css';

const Input = ({
  type,
  label,
  value,
  onChange,
  errorMessage,
  valid,
  shouldValidate,
  touched,
}) => {
  const inputType = type || 'text';
  const cls = [classes.Input];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (!valid && shouldValidate && touched) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={value}
        onChange={onChange}
      />

      {(!valid && shouldValidate && touched) && (
        <span>{errorMessage || 'Enter valid values'}</span>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  valid: PropTypes.bool,
  shouldValidate: PropTypes.bool,
  touched: PropTypes.bool,
};

export default Input;
