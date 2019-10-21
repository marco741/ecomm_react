import React from "react";

function ShopItem(props) {
  const { img, text, price, quantity } = props.item;

  return (
    <div className="shop__item">
      <img src={img} alt="img" />
      <p>{`Descrizione: ${text}`}</p>
      <p className="shop__item__price">{`Price: ${price} €`}</p>
      <button
        className="shop__item__add"
        onClick={() => props.buyItem(props.index)}
      >
        Aggiungi al carrello
      </button>
      <div className="shop__item__box">
        <p>{`Quantità prodotto${props.index + 1}: ${quantity}`}</p>
        <button
          className="shop__item__remove"
          onClick={() => props.removeItem(props.index)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default ShopItem;
