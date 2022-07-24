import { LitElement } from 'lit';
export declare const ProgressBarName: "delta-progress";
export interface ProgressBarProps {
    value?: number;
    max?: number;
}
export declare class ProgressBar extends LitElement {
    static styles: import("lit").CSSResult;
    value: number;
    max: number;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [ProgressBarName]: ProgressBar;
    }
}
