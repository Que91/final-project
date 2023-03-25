import React from 'react'

function SignIn() {
  return (
    <>
    <h1>Login</h1>
    <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button className='btns' id='logInBtn'>Log In</button>
        <button className='btns' id='signUpBtn'>Sign Up</button>
    </form>
    </>
  )
}

export default SignIn