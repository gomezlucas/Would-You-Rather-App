import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from 'react-bootstrap/Image'


class LeaderboardRow extends Component {
    render() {

        const { leaderboardSorted } = this.props
        const showRows = leaderboardSorted.map(row => {
            return (
                <tr key={row.id}>
                    <td className='text-center'>
                        <p className='text-capitalize'> {row.id} </p>
                        <Image style={{ width: '100px' }} src={row.avatarURL} roundedCircle />
                    </td>
                    <td> {row.answerTotal}</td>
                    <td> {row.questionsTotal}</td>
                    <td>  {row.score}</td>
                </tr>
            )
        })
        return (
            <>
                {showRows}
            </>
        )
    }

}

function mapStateToProps({ users }) {
    let leaderboardSorted = []
    if (users) {
        const usersId = Object.keys(users)
        let leaderboard = usersId.map(id => {
            let answerTotal = Object.keys(users[id].answers).length
            let questionsTotal = users[id].questions.length
            return {
                id,
                answerTotal,
                questionsTotal,
                score: answerTotal + questionsTotal,
                avatarURL: users[id].avatarURL
            }
        })
        leaderboardSorted = leaderboard.sort((a, b) => b.score - a.score)
    }

    return {
        leaderboardSorted
    }
}


export default connect(mapStateToProps)(LeaderboardRow)

/*
the user’s name;
the user’s picture;
the number of questions the user asked; and
the number of questions the user answered.
Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.

*/