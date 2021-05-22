import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { handleAddAnswer } from '../actions/shared'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
 
class OptionsForm extends Component {

    state = {
        optionSelected: 'optionOne'
    }

    handledCheck = (e) => {
        const { value } = e.target
        this.setState(() => ({
            optionSelected: value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const answer = this.state.optionSelected
        const { dispatch, id } = this.props
        dispatch(handleAddAnswer(id, answer))    
    }

    render() {
        const { question } = this.props

        return (
            <Form onSubmit={this.handleSubmit}>
                <div key='default-radio' className="mb-3">
                    <Form.Check
                        type='radio'
                        value='optionOne'
                        label={question && question.optionOne.text}
                        name='options'
                        checked={this.state.optionSelected === 'optionOne'}
                        onChange={this.handledCheck}

                    />
                    <Card.Text className='mt-3'>
                        Or
                </Card.Text>
                    <Form.Check
                        type='radio'
                        value='optionTwo'
                        label={question && question.optionTwo.text}
                        name='options'
                        checked={this.state.optionSelected === 'optionTwo'}
                        onChange={this.handledCheck}
                    />
                </div>
                <Button variant="dark" type="submit">Submit</Button>
            </Form>
        )
    }
}

 
function mapStateToProps({ questions, users, authedUser }, props) {
    const { id } = props
    const question = questions[id]
      return {
        question,
        id,
        authedUser,
    }
}


export default connect(mapStateToProps)(OptionsForm)