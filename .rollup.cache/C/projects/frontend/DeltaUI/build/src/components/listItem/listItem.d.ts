import { LitElement } from 'lit';
export declare const ListItemName: "delta-list-item";
export interface ListItemProps {
    onClick?: () => void;
    selected?: boolean;
    key?: string | number;
}
export declare class ListItem extends LitElement {
    static styles: import("lit").CSSResult;
    onClick: () => void;
    selected: boolean;
    key: string | number;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [ListItemName]: ListItem;
    }
}
