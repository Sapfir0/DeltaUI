import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './textfield.module.scss';

export const TextFieldName = 'delta-textfield' as const;

export interface TextfieldProps {
    placeholder?: string;
}

@customElement(TextFieldName)
export class Textfield extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    placeholder: string = '';

    protected render() {
        return html` <input placeholder=${this.placeholder} /> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [TextFieldName]: Textfield;
    }
}
