import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  button: {
    margin: '10px'
  }
}

const LoginForm = ({ loginUser }) => (
  <div>
    <h1>Login Form</h1>
    <TextField floatingLabelText="Email" id='login-email' /><br />
    <TextField floatingLabelText="Password" type="password" id='login-password' /><br />
    <RaisedButton 
      label="Login" 
      primary={true} 
      style={style.button} 
      onClick={() => loginUser(
        document.getElementById('login-email').value,
        document.getElementById('login-password').value
      )}
    />
    <RaisedButton 
      label="Register" 
      secondary={true} 
      style={style.button} 
      linkButton={true}
      containerElement={<Link to='/register' />}
    />
  </div>
)

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired
}

export default LoginForm
