import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './textfield.module.scss';

export const TextFieldName = 'delta-textfield' as const;

export interface TextfieldProps {}

@customElement(TextFieldName)
export class Textfield extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;
    protected render() {
        return html` <input /> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [TextFieldName]: Textfield;
    }
}
