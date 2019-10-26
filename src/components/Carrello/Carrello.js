import React from "react";
import CarrelloItem from "./CarrelloItem.js";
import CarrelloTotale from "./CarrelloTotale.js";

function Carrello(props) {
  const {carrelloItems} = props;
  return (
    <div className="carrello">
      <div className="carrello__item__container">
          {carrelloItems.map((carrelloItem) => (
            <CarrelloItem
              id={carrelloItem.id}
              key={carrelloItem.id}
              quantity={carrelloItem.quantity}
              buyItem={props.buyItem}
              removeItem={props.removeItem}
            />
          ))}
      </div>
      <CarrelloTotale checkout={props.checkout} totale={props.totale}/>
    </div>
  );
}

export default Carrello;
