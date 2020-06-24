import React from 'react';
import PropTypes from 'prop-types';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = ({
  answerNumber,
  question,
  quizLength,
  state,
  answers,
  onAnswerClick,
}) => (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
      <span>
        <strong>{answerNumber}.</strong>&nbsp;
        {question}
      </span>

        <small>{answerNumber} из {quizLength}</small>
      </p>

      <AnswersList
        state={state}
        answers={answers}
        onAnswerClick={onAnswerClick}
      />
    </div>
);

ActiveQuiz.propTypes = {
  answerNumber: PropTypes.number,
  question: PropTypes.string,
  quizLength: PropTypes.number,
  state: PropTypes.object,
  answers: PropTypes.object,
  onAnswerClick: PropTypes.func,
};

export default ActiveQuiz;
