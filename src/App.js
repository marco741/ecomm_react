import "./assets/css/fonts.css";
import "./assets/css/App.css";
import "./assets/css/slider.css";

import React, { useState } from "react";
import Header from "./components/layout/Header.js";
import Carrello from "./components/Carrello/Carrello.js";
import Shop from "./components/Shop/Shop.js";
import Slider from "./components/Slider";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [totale, setTotale] = useState(0);
  const [items, setItems] = useState([
    {
      img: "https://i.kym-cdn.com/entries/icons/original/000/021/807/4d7.png",
      text: "Questa è la prima descrizione",
      price: "10.00",
      quantity: 0
    },
    {
      img: "https://i.kym-cdn.com/entries/icons/original/000/021/807/4d7.png",
      text: "Questa è la seconda descrizione",
      price: "20.00",
      quantity: 0
    },
    {
      img: "https://i.kym-cdn.com/entries/icons/original/000/021/807/4d7.png",
      text: "Questa è la terza descrizione",
      price: "14.99",
      quantity: 0
    },
    {
      img: "https://i.kym-cdn.com/entries/icons/original/000/021/807/4d7.png",
      text: "Questa è la quarta descrizione",
      price: "7.89",
      quantity: 0
    }
  ]);

  const buyItem = index => {
    const newItems = items.map((item, i) => {
      if (i === index) {
        item.quantity++;
        console.log(`${i}: ${item.quantity}`);
      }
      return item;
    });
    setItems(newItems);
    calcTot();
  };

  const removeItem = index => {
    const newItems = items.map((item, i) => {
      if (i === index && item.quantity > 0) {
        item.quantity--;
        console.log(`${i}: ${item.quantity}`);
      }
      return item;
    });
    setItems(newItems);
    calcTot();
  };

  //avrei voluto metterlo in CarrelloTotale.js
  const calcTot = () => {
    let newTotale = 0;
    items.forEach(item => {
      newTotale += item.quantity * item.price;
    });
    newTotale = Math.abs(newTotale.toFixed(2));
    setTotale(newTotale);
  };
  //-----------

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="App">
      <Router basename="/ecomm_react">
        <Header />
        <Route exact path="/" render={() => <Slider />} />
        <Route
          path="/carrello"
          render={() => (
            <Carrello
              totale={totale}
              items={items}
              buyItem={buyItem}
              removeItem={removeItem}
              refreshPage={refreshPage}
            />
          )}
        />

        <Route
          path="/shop"
          render={() => (
            <Shop items={items} buyItem={buyItem} removeItem={removeItem} />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
