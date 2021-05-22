import {
    RECEIVE_QUESTIONS,
} from '../actions/questions'
import {ADD_ANSWER, ADD_QUESTION} from '../actions/shared'



export default function questions(state = {}, action) {

    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_ANSWER:
            const { answerObj } = action
             return {
                ...state,
                [answerObj.qid]: {
                    ...state[answerObj.qid],
                    [answerObj.answer]: {
                        ...state[answerObj.qid][answerObj.answer],
                        votes: [...state[answerObj.qid][answerObj.answer].votes, answerObj.authedUser]
                    }
                }
            }
        case ADD_QUESTION:
            const { question } = action
             return {
                ...state,
                [question.id]: {
                    ...state[question.author], ...question
                }
            }
        default:
            return state
    }

}