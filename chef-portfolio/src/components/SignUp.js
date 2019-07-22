import React from 'react';

class SignUp extends React.Component {
  state = {
    username: '',
    email: '',
  }
  
  render() {

    return (
      <div className='signup-form'>
        <label>
          Username:
          <input type='text' name='username'/>
        </label>
        <label>
          Password:
          <input type='password' name='password'/>
        </label>
      </div>
    );
  }
}

export default SignUp;