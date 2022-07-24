import { LitElement } from 'lit';
export declare const SwitchName: "delta-switch";
export interface SwitchProps {
    disabled?: boolean;
}
export declare class Switch extends LitElement {
    static styles: import("lit").CSSResult;
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [SwitchName]: Switch;
    }
}
