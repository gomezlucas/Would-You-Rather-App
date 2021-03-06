import { RECEIVE_USERS } from '../actions/users'
import {ADD_ANSWER, ADD_QUESTION} from  '../actions/shared'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_ANSWER:
            const { answerObj } = action
            return {
                ...state,
                [answerObj.authedUser]: {
                    ...state[answerObj.authedUser],
                    answers: {
                        ...state[answerObj.authedUser].answers,
                        [answerObj.qid]: answerObj.answer
                    }
                }
            }
        case ADD_QUESTION:
            const { question } = action
             return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: [...state[question.author].questions, question.id]
                }
            }          
        default:
            return state
    }
}

