import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import LoadingScreen from '../components/LoadingScreen'
import websocket from '../websocket'
import { loginUser, loginUserSuccess, loginUserFailed } from '../actions'

class Login extends React.Component {
  componentDidMount() {
    this.subscription = websocket.subscriptions.create('UsersChannel', {
      received: (response) => {
        if (response.operation === 'login') {
          switch(response.status) {
            case 'success':
              document.cookie = `token=${response.data.token}`
              websocket.disconnect()
              websocket.connect()
              return this.props.dispatch(loginUserSuccess(response.data))
            case 'fail':
              return this.props.dispatch(loginUserFailed(response.data))
          }
        }
      }
    })
  }

  componentWillUnmount() {
    this.subscription.unsubscribe()
  }

  loginUser(email, password) {
    this.subscription.perform('login', {email: email, password: password})
    this.props.dispatch(loginUser())
  }

  render() {
    const { isFetching, status, token, data } = this.props

    if (isFetching) {
      return <LoadingScreen />
    } else if (status === 'success') {
      return <p>Your token is {token}</p>
    } else {
      return (
        <div>
          {status === 'fail' && <p>{JSON.stringify(data)}</p>}
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
  data: PropTypes.object
}

function mapStateToProps(state) {
  return state.login
}

export default connect(mapStateToProps)(Login)
