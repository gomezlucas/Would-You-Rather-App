
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux"
import {logoutAuthedUser} from '../actions/authedUser'


class Navegation extends React.Component {

    handleOnClick = () => {
        const { dispatch } = this.props

        dispatch(logoutAuthedUser())
     }


    render() {
        const { authedUser } = this.props
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
                <LinkContainer to="/">
                    <Navbar.Brand >Would you Rather? </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" activeKey="">
                        <LinkContainer to="/add">
                            <Nav.Link >New Question</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/leaderboard">
                            <Nav.Link >Leaderboard</Nav.Link>
                        </LinkContainer>

                    </Nav>
                    <Nav>
                        <Nav.Link disabled> {authedUser}</Nav.Link>
                        <Nav.Link onClick={this.handleOnClick}  >
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Navegation);

