import { getInitialData } from '../utils/api'
import { saveQuestionAnswer } from '../utils/api'
import { saveQuestion } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { addAnswerToUsers } from './users'
import { AddQuestionToUsers } from './users'
import { addAnswerToQuestions } from './questions'
import { addQuestionToQuestions } from './questions'


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
                dispatch(addAnswerToUsers(answerObj))
                dispatch(addAnswerToQuestions(answerObj))
            })
            .catch(error => console.log(error))
    }
}


export function handleAddQuestion(author, optionOneText, optionTwoText) {
    return (dispatch) => {
        return saveQuestion({
            author, optionOneText, optionTwoText
        })
            .then((question) => {
                const { id, author } = question
                dispatch(AddQuestionToUsers({
                    id, author
                }))
                dispatch(addQuestionToQuestions(question))

            })
            .catch(error => console.log(error))
    }
}