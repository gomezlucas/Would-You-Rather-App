import React, { Component } from 'react'
import {
    Form,
} from 'react-bootstrap'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    state = {
        userLogin: null
    }

    handleChange = (e) => {
        const { value } = e.target
        if (value !== '') {
            this.setState(() => ({
                userLogin: value
            }))
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props
        const { userLogin } = this.state
        dispatch(setAuthedUser(userLogin))
    }

    render() {
        const { usersId } = this.props
        const showUsers = usersId.map(user => <option key={user} value={user}> {user} </option>)
        return (
            <div>
                <Container className='py-5 text-center header-login' >

                    <h1 className='center'> Welcome to the Would you rather App!</h1>
                    <h3 className='center'> Choose your user to Start to Play </h3>
                </Container>
                <Container className="login-container d-flex flex-column justify-content-center ">
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Choose your User</Form.Label>
                            <Form.Control as="select" onChange={this.handleChange}>
                                <option value="">Select option</option>
                                {showUsers}
                            </Form.Control>
                        </Form.Group>
                        <Button variant="dark" type="submit" className="my-1" >
                            Login
               </Button>
                    </Form>
                </Container>

            </div>
        )
    }

}

function mapStateToProps({ users }) {
     const usersId = Object.keys(users)
    return { usersId }
}

export default connect(mapStateToProps)(Login)