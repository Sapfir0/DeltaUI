import { LitElement } from 'lit';
import { InputType } from './textfieldUtils';
export declare const TextFieldName: "delta-textfield";
export interface TextfieldProps {
    placeholder?: string;
    pattern?: string;
    type?: InputType;
    value?: string;
}
export declare class Textfield extends LitElement {
    static styles: import("lit").CSSResult;
    placeholder: string;
    pattern: string;
    value: string;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [TextFieldName]: Textfield;
    }
}
