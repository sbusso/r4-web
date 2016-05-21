import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  button: {
    marginTop: '10px'
  }
}
const RegisterForm = () => (
  <div>
    <h1>Register Form</h1>
    <TextField floatingLabelText="Email" /><br />
    <TextField floatingLabelText="Password" type="password" /><br />
    <RaisedButton label="Register" primary={true} style={style.button} />
  </div>
)

export default RegisterForm
