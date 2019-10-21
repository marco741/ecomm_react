import React from "react";

function CarrelloTotale(props) {
    

  return (
    <div className="carrello__totale">
      {`Totale: ${props.totale} €`}
      <button className="carrello__totale__checkout" type="submit" onClick={()=>props.checkout()}>Checkout</button>
    </div>
  );
}

export default CarrelloTotale;
