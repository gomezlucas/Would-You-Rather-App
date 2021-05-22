import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
import OptionsForm from './OptionsForm'
import Results from './Results'
import { Redirect } from 'react-router-dom'


class Question extends Component {
    render() {
        if (!this.props.question) {
            return <Redirect to='/My404Component' />
        }

        const { avatarURL, author, id, isAnswered } = this.props
        return (

            <Container className='my-5 '>
                <Card className='mx-auto' style={{ width: '18rem' }}>
                    <Card.Header className='text-capitalize'>{`${author} says...`}</Card.Header>
                    <Card.Img variant="top" src={`.${avatarURL}`} />
                    <Card.Body>
                        <Card.Title>Would you rather?</Card.Title>
                        {isAnswered ?
                            <Results id={id} /> :
                            <OptionsForm id={id} />
                        }
                    </Card.Body>
                </Card>
            </Container >
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, props) {
    const { id } = props.match.params
    const question = questions[id]
    const { avatarURL } = question ? users[question.author] : ''
    const { author } = question ? question : ''
    const isAnswered = users && question && authedUser ? Object.keys(users[authedUser].answers).includes(question.id) : ''
    return {
        avatarURL,
        author,
        id,
        isAnswered,
        question
    }
}

export default connect(mapStateToProps)(Question)