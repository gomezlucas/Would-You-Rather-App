import React from 'react';
import LeaderboardRow from './LeaderboardRow';
import Table from 'react-bootstrap/Table'

function Leaderboard() {
    return (
        <Table striped bordered hover variant="dark" className="mt-5 text-center">
            <thead>
                <tr>
                    <th> User </th>
                    <th> Answered </th>
                    <th>Created</th>
                    <th> Score</th>
                </tr>
            </thead>
            <tbody>
                <LeaderboardRow />
            </tbody>
        </Table >
    )
}


export default Leaderboard


