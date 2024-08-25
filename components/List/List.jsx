import React from "react";
import ListItem from "./ListItem";

const ListCaty = ({ title, list, selectCaty, selected }) => {
  return (
    <div className="list-main-categories">
      <div className="category-title">
        <h2>{title}</h2>
      </div>

      <div className="categories">
        {list.map((item) => (
          <ListItem
            key={item.id}
            title={item.name}
            onClickCaty={() => selectCaty(item.id)}
            isSelected={selected === item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ListCaty;
