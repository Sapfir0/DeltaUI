import { LitElement } from 'lit';
import { IconNames } from '../../typings/iconNames';
export declare const IconName: "delta-icon";
export interface IconProps {
    name: IconNames;
}
export declare class Icon extends LitElement {
    static styles: import("lit").CSSResult;
    name: IconNames;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [IconName]: Icon;
    }
}
