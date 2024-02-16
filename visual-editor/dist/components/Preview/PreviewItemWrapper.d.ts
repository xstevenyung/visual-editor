import { type CSSProperties, type SyntheticEvent } from 'react';
type Props = {
    title?: string;
    isFocused: boolean;
    style?: CSSProperties;
    onClick: (e: SyntheticEvent) => void;
    onAdd: (e: SyntheticEvent) => void;
    onDelete: (e: SyntheticEvent) => void;
    onMove: (direction: number) => void;
    id?: string;
};
export declare const PreviewItemWrapper: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>;
export {};
