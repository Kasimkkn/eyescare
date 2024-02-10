import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <section className="footer">

<div className="box-container">

    <div className="box">
        <h3>quick links</h3>
        <Link to="/"> <i className="fas fa-angle-right"></i> home</Link>
        <Link to="products"> <i className="fas fa-angle-right"></i> products</Link>
        <Link to="about"> <i className="fas fa-angle-right"></i> about</Link>
        <Link to="blogs"> <i className="fas fa-angle-right"></i> blogs</Link>
        <Link to="contact"> <i className="fas fa-angle-right"></i> contact</Link>
        <Link to="login"> <i className="fas fa-angle-right"></i> login</Link>
        <Link to="register"> <i className="fas fa-angle-right"></i> register</Link>
        <Link to="cart"> <i className="fas fa-angle-right"></i> cart</Link>
    </div>

    <div className="box">
        <h3>extra links</h3>
        <Link to="#"> <i className="fas fa-angle-right"></i> my account </Link>
        <Link to="#"> <i className="fas fa-angle-right"></i> my order </Link>
        <Link to="#"> <i className="fas fa-angle-right"></i> my wishlist </Link>
        <Link to="#"> <i className="fas fa-angle-right"></i> terms of use </Link>
        <Link to="#"> <i className="fas fa-angle-right"></i> privacy policy </Link>
    </div>

    <div className="box">
        <h3>follow us</h3>
        <Link to="#"> <i className="fab fa-facebook-f"></i> facebook </Link>
        <Link to="#"> <i className="fab fa-twitter"></i> twitter </Link>
        <Link to="#"> <i className="fab fa-instagram"></i> instagram </Link>
        <Link to="#"> <i className="fab fa-pinterest"></i> pinterest </Link>
        <Link to="#"> <i className="fab fa-linkedin"></i> linkedin </Link>
        <Link to="#"> <i className="fab fa-github"></i> github </Link>
    </div>

    <div className="box">
        <h3>newsletter</h3>
        <p>subscribe for latest updates</p>
        <form action="">
            <input type="email" placeholder="enter your email" />
            <input type="submit" value="subscribe" className="btn" />
        </form>
    </div>

</div>

<div className="credit"> created by <span>kk</span> | all rights reserved </div>

</section>


    </>
  )
}

export default Footer