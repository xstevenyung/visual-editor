import React from 'react';
export type PreviewProps = {
    previewUrl: string;
};
/**
 * Affiche un aperçu du rendu de la page dans une iframe
 */
export declare function Preview({ previewUrl }: PreviewProps): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
export declare const StyledIframe: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
} & {
    loaded: boolean;
}, React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, {}>;
