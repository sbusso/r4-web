import React from 'react'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  button: {
    margin: '10px'
  }
}

const LoginForm = () => (
  <div>
    <h1>Login Form</h1>
    <TextField floatingLabelText="Email" /><br />
    <TextField floatingLabelText="Password" type="password" /><br />
    <RaisedButton label="Login" primary={true} style={style.button} />
    <RaisedButton 
      label="Register" 
      secondary={true} 
      style={style.button} 
      linkButton={true}
      containerElement={<Link to='/register' />}
    />
  </div>
)

export default LoginForm