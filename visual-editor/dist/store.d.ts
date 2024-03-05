import { Action, Device, EditorComponentData, EditorComponentDefinitions, EditorComponentTemplate } from './types';
import { ReactElement } from 'react';
import { InsertPosition } from './enum';
import { Events } from './constants';
declare const createStore: (data: EditorComponentData[] | undefined, definitions: EditorComponentDefinitions, hiddenCategories: string[] | undefined, rootElement: HTMLElement, templates: EditorComponentTemplate[], insertPosition: InsertPosition, devices: Device[], actions: Action[]) => import("zustand").UseBoundStore<import("zustand").StoreApi<Omit<{
    data: EditorComponentData[];
    definitions: EditorComponentDefinitions;
    hiddenCategories: string[];
    rootElement: HTMLElement;
    templates: EditorComponentTemplate[];
    insertPosition: InsertPosition;
    actions: Action[];
    device: Device;
    devices: Device[];
    previousData: EditorComponentData[];
    rollbackMessage: string | null;
    addBlockIndex: number | null;
    focusIndex: string | null;
    sidebarMode: string;
    sidebarWidth: number;
}, "rollback" | "setDevice" | "setSidebarWidth" | "updateData" | "moveBloc" | "removeBloc" | "voidRollback" | "insertData" | "dispatchEvent" | "setData" | "setDataFromOutside" | "setFocusIndex" | "setAddBlockIndex" | "toggleSidebarMode"> & {
    setDevice: (device: Device) => void;
    setSidebarWidth: (width: number) => void;
    updateData: (newData: any, path?: string) => void;
    moveBloc: (id: string, direction: number) => void;
    removeBloc: (id: string) => void;
    rollback: () => void;
    voidRollback: () => void;
    insertData: (name: string, index: number, extraData?: object) => {
        _name: string;
        _id: string;
    } & {
        _id: string;
    };
    dispatchEvent(e: Events): void;
    setData: (newData: Omit<EditorComponentData, '_id'>[]) => void;
    setDataFromOutside: (newData: Omit<EditorComponentData, '_id'>[]) => void;
    setFocusIndex: (id: string) => void;
    setAddBlockIndex: (index?: number | string | null) => void;
    toggleSidebarMode: () => void;
}>>;
export type Store = ReturnType<typeof createStore>;
type StoreState = Store extends {
    getState: () => infer T;
} ? T : never;
export declare function StoreProvider({ children, data, definitions, hiddenCategories, rootElement, templates, insertPosition, devices, onStore, actions, }: {
    children: ReactElement;
    data: EditorComponentData[];
    templates: EditorComponentTemplate[];
    definitions: EditorComponentDefinitions;
    hiddenCategories: string[];
    rootElement: HTMLElement;
    insertPosition: InsertPosition;
    devices: Device[];
    actions: Action[];
    onStore: (s: Store) => void;
}): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
declare function useStore<T>(selector: (state: StoreState) => T): T;
export declare function usePartialStore<K extends keyof StoreState>(...keys: K[]): Pick<Omit<{
    data: EditorComponentData[];
    definitions: EditorComponentDefinitions;
    hiddenCategories: string[];
    rootElement: HTMLElement;
    templates: EditorComponentTemplate[];
    insertPosition: InsertPosition;
    actions: Action[];
    device: Device;
    devices: Device[];
    previousData: EditorComponentData[];
    rollbackMessage: string | null;
    addBlockIndex: number | null;
    focusIndex: string | null;
    sidebarMode: string;
    sidebarWidth: number;
}, "rollback" | "setDevice" | "setSidebarWidth" | "updateData" | "moveBloc" | "removeBloc" | "voidRollback" | "insertData" | "dispatchEvent" | "setData" | "setDataFromOutside" | "setFocusIndex" | "setAddBlockIndex" | "toggleSidebarMode"> & {
    setDevice: (device: Device) => void;
    setSidebarWidth: (width: number) => void;
    updateData: (newData: any, path?: string | undefined) => void;
    moveBloc: (id: string, direction: number) => void;
    removeBloc: (id: string) => void;
    rollback: () => void;
    voidRollback: () => void;
    insertData: (name: string, index: number, extraData?: object | undefined) => {
        _name: string;
        _id: string;
    } & {
        _id: string;
    };
    dispatchEvent(e: Events): void;
    setData: (newData: Omit<EditorComponentData, "_id">[]) => void;
    setDataFromOutside: (newData: Omit<EditorComponentData, "_id">[]) => void;
    setFocusIndex: (id: string) => void;
    setAddBlockIndex: (index?: string | number | null | undefined) => void;
    toggleSidebarMode: () => void;
}, K>;
export declare function useFieldFocused(id: string): boolean;
export declare function useBlocSelectionVisible(): boolean;
export declare function useEmit(): (eventName: Events, args?: CustomEventInit) => CustomEvent<any>;
/**
 * Add a new block at the current selected index
 */
export declare function useAddBlock(): (blocName: string) => void;
export declare function useRollbackMessage(): {
    message: string | null;
    rollback: () => void;
    voidRollback: () => void;
};
export declare function useGetData(): () => EditorComponentData[];
export declare function useDataLength(): number;
export declare const store: typeof useStore;
export {};
