import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { Redirect } from 'react-router-dom'


class NewQuestion extends Component {
    state = {
        text1: '',
        text2: '',
        toHome: false
    }

    handleChange = (e) => {
        const text = e.target.value
        const name = e.target.name

        this.setState(() => ({
            [name]: text
        }))
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        const { text1, text2 } = this.state
        const { authedUser, dispatch } = this.props
        dispatch(handleAddQuestion(authedUser, text1, text2))

        this.setState(() => ({
            text1: '',
            text2: '',
            toHome: true
        }))
    }


    render() {
        const {toHome} = this.state

        if (toHome) {
             return <Redirect  to='/'/>
        }

        return (
            <Container className='py-5' >
                <h3 className='text-center mb-5'> Create your Own Question </h3>

                <h4 > Would you rather? </h4>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="option1">
                        <Form.Label>Option 1</Form.Label>
                        <Form.Control type="text" placeholder="Enter Option 1"
                            onChange={this.handleChange}
                            name='text1'
                        />
                    </Form.Group>
                    <Form.Text className="text-muted my-2">
                        OR
                    </Form.Text>
                    <Form.Group controlId="option2">
                        <Form.Label>Option 2</Form.Label>
                        <Form.Control type="text" placeholder="Enter Option 2"
                            onChange={this.handleChange}
                            name='text2'

                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={this.state.text1 === '' || this.state.text2 === ''}>
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}


function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)