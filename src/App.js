import "./assets/css/fonts.css";
import "./assets/css/App.css";
import "./assets/css/slider.css";

import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header.js";
import Carrello from "./components/Carrello/Carrello.js";
import Shop from "./components/Shop/Shop.js";
import Slider from "./components/Slider";
import { BrowserRouter as Router, Route } from "react-router-dom";
export const CarrelloContext = React.createContext([]);

function App() {
  const [totale, setTotale] = useState(0);
  const [items, setItems] = useState([]);
  const [carrelloItems, setCarrelloItems] = useState([]);

  //Fetch
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(
        "https://5db179198087400014d38a73.mockapi.io/api/v1/products"
      );
      setItems(await res.json());
    };
    fetchdata();
  }, []);

  //Calcolo Totale
  useEffect(() => {
    setTotale(
      carrelloItems.reduce((accumulator, carrelloItem) => {
        return accumulator + carrelloItem.quantity * carrelloItem.cost;
      }, 0)
    );
  }, [carrelloItems]);

  const buyItem = id => {
    let found = false;
    carrelloItems.forEach(carrelloItem => {
      if (carrelloItem.id === id) {
        carrelloItem.quantity++;
        found = true;
      }
    });
    if (found) setCarrelloItems([...carrelloItems]);
    else setCarrelloItems([...carrelloItems, { ...getItem(id), quantity: 1 }]);
  };

  const getItem = id => {
    return items.find(item => item.id === id);
  };

  const removeItem = id => {
    carrelloItems.forEach(carrelloItem => {
      if (carrelloItem.id === id) {
        carrelloItem.quantity--;
      }
      return carrelloItem;
    });
    setCarrelloItems(
      carrelloItems.filter(carrelloItem => carrelloItem.quantity > 0)
    );
  };

  const checkout = () => {
    setCarrelloItems([]);
    setTotale(0);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path={["/", "/ecomm_react"]} render={() => <Slider />} />
        <Route
          path="/carrello"
          render={() => (
            <Carrello
              totale={totale}
              carrelloItems={carrelloItems}
              buyItem={buyItem}
              removeItem={removeItem}
              checkout={checkout}
            />
          )}
        />
        <CarrelloContext.Provider value={carrelloItems}>
          <Route
            path="/shop"
            render={() => (
              <Shop items={items} buyItem={buyItem} removeItem={removeItem} />
            )}
          />
        </CarrelloContext.Provider>
      </Router>
    </div>
  );
}

export default App;
