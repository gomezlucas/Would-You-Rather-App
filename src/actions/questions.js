

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_ANSWER_TO_QUESTIONS = 'ADD_ANSWER_TO_QUESTIONS'
export const ADD_QUESTION_TO_QUESTIONS = 'ADD_QUESTION_TO_QUESTIONS'


export function receiveQuestions(questions) {
   return {
      type: RECEIVE_QUESTIONS,
      questions
   }
}


export function addAnswerToQuestions(question) {
   return {
      type: ADD_ANSWER_TO_QUESTIONS,
      question
   }
}

export function addQuestionToQuestions(question) {
   return {
      type: ADD_QUESTION_TO_QUESTIONS,
      question
   }
}
