interface ContainerOptions {
  width?: React.CSSProperties["width"];

  height?: React.CSSProperties["height"];
}

export default function getContainerStyles(
  options: ContainerOptions
): React.CSSProperties {
  const { width, height } = options;

  return {
    width: width ?? "100%",
    height: height ?? "100%",
    overflow: "auto",
  };
}
