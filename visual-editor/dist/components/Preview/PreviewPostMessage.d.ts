import type { PreviewProps } from '../../components/Preview/Preview';
import { type EditorComponentData } from '../../types';
export type EditorMessageEvents = {
    type: 've-focus';
    payload: {
        id: string;
    };
} | {
    type: 've-data';
    payload: EditorComponentData[];
};
/**
 * Alternative preview component based on postMessage to communicate
 * between the host and the iframe using cross domain
 */
export declare function PreviewPostMessage({ previewUrl }: PreviewProps): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
