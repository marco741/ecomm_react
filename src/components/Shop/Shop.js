import React from "react";
import ShopItem from "./ShopItem";

function Shop(props) {
  const items = props.items;

  return (
    <div className="shop">
      {items.map((item, i) => (
        <ShopItem
          index={i}
          key={i}
          item={item}
          buyItem={props.buyItem}
          removeItem={props.removeItem}
        />
      ))}
    </div>
  );
}

export default Shop;
