import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createUser, createUserSuccess, createUserFailed } from '../actions'
import websocket from '../websocket'
import RegisterForm from '../components/RegisterForm'
import LoadingScreen from '../components/LoadingScreen'

class Register extends React.Component {
  componentDidMount() {
    this.subscription = websocket.subscriptions.create('UsersChannel', {
      received: (data) => {
        if (data.operation === 'createUser') {
          switch (data.status) {
            case 'success':
              return this.props.dispatch(createUserSuccess(data.response))
            case 'failed':
              return this.props.dispatch(createUserFailed(data.response))
            default:
              // do nothing
          }
        }
      }
    })
  }

  componentWillUnmount() {
    this.subscription.unsubscribe()
  }

  createUser(params) {
    this.subscription.perform('createUser', params)
    this.props.dispatch(createUser())
  }

  render() {
    const { isFetching, status, response, errors  } = this.props

    if (isFetching) {
      return <LoadingScreen />
    } else if (status === 'success') {
      return <h1>{response}</h1>
    } else {
      return (
        <div>
        {status === 'failed' && errors.map((error, index) => {
          return <p key={index}>{error}</p>
        })}
          <RegisterForm createUser={this.createUser.bind(this)} />
        </div>
      )
    }
  }
}

Register.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  status: PropTypes.string,
  response: PropTypes.string,
  errors: PropTypes.array
}

function mapStateToProps(state) {
  return state.register
}

export default connect(mapStateToProps)(Register)
