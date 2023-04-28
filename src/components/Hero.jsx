import React from "react";

const Hero = () => {
  return (
    <article className="hero">
      <section className="title">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis
          facilis numquam illum veritatis minima consequuntur sunt illo
          molestias dicta?
        </p>
        <button className="booking">Reserve a Table</button>
      </section>
      <section className="img">
        <img src="restauranfood.jpg" alt="rest" />
        <button className="online-menu">Online Menu</button>
      </section>
    </article>
  );
};

export default Hero;
