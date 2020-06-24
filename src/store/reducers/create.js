import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from '../actions/actionTypes';

const initialState = {
  quiz: [],
};

const createQuizQuestion = (state, { payload: { item } }) => ({
  ...state,
  quiz: [...state.quiz, item],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_QUIZ_QUESTION:
      return createQuizQuestion(state, action);

    case RESET_QUIZ_CREATION:
      return initialState;

    default:
      return state;
  }
};
