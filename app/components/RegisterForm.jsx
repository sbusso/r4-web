import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  button: {
    margin: '10px'
  }
}

const RegisterForm = ({ createUser }) => (
  <div>
    <h1>Register Form</h1>
    <TextField floatingLabelText="Email" id='RegisterFormEmail' /><br />
    <TextField floatingLabelText="Password" id='RegisterFormPassword' type="password" /><br />
    <RaisedButton 
      label="Register" 
      primary={true} 
      style={style.button} 
      onClick={() => {
        createUser({
          email: document.getElementById('RegisterFormEmail').value,
          password: document.getElementById('RegisterFormPassword').value
        })
        }
      }
    />
    <RaisedButton 
      label="Login" 
      secondary={true} 
      style={style.button} 
      linkButton={true}
      containerElement={<Link to='/login' />}
    />
  </div>
)

RegisterForm.propTypes = {
  createUser: PropTypes.func.isRequired
}

export default RegisterForm
