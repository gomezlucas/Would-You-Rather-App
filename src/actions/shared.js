import { getInitialData } from '../utils/api'
import { saveQuestionAnswer } from '../utils/api'
import { saveQuestion } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
 /*import { AddQuestionToUsers } from './users'
 import { addQuestionToQuestions } from './questions'*/

export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function handleInitialData() {
    return (dispatch) => {

        return (getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
            })
        )
    }
}



function addAnswer(answerObj) {
    return {
        type: ADD_ANSWER,
        answerObj
    }
}

export function handleAddAnswer(id, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const answerObj = {
            authedUser,
            qid: id,
            answer
        }
        return saveQuestionAnswer(
            answerObj
        )
            .then(() => {
                dispatch(addAnswer(answerObj))
             })
            .catch(error => console.log(error))
    }
}


 function addQuestion(question) {
    return {
       type: ADD_QUESTION,
       question
    }
 }


export function handleAddQuestion(author, optionOneText, optionTwoText) {
    return (dispatch) => {
        return saveQuestion({
            author, optionOneText, optionTwoText
        })
            .then((question) => {
                dispatch(addQuestion(question))

            /*    dispatch(AddQuestionToUsers({
                    id, author
                }))
                dispatch(addQuestionToQuestions(question))*/

            })
            .catch(error => console.log(error))
    }
}