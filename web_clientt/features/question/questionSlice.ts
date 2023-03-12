import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    question: undefined,
    isLoadingQuestion: false,
    isLoadingAnswer: false,
    rightChoiceId: undefined,
    explanation: undefined,
    questionId: undefined,
    questionText: undefined,
    choices: undefined,
    concepts: undefined,
  },
  reducers: {
    // ####
    getQuestionFetch: (state) => {
      state.isLoadingQuestion = true;
    },
    setNextQuestionReducer: (state, action) => {
      state = { ...state, ...action.payload };
      state.isLoadingQuestion = false;
    },
    getQuestionError: (state) => {
      state.isLoadingQuestion = false;
    },
    // ####
    answerQuestionFetch: (state) => {
      state.isLoadingAnswer = true;
    },
    answerQuestionSuccess: (state, action) => {
      state.rightChoiceId = action.payload.rightChoiceId;
      state.explanation = action.payload.explanation;
      state.isLoadingAnswer = false;
    },
    answerQuestionError: (state) => {
      state.isLoadingAnswer = false;
    },
    // ####
  },
});

export const {
  getQuestionFetch,
  getQuestionError,
  setNextQuestionReducer,
  answerQuestionError,
  answerQuestionFetch,
  answerQuestionSuccess,
} = questionSlice.actions;
export default questionSlice.reducer;

export const selectCurrentUser = (state) => state.auth.username;
export const selectCurrentToken = (state) => state.auth.token;
export const selectNextQuestion = (state) => state.question;
