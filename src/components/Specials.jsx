import { FaMotorcycle } from "react-icons/fa";

const Specials = () => {
  return (
    <section className="specials">
      <h1>Specials</h1>
      <div className="specials-div">
        <article>
          <img src="greek salad.jpg" alt="" />
          <div className="content">
            <div className="special-title">
              <h2>Greek Salad</h2>
              <h3>19.99$</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              neque? Provident, explicabo dignissimos? Molestiae assumenda
              voluptas iste qui, itaque ab.
            </p>
            <div className="icon-div">
              <button>Order a Delivery </button>
              <FaMotorcycle />
            </div>
          </div>
        </article>
        <article>
          <img src="brusheta.jpg" alt="" />
          <div className="content">
            <div className="special-title">
              <h2>Greek Salad</h2>
              <h3>19.99$</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              neque? Provident, explicabo dignissimos? Molestiae assumenda
              voluptas iste qui, itaque ab.
            </p>
            <div className="icon-div">
              <button>Order a Delivery </button>
              <FaMotorcycle />
            </div>
          </div>
        </article>
        <article>
          <img src="lemon dessert.jpg" alt="" />
          <div className="content">
            <div className="special-title">
              <h2>Greek Salad</h2>
              <h3>19.99$</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              neque? Provident, explicabo dignissimos? Molestiae assumenda
              voluptas iste qui, itaque ab.
            </p>
            <div className="icon-div">
              <button>Order a Delivery </button>
              <FaMotorcycle />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Specials;
