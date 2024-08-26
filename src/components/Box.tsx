import React from "react";
import { BoxProps } from "./types";

function Box(props: BoxProps) {
  const { children, isVertical, offset } = props;

  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        transform: isVertical
          ? `translateY(${offset}px)`
          : `translateX(${offset}px)`,
      }}
      className='list-root__item'
    >
      {children}
    </div>
  );
}

export default React.memo(Box);
