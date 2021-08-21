import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import style from './button.module.css';

const buttonName = 'spark-button'

@customElement(buttonName)
export class Button extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    @property()
    name = 'World';

    render() {
        return html`
            <h1>Hello, ${this.name}!</h1>
            <button class="my-button" part="button"></button>
            <slot></slot>
        `;
    }
}
