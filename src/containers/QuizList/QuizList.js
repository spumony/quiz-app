import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './QuizList.module.css';
import Loader from '../../components/UI/Loader/Loader';
import { fetchQuizes } from '../../store/actions/quiz';

class QuizList extends Component {
  renderQuizes() {
    return this.props.quizes.map(quiz => (
        <li
          key={quiz.id}
        >
          <NavLink to={'/quiz/' + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
    ));
  }

  componentDidMount() {
    this.props.fetchQuizes();
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>

          {this.props.loading && this.props.quizes.length !== 0
            ? <Loader />
            : (
              <ul>
                {this.renderQuizes()}
              </ul>
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quiz: { quizes, loading } }) => ({
  quizes,
  loading,
});

const mapDispatchToProps = {
  fetchQuizes,
};

QuizList.propTypes = {
  quizes: PropTypes.array,
  fetchQuizes: PropTypes.func,
  loading: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
