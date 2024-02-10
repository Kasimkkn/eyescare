import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <section className="heading">
    <h1>account</h1>
    <p> <Link to="/">home</Link> {'>>'} login </p>
</section>

<section className="login-form">

    <form action="">
        <h3>user login</h3>
        <div className="inputBox">
            <span className="fas fa-user"></span>
            <input type="email" name="" placeholder="enter your email" id="" />
        </div>
        <div className="inputBox">
            <span className="fas fa-lock"></span>
            <input type="password" name="" placeholder="enter your password" id="" />
        </div>
        <input type="submit" value="sign in" className="btn" />
        <div className="flex">
            <input type="checkbox" name="" id="remember-me" />
            <label for="remember-me">remember me</label>
            <Link to="#">forgot password?</Link>
        </div>
        <Link to="register" className="btn">create an account</Link>
    </form>

</section>


    </>
  )
}

export default Login