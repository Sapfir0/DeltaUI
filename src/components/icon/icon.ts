import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import style from './button.module.css';

const componentName = 'delta-button'

@customElement(componentName)
export class Button extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    @property()
    text: string = ''

    render() {
        return html`
            <button class="my-button" part="button">${this.text}</button>
        `;
    }


}

declare global {
    interface HTMLElementTagNameMap {
        [typeof componentName]: Button;
    }
}
