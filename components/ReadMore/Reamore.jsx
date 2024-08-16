"use client";

import React, { useState } from "react";

const ReadMore = ({ children, maxLenght }) => {
  const text = children;
  const textLength = text.length;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p>
      {isReadMore ? text.slice(0, maxLenght ?? 100) : text}

      {textLength > 30 ? (
        <span
          onClick={toggleReadMore}
          style={{
            color: "orange",
            cursor: "pointer",
            padding: "0",
            margin: "0",
          }}
        >
          {isReadMore ? "...read more" : " show less"}
        </span>
      ) : null}
    </p>
  );
};

export default ReadMore;
