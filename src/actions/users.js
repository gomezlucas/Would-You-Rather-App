

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_TO_USERS = 'ADD_ANSWER_TO_USERS'
export const ADD_QUESTION_TO_USERS = 'ADD_QUESTION_TO_USERS'


export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}


export function AddQuestionToUsers(info) {
    return {
        type: ADD_QUESTION_TO_USERS,
        info
    }
}


export function addAnswerToUsers(question) {
    return {
        type: ADD_ANSWER_TO_USERS,
        question
    }
}



