import {
  FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERROR, FETCH_QUIZ_SUCCESS, QUIZ_SET_STATE, FINISH_QUIZ, QUIZ_NEXT_QUESTION, QUIZ_RETRY,
} from '../actions/actionTypes';

const initialState = {
  quizes: [],
  loading: false,
  error: null,
  results: {}, // {[id]: success error}
  isFinished: false,
  activeQuestion: 0,
  answerState: null, // { [id]: 'success' 'error' }
  quiz: null,
};

const fetchQuizesStart = (state) => ({
  ...state,
  loading: true,
});

const fetchQuizesSuccess = (state, { payload: { quizes } }) => ({
  ...state,
  loading: false,
  quizes,
});

const fetchQuizesError = (state, { error }) => ({
  ...state,
  loading: false,
  error,
});

const fetchQuizSuccess = (state, { payload: { quiz } }) => ({
  ...state,
  loading: false,
  quiz,
});

const quizSetState = (state, { payload: { answerState, results } }) => ({
  ...state,
  answerState,
  results,
});

const finishQuiz = (state) => ({
  ...state,
  isFinished: true,
});

const quizNextQuestion = (state, { payload: { number } }) => ({
  ...state,
  answerState: null,
  activeQuestion: number,
});

const quizRetry = (state) => ({
  ...state,
  activeQuestion: 0,
  answerState: null,
  isFinished: false,
  results: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZES_START:
      return fetchQuizesStart(state);

    case FETCH_QUIZES_SUCCESS:
      return fetchQuizesSuccess(state, action);

    case FETCH_QUIZES_ERROR:
      return fetchQuizesError(state, action);

    case FETCH_QUIZ_SUCCESS:
      return fetchQuizSuccess(state, action);

    case QUIZ_SET_STATE:
      return quizSetState(state, action);

    case FINISH_QUIZ:
      return finishQuiz(state);

    case QUIZ_NEXT_QUESTION:
      return quizNextQuestion(state, action);

    case QUIZ_RETRY:
      return quizRetry(state);

    default:
      return state;
  }
};
