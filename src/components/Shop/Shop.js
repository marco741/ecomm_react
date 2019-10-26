import React from "react";
import ShopItem from "./ShopItem";

function Shop(props) {
  const { items } = props;

  return (
    <div className="shop">
      {items.map(item => (
        <ShopItem
          id={item.id}
          key={item.id}
          item={item}
          buyItem={props.buyItem}
          removeItem={props.removeItem}
        />
      ))}
    </div>
  );
}

export default Shop;
