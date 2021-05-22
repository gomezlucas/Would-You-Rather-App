import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Navegation from './Navegation'
import Leaderboard from './Leaderboard'
import Question from './Question'
import NewQuestion from './NewQuestion'
import My404Component from './My404Component'
 import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props
    return (
      <Router>
        {
          authedUser ?
          <Fragment>
              <Navegation />
               <Switch>
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/questions/:id' component={Question} />
              <Route exact path='/' component={Home} />
              <Route component={My404Component} />
              </Switch>
            </Fragment>
            :
            <Login />
         }
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {

  return { authedUser }
}

export default connect(mapStateToProps)(App)
