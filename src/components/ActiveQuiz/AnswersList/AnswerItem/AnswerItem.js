import React from 'react';
import PropTypes from 'prop-types';
import classes from './AnswerItem.module.css';

const AnswerItem = ({ state, answer, onAnswerClick }) => {
  const cls = [classes.AnswerItem];

  if (state) {
    cls.push(classes[state]);
  }

  return (
    <li
      className={cls.join(' ')}
      onClick={() => onAnswerClick(answer.id)}
    >
      {answer.text}
    </li>
  );
};

AnswerItem.propTypes = {
  state: PropTypes.object,
  onAnswerClick: PropTypes.func,
  answer: PropTypes.object,
};

export default AnswerItem;
