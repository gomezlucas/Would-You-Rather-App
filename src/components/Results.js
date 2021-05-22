import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'

class Results extends Component {
    render() {
        const { textOne, textTwo, anweredOne, anweredTwo, percentageOne, percentageTwo, userOption } = this.props

        return (
            <>
                <h4> Results </h4>
                <p style={userOption === 'optionOne' ? { color: 'darkBlue', fontWeight: 'bold' } : { color: 'black' }} > {textOne}  {userOption === 'optionOne' && '(Your Choice)'} </p>
                <ProgressBar now={percentageOne} label={`${percentageOne}%`} variant='dark' />
                <p className='text-center'> {anweredOne} Votes </p>
                <p style={userOption === 'optionTwo' ? { color: 'darkBlue', fontWeight: 'bold' } : { color: 'black' }} >  {textTwo} {userOption === 'optionTwo' && '(Your Choice)'} </p>
                <ProgressBar now={percentageTwo} label={`${percentageTwo}%`} variant='dark' />
                <p className='text-center'> {anweredTwo} Votes </p>
            </>
        )
    }

}


function mapStateToProps({ questions, authedUser }, { id }) {
    const question = questions[id]
    let textOne = ''
    let textTwo = ''
    let anweredOne = ''
    let anweredTwo = ''
    let percentageOne = 0
    let percentageTwo = 0
    let userOption = ''

    if (question) {
        textOne = question.optionOne.text
        textTwo = question.optionTwo.text
        anweredOne = question.optionOne.votes.length
        anweredTwo = question.optionTwo.votes.length
        percentageOne = ((anweredOne / (anweredOne + anweredTwo)) * 100).toFixed(2)
        percentageTwo = 100 - percentageOne
        userOption = question.optionOne.votes.includes(authedUser) ? 'optionOne' : 'optionTwo'
    }

    return {
        question, textOne, textTwo, anweredOne, anweredTwo, percentageOne, percentageTwo, userOption
    }
}

export default connect(mapStateToProps)(Results)