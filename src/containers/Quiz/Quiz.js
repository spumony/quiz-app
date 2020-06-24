import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';
import { fetchQuizById, quizAnswerClick, retryQuiz } from '../../store/actions/quiz';

class Quiz extends Component {
  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.retryQuiz();
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {this.props.loading || !this.props.quiz
            ? <Loader />
            : this.props.isFinished
              ? (
                <FinishedQuiz
                  results={this.props.results}
                  quiz={this.props.quiz}
                  onRetry={this.props.retryQuiz}
                />
              )
              : (
                <ActiveQuiz
                  answers={this.props.quiz[this.props.activeQuestion].answers}
                  question={this.props.quiz[this.props.activeQuestion].question}
                  onAnswerClick={this.props.quizAnswerClick}
                  quizLength={this.props.quiz.length}
                  answerNumber={this.props.activeQuestion + 1}
                  state={this.props.answerState}
                />
              )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  quiz: {
    results,
    isFinished,
    activeQuestion,
    answerState,
    quiz,
    loading,
  },
}) => ({
  results,
  isFinished,
  activeQuestion,
  answerState,
  quiz,
  loading,
});

const mapDispatchToProps = {
  fetchQuizById,
  quizAnswerClick,
  retryQuiz,
};

Quiz.propTypes = {
  fetchQuizById: PropTypes.func,
  match: PropTypes.object,
  retryQuiz: PropTypes.func,
  loading: PropTypes.string,
  quiz: PropTypes.object,
  isFinished: PropTypes.func,
  results: PropTypes.object,
  activeQuestion: PropTypes.number,
  quizAnswerClick: PropTypes.func,
  answerState: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
