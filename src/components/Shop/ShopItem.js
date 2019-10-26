import React, { useContext } from "react";
import { CarrelloContext } from "../../App.js";

function ShopItem(props) {
  const { image, name, cost } = props.item;

  const carrelloItems = useContext(CarrelloContext);
  const getCarrelloItem = id => {
    return carrelloItems.find(carrelloItem => carrelloItem.id === id);
  };

  const quantity = !getCarrelloItem(props.id)
    ? 0
    : getCarrelloItem(props.id).quantity;

  return (
    <div className="shop__item">
         <img src={image} alt="img" />
      
      <p>{`Nome: ${name}`}</p>
      
      <p className="shop__item__price">{`Price: ${cost} €`}</p>

      <button
        className="shop__item__add"
        onClick={() => props.buyItem(props.id)}
      >
        Aggiungi al carrello
      </button>

      <div className="shop__item__box">
        <p>{`Quantità prodotto${props.id}: ${quantity}`}</p>
        <button
          className="shop__item__remove"
          onClick={() => props.removeItem(props.id)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default ShopItem;
