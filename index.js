import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Menu</h2>
      <p>
        Authentic Italic cusine . 6 creative dishes to choose from all from our
        stonr oven , all organic ,all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      l
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Header() {
  return (
    <header className="header ">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  const isopen = hour >= openhour && hour <= closehour;
  console.log(isopen);
  return (
    <footer className="footer">
      {isopen ? (
        <Order closehour={closehour} />
      ) : (
        <p>we are to come between {openhour}</p>
      )}
    </footer>
  );
  function Order({ closehour }) {
    return (
      <div className="order">
        <p>We're open untill {closehour}:00.Come visit us or order online</p>
        <button className="btn">Order</button>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
