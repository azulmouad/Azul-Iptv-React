import { orange } from "@mui/material/colors";
import React from "react";

const ListItem = ({ title, onClickCaty, isSelected }) => {
  //console.log(title, isSelected);

  return (
    <div className="list-item" onClick={() => onClickCaty()}>
      <p
        style={{
          color: isSelected ? "orange" : null,
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default ListItem;
