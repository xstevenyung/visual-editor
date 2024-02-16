import React from 'react';
import type { Device, EditorComponentDefinition, EditorComponentTemplate, Translation } from './types';
import { BaseStyles } from './components/BaseStyles';
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
