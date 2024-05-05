import React from "react";
import { BaseListProps } from "./types";
import useElementSize from "../../hooks/use-element-size/useElementSize";

function List(dynamicListProps: BaseListProps) {
  const { children } = dynamicListProps;

  const [{ height, scrollTop, width }, elementRef] = useElementSize();

  return <div ref={elementRef}></div>;
}

export const DynamicList = React.memo(List);
