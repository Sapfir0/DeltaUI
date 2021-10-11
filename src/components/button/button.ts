import { boolean } from 'fp-ts';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './button.module.scss';

export const ButtonName = 'delta-button';

export interface ButtonProps {
    text: string;
    disabled?: boolean;
}

@customElement(ButtonName)
export class Button extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
        ${unsafeCSS(style)}
    `;

    text: string = '';
    disabled: boolean = false;

    render() {
        return html`<button .disabled=${this.disabled} class="my-button">${this.text}</button> `;
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'delta-button': Button;
    }
}
