import { LitElement } from 'lit';
export declare const CardName: "delta-card";
export interface CardProps {
    header?: string;
    content?: string;
}
export declare class Card extends LitElement {
    static styles: import("lit").CSSResult;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [CardName]: Card;
    }
}
