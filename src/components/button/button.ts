import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './button.module.css';

export const componentName = 'delta-button' as const;

@customElement(componentName)
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
        [typeof componentName]: Button;
    }
}
