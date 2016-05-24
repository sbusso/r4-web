import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createUser, createUserSuccess, createUserFailed } from '../actions'
import websocket from '../websocket'
import RegisterForm from '../components/RegisterForm'
import LoadingScreen from '../components/LoadingScreen'

class Register extends React.Component {
  componentDidMount() {
    this.subscription = websocket.subscriptions.create('UsersChannel', {
      received: (response) => {
        if (response.operation === 'create') {
          switch (response.status) {
            case 'success':
              return this.props.dispatch(createUserSuccess(response.data))
            case 'fail':
              return this.props.dispatch(createUserFailed(response.data))
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
    this.subscription.perform('create', params)
    this.props.dispatch(createUser())
  }

  render() {
    const { isFetching, status, data } = this.props

    if (isFetching) {
      return <LoadingScreen />
    } else if (status === 'success') {
      return <h1>{JSON.stringify(data)}</h1>
    } else {
      return (
        <div>
          {status === 'fail' && JSON.stringify(data)}
          <RegisterForm createUser={this.createUser.bind(this)} />
        </div>
      )
    }
  }
}

Register.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  status: PropTypes.string,
  data: PropTypes.object
}

function mapStateToProps(state) {
  return state.register
}

export default connect(mapStateToProps)(Register)
