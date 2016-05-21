import React from 'react'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  button: {
    margin: '10px'
  }
}

const RegisterForm = () => (
  <div>
    <h1>Register Form</h1>
    <TextField floatingLabelText="Email" /><br />
    <TextField floatingLabelText="Password" type="password" /><br />
    <RaisedButton label="Register" primary={true} style={style.button} />
    <RaisedButton 
      label="Login" 
      secondary={true} 
      style={style.button} 
      linkButton={true}
      containerElement={<Link to='/login' />}
    />
  </div>
)

export default RegisterForm
