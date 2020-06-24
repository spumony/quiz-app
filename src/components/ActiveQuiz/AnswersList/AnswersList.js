import React from 'react';
import PropTypes from 'prop-types';
import classes from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = ({ answers, onAnswerClick, state }) => (
    <ul className={classes.AnswersList}>
      {answers.map((answer, index) => (
        <AnswerItem
          key={index}
          answer={answer}
          onAnswerClick={onAnswerClick}
          state={state ? state[answer.id] : null}
        />
      ))}
    </ul>
);

AnswersList.propTypes = {
  answers: PropTypes.object,
  onAnswerClick: PropTypes.func,
  state: PropTypes.object,
};

export default AnswersList;
