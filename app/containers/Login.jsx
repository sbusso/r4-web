import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import LoadingScreen from '../components/LoadingScreen'
import websocket from '../websocket'
import { loginUser, loginUserSuccess, loginUserFailed } from '../actions'

class Login extends React.Component {
  componentDidMount() {
    this.subscription = websocket.subscriptions.create('UsersChannel', {
      received: (data) => {
        if (data.operation === 'loginUser') {
          switch(data.status) {
            case 'success':
              return this.props.dispatch(loginUserSuccess(data.response.token))
            case 'failed':
              return this.props.dispatch(loginUserFailed(data.response))
          }
        }
      }
    })
  }

  componentWillUnmount() {
    this.subscription.unsubscribe()
  }

  loginUser(email, password) {
    this.subscription.perform('loginUser', {email: email, password: password})
    this.props.dispatch(loginUser())
  }

  render() {
    const { isFetching, status, token, error } = this.props

    if (isFetching) {
      return <LoadingScreen />
    } else if (status === 'success') {
      return <p>Your token is {token}</p>
    } else {
      return (
        <div>
          {status === 'failed' && <p>{error}</p>}
          <LoginForm loginUser={this.loginUser.bind(this)} />
        </div>
      )
    }
  }
}

Login.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  status: PropTypes.string,
  token: PropTypes.string,
  error: PropTypes.string
}

function mapStateToProps(state) {
  return state.login
}

export default connect(mapStateToProps)(Login)
