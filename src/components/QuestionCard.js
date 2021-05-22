import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'

class QuestionCard extends Component {
    render() {
        const { author, avatarURL, id, text } = this.props
        return (
            <Card className='question-card mx-auto mt-5' >
                <Card.Header className='text-capitalize'>User Says {`${author}`}</Card.Header>
                <Card.Img className='question-image' variant="top" src={`${avatarURL}`} />
                <Card.Body>
                    <Card.Title>Would you rather? </Card.Title>
                    <Card.Text className="question-card-text">
                        {`...${text}`}
                     </Card.Text>
                    <LinkContainer to={`/questions/${id}`}>
                        <Button variant="dark">View Poll</Button>
                    </LinkContainer>

                </Card.Body>
            </Card>
        )
    }
}


function mapStateToProps({ questions, users }, {id}) {
    const question = questions[id]
    const { text} = question.optionOne
     const { avatarURL } = users[question.author]
     return ({
        id,
        author: question.author,
        avatarURL, 
        text
    })
}

export default connect(mapStateToProps)(QuestionCard)