import React from "react";
import CarrelloItem from "./CarrelloItem.js";
import CarrelloTotale from "./CarrelloTotale.js";

function Carrello(props) {
  const items = props.items;
  console.log(props.totale);
  return (
    <div className="carrello">
      <div className="carrello__item__container">
          {items.map((item, i) => (
            <CarrelloItem
              index={i}
              key={i}
              quantity={item.quantity}
              buyItem={props.buyItem}
              removeItem={props.removeItem}
            />
          ))}
      </div>
      <CarrelloTotale refreshPage={props.refreshPage} totale={props.totale} />
    </div>
  );
}

export default Carrello;
