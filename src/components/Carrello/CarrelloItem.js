import React from "react";

function CarrelloItem(props) {
  return (
    <div className="carrello__item">
      <p className="carrello__item__counter">{`Quantità prodotto: ${props.quantity}`}</p>
      <div>
        <button
          className="carrello__item__add"
          onClick={() => props.buyItem(props.index)}
        >
          +
        </button>
        <button
          className="carrello__item__remove"
          onClick={() => props.removeItem(props.index)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default CarrelloItem;
