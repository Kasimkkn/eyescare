import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
     <section className="heading">
    <h1>account</h1>
    <p> <Link to="/">home</Link> {'>>'} register </p>
</section>


<section className="register-form">

    <form action="">
        <h3>register now</h3>
        <div className="inputBox">
            <span className="fas fa-user"></span>
            <input type="text" name="" placeholder="enter your name" id=""/>
        </div>
        <div className="inputBox">
            <span className="fas fa-envelope"></span>
            <input type="email" name="" placeholder="enter your email" id=""/>
        </div>
        <div className="inputBox">
            <span className="fas fa-lock"></span>
            <input type="password" name="" placeholder="enter your password" id=""/>
        </div>
        <div className="inputBox">
            <span className="fas fa-lock"></span>
            <input type="password" name="" placeholder="confirm your password" id=""/>
        </div>
        <input type="submit" value="sign up" className="btn"/>
        <Link to="login" className="btn">already have an account</Link>
    </form>

</section>

    </>
  )
}

export default Register