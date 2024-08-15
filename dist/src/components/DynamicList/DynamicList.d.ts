import { default as React } from 'react';
import { DynamicListProps } from '../types';

declare function List(dynamicListProps: DynamicListProps): import("react/jsx-runtime").JSX.Element;
export declare const DynamicList: React.MemoExoticComponent<typeof List>;
export {};
