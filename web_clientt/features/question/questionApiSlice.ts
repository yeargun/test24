import { apiSlice } from "utils/api/apiSlice";
export const questionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNextQuestion: builder.mutation({
      query: (credentials) => ({
        url: "/question/next",
        method: "GET",
      }),
    }),
    sendAnswer: builder.mutation({
      query: (answerDetails) => ({
        url: "/question/sendAnswer",
        method: "POST",
        body: { ...answerDetails },
      }),
    }),
  }),
});

export const { useSendAnswerMutation, useGetNextQuestionMutation } =
  questionApiSlice;
