import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import QuestionCard from './QuestionCard'
import { connect } from 'react-redux'

class Home extends Component {
    state = {
        column: 'unanswered'
    }

    render() {
        const { answered, unAnswered } = this.props
        return (
            <Container className='mt-5' >
                <Nav fill variant="tabs"
                    activeKey={this.state.column}
                    onSelect={(selectedKey) => this.setState(prevState => ({
                        column: selectedKey
                    }))}>
                    <Nav.Item>
                        <Nav.Link eventKey="unanswered" title="Item">
                            Unanswered Questions
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="answered" title="Item"  >
                            Answered Questions
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
                <CardDeck className='my-5' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {this.state.column === 'unanswered' && unAnswered.length === 0 && (<h3 className="ml-3"> No Questions here, create your own </h3>)}
                    {this.state.column === 'unanswered' && unAnswered.map(id => { return <QuestionCard id={id} key={id} /> })}
                    {this.state.column === 'answered' && answered.length === 0 && (<h3 className="ml-3"> No Anwers here yet</h3>)}
                    {this.state.column === 'answered' && answered.map(id => { return <QuestionCard id={id} key={id} /> })}
                </CardDeck>
            </Container>
        )
    }
}


function mapStateToProps({ questions, authedUser }) {
    const questionsIds = Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    const answered = questionsIds.filter(id =>
        questions[id].optionOne.votes.includes(authedUser) ||
        questions[id].optionTwo.votes.includes(authedUser)
    )

    const unAnswered = questionsIds.filter(id =>
        !questions[id].optionOne.votes.includes(authedUser) &&
        !questions[id].optionTwo.votes.includes(authedUser)
    )


    return {
        answered,
        unAnswered
    }
}


export default connect(mapStateToProps)(Home)