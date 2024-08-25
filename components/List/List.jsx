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
            key={item.category_id}
            title={item.category_name}
            onClickCaty={() => selectCaty(item.category_id)}
            isSelected={selected === item.category_id}
          />
        ))}
      </div>
    </div>
  );
};

export default ListCaty;
