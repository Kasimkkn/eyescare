import { Link } from 'react-router-dom'
import ab1 from'../images/about-img.jpg'
import icon1 from'../images/icon-1.png'
import icon2 from'../images/icon-2.png'
import icon3 from'../images/icon-3.png'
import icon4 from'../images/icon-4.png'
import icon5 from'../images/icon-5.png'

const About = () => {
  return (
    <>
    <section className="heading">
    <h1>about us</h1>
    <p> <Link to="home.html">home</Link> {'>>'} about </p>
</section>


<section className="about">

    <h1 className="title">why choose us?</h1>

    <div className="row">

        <div className="image">
            <img src={ab1} alt="" />
        </div>

        <div className="content">
            <h3>the best eye glasses sellers</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In assumenda ut nisi suscipit voluptatum, hic perspiciatis fugit quae quasi quod laudantium doloremque repellat, incidunt minus architecto dolore vero, molestiae quaerat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perferendis necessitatibus exercitationem quam tempore recusandae iure qui, nobis ut aliquam.</p>
            <Link to="#" className="btn">read more</Link>
        </div>
        
    </div>

    <div className="icons-container">

        <div className="icons">
            <img src={icon1} alt="" />
            <h3>all sizes</h3>
        </div>

        <div className="icons">
            <img src={icon2} alt="" />
            <h3>free delivery</h3>
        </div>

        <div className="icons">
            <img src={icon3} alt="" />
            <h3>easy returns</h3>
        </div>

        <div className="icons">
            <img src={icon4} alt="" />
            <h3>easy payments</h3>
        </div>

        <div className="icons">
            <img src={icon5} alt="" />
            <h3>24/7 support</h3>
        </div>

    </div>

</section>

    </>
  )
}

export default About