import { RECEIVE_USERS, ADD_ANSWER_TO_USERS, ADD_QUESTION_TO_USERS } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_ANSWER_TO_USERS:
            const { question } = action
            return {
                ...state,
                [question.authedUser]: {
                    ...state[question.authedUser],
                    answers: {
                        ...state[question.authedUser].answers,
                        [question.qid]: question.answer
                    }
                }
            }
        case ADD_QUESTION_TO_USERS:
            const { id, author } = action.info
             return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: [...state[author].questions, id]
                }

            }

            

        default:
            return state
    }
}

