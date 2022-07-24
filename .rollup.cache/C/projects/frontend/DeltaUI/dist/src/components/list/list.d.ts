import { LitElement } from 'lit';
export declare const ListName: "delta-list";
export interface ListProps {
}
export declare class List extends LitElement {
    static styles: import("lit").CSSResult;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [ListName]: List;
    }
}
