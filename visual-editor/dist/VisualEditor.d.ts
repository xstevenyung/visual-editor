import React from 'react';
import type { Action, Device, EditorComponentDefinition, EditorComponentTemplate, Translation } from './types';
import { BaseStyles } from './components/BaseStyles';
import { Button, ButtonIcon, Field as FieldUI, Modal, Spinner } from './components/ui';
export { PreviewWrapper } from './elements/PreviewWrapper';
export { AddButton } from './elements/AddButton';
export type { EditorMessageEvents } from './components/Preview/PreviewPostMessage';
/**
 * Public interface for the module
 */
export declare class VisualEditor {
    static i18n: Translation;
    static postMessagePreview: boolean;
    static devices: Device[];
    constructor(options?: {
        lang?: Translation;
        postMessagePreview?: boolean;
        devices?: Device[];
    });
    registerComponent(name: string, definition: EditorComponentDefinition): void;
    registerTemplate(template: EditorComponentTemplate): void;
    registerButton(action: Action): void;
    defineElement(elementName?: string): void;
}
type VisualEditorProps = {
    previewUrl: string;
    name: string;
    iconsUrl: string;
    visible: boolean;
    element: Element;
};
export declare function VisualEditorComponent({ previewUrl, name, element, iconsUrl, visible: visibleProps, }: VisualEditorProps): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
export declare const UI: {
    Button: typeof Button;
    ButtonIcon: typeof ButtonIcon;
    Flex: React.ForwardRefExoticComponent<Omit<{
        between?: boolean | undefined;
        center?: boolean | undefined;
        column?: boolean | undefined;
        gap?: number | undefined;
        as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
    } & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Card: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
    } & {
        hoverable?: boolean | undefined;
    }, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
    Input: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
    }, React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
    Field: typeof FieldUI;
    Modal: typeof Modal;
    Spinner: typeof Spinner;
    Label: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
    }, React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
};
export { Text } from './fields/Text';
export { Field } from './components/ui';
export { Checkbox } from './fields/Checkbox';
export { Repeater } from './fields/Repeater';
export { ImageUrl } from './fields/ImageUrl';
export { HTMLText } from './fields/HTMLText';
export { Color } from './fields/Color';
export { Row } from './fields/Row';
export { Alignment } from './fields/Alignment';
export { Select } from './fields/Select';
export { Number } from './fields/Number';
export { Range } from './fields/Range';
export { Tabs } from './fields/Tabs';
export { DatePicker } from './fields/DatePicker';
export { TextAlign } from './fields/TextAlign';
export { Translations as FR } from './langs/fr';
export { Translations as EN } from './langs/en';
export { BaseStyles };
export { defineField, defineFieldGroup } from './fields/utils';
export { FieldsRenderer } from './components/Sidebar/FieldsRenderer';
export { React };
