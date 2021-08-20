import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import style from './button.module.css';

@customElement('spark-button')
export class Button extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    @property()
    name = 'World';

    @state()
    count = 0;

    render() {
        return html`
            <h1>Hello, ${this.name}!</h1>
            <button class="my-button" @click=${this._onClick} part="button">Click Count: ${this.count}</button>
            <slot></slot>
        `;
    }

    private _onClick() {
        console.log(this.count);

        this.count++;
    }

    foo(): string {
        return 'foo';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'spark-button': Button;
    }
}
