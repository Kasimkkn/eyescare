import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section class="heading">
        <h1>contact us</h1>
        <p>
          {" "}
          <Link to="home">home</Link> {">>"} contact{" "}
        </p>
      </section>

      <section class="contact">
        <h1 class="title"> get in touch </h1>

        <div class="row">
          <form action="">
            <input type="text" placeholder="your name" class="box" />
            <input type="number" placeholder="your number" class="box" />
            <input type="email" placeholder="your email" class="box" />
            <textarea
              name=""
              placeholder="your message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="send message" class="btn" />
          </form>

          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.89592087332!2d72.8319697277345!3d19.14167056419224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1636210664473!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
