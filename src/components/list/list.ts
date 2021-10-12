import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './list.module.scss';

export const ListName = 'delta-list' as const;

export interface ListProps {}

@customElement(ListName)
export class List extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    protected render() {
        return html`<div>
            мой список
            <slot></slot>
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [ListName]: List;
    }
}
