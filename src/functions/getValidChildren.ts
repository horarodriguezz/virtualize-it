import React from "react";

export default function getValidChildren(
  children: React.ReactNode[]
): React.ReactNode[] {
  if (!children) {
    return [];
  }

  const finalArray: React.ReactNode[] = [];

  children.forEach((child) => {
    if (!child) return;

    if (Array.isArray(child)) {
      child.forEach((nestedChild) => {
        if (nestedChild) finalArray.push(nestedChild);
      });
    } else if (
      typeof child === "object" &&
      "type" in child &&
      child.type === React.Fragment
    ) {
      const fragmentChildren = React.Children.toArray(child.props.children);
      fragmentChildren.forEach((fragmentChild) => {
        if (fragmentChild) finalArray.push(fragmentChild);
      });
    } else {
      finalArray.push(child);
    }
  });

  return finalArray;
}
