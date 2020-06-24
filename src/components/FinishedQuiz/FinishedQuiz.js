import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './FinishedQuiz.module.css';
import Button from '../UI/Button/Button';

const countSuccess = results => Object.keys(results).reduce((total, key) => {
  if (results[key] === 'success') {
    return total + 1;
  }

  return total;
}, 0);

const FinishedQuiz = ({ results, quiz, onRetry }) => {
  const successCount = countSuccess(results);

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[results[quizItem.id]],
          ];

          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          );
        })}
      </ul>

      <p>Правильно {successCount} из {quiz.length}</p>

      <div>
        <Button onClick={onRetry} type="primary">Повторить</Button>
        <Link to="/">
          <Button type="success">Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  );
};

FinishedQuiz.propTypes = {
  results: PropTypes.object,
  quiz: PropTypes.object,
  onRetry: PropTypes.func,
};

export default FinishedQuiz;
