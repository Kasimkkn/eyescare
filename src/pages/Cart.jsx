import React from 'react'
import c1 from '../images/cart-item-1.png'
import c2 from '../images/cart-item-2.png'
import c3 from '../images/cart-item-3.png'
import c4 from '../images/cart-item-4.png'
const Cart = () => {
  return (
    <>
    <section class="heading">
    <h1>shopping cart</h1>
    <p> <a href="home.html">home</a> {'>>'} cart </p>
</section>


<section class="shopping-cart">

    <h1 class="title"> your products </h1>

    <div class="box-container">

        <div class="box">
            <i class="fas fa-times"></i>
            <img src={c1} alt=""/>
            <div class="content">
                <h3>premium glasses</h3>
                <form action="">
                    <span>quantity :</span>
                    <input type="number" name="" value="1" id=""/>
                </form>
                <div class="price"> $20.00 <span>$25.00</span> </div>
            </div>
        </div>

        <div class="box">
            <i class="fas fa-times"></i>
            <img src={c2} alt=""/>
            <div class="content">
                <h3>premium glasses</h3>
                <form action="">
                    <span>quantity :</span>
                    <input type="number" name="" value="1" id=""/>
                </form>
                <div class="price"> $20.00 <span>$25.00</span> </div>
            </div>
        </div>

        <div class="box">
            <i class="fas fa-times"></i>
            <img src={c3} alt=""/>
            <div class="content">
                <h3>premium glasses</h3>
                <form action="">
                    <span>quantity :</span>
                    <input type="number" name="" value="1" id=""/>
                </form>
                <div class="price"> $20.00 <span>$25.00</span> </div>
            </div>
        </div>

        <div class="box">
            <i class="fas fa-times"></i>
            <img src={c4} alt=""/>
            <div class="content">
                <h3>premium glasses</h3>
                <form action="">
                    <span>quantity :</span>
                    <input type="number" name="" value="1" id=""/>
                </form>
                <div class="price"> $20.00 <span>$25.00</span> </div>
            </div>
        </div>

    </div>

    <h1 class="title">checkout cart</h1>

    <div class="cart-total">
        <h3>subtotal : <span>$100.00</span></h3>
        <h3>total : <span>$100.00</span></h3>
        <a href="#" class="btn">proceed to checkout</a>
    </div>

</section>

    </>
  )
}

export default Cart