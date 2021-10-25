import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './icon.module.scss';

export const IconName = 'delta-icon' as const;

@customElement(IconName)
export class Icon extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    render() {
        return html``;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [IconName]: Icon;
    }
}
