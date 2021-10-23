import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './textfield.module.scss';
import { InputType } from './textfieldUtils';

export const TextFieldName = 'delta-textfield' as const;

export interface TextfieldProps {
    placeholder?: string;
    pattern?: string;
    type?: InputType;
    value?: string;
}

@customElement(TextFieldName)
export class Textfield extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    placeholder: string = '';
    pattern: string = '';
    value: string = '';

    protected render() {
        return html`<div>
            <input class="textfield" pattern=${this.pattern} value=${this.value} placeholder=${this.placeholder} />
            <span class="material-icons">face</span>
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [TextFieldName]: Textfield;
    }
}
