import { EditorComponentData } from '../../types';
type PreviewItemProps = {
    data: EditorComponentData;
    initialHTML: string;
    previewUrl: string;
    title: string;
    index: number;
};
export declare function PreviewItem({ index, data, initialHTML, previewUrl, title, }: PreviewItemProps): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
export {};
