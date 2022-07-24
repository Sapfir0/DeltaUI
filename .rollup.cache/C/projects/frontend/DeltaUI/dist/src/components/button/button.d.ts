import { LitElement } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
export declare const ButtonName: "delta-button";
export interface ButtonProps {
    text: string;
    disabled?: boolean;
    fullSize: boolean;
}
export declare class Button extends LitElement {
    static styles: import("lit").CSSResult;
    text: string;
    disabled: boolean;
    fullSize: boolean;
    onclick: () => void;
    protected getRenderClasses(): ClassInfo;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [ButtonName]: Button;
    }
}
