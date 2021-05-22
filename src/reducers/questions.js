import {
    RECEIVE_QUESTIONS,
    ADD_ANSWER_TO_QUESTIONS,
    ADD_QUESTION_TO_QUESTIONS
} from '../actions/questions'



export default function questions(state = {}, action) {

    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }

        case ADD_ANSWER_TO_QUESTIONS:
            const { question } = action
             return {
                ...state,
                [question.qid]: {
                    ...state[question.qid],
                    [question.answer]: {
                        ...state[question.qid][question.answer],
                        votes: [...state[question.qid][question.answer].votes, question.authedUser]
                    }
                }

            }
        case ADD_QUESTION_TO_QUESTIONS:
             return {
                ...state,
                [action.question.id]: {
                    ...state[action.question.author], ...action.question
                }
            }

        default:
            return state
    }

}