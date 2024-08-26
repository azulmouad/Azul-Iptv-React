import React from "react";
import ListItem from "./ListItem";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const ListCaty = ({ title, list, selectCaty, selected, loading }) => {
  return (
    <div className="list-main-categories">
      <div className="category-title">
        <h2>{title}</h2>
      </div>
      {loading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}

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
