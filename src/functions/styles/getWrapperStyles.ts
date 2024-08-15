interface WrapperStylesOptions {
  isVertical?: boolean;

  totalSize?: number;
}

export default function getWrapperStyles(
  props: WrapperStylesOptions
): React.CSSProperties {
  const { isVertical, totalSize } = props;

  return {
    height: isVertical ? totalSize : "100%",
    width: !isVertical ? totalSize : "100%",
    flexDirection: !isVertical ? "row" : "column",
    display: "flex",
    position: "relative",
    overflow: "hidden",
  };
}
