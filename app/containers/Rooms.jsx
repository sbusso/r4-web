import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Room from '../components/Room'

class RoomsContainer extends React.Component {
  render() {
    const { rooms } = this.props

    if (rooms.length === 0) {
      return <p>No Chatroom Available.</p>
    } else {
      return (
        <div>
          {rooms.map((room) => { 
            return <Room key={room.id} {...room} />
          })}
        </div>
      )
    }
  }
}

RoomsContainer.propTypes = {
  rooms: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(RoomsContainer)
