import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './icon.module.scss';
// import { Icon } from '@spectrum-web-components/icon';

export const IconName = 'delta-icon' as const;

@customElement(IconName)
export class Icon extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    @property()
    text: string = '';

    render() {
        return html` <button class="my-button" part="button">${this.text}</button> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [IconName]: Icon;
    }
}
