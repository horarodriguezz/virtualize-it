interface ContainerOptions {
    width?: React.CSSProperties["width"];
    height?: React.CSSProperties["height"];
}
export default function getContainerStyles(options: ContainerOptions): React.CSSProperties;
export {};
