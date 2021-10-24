import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './card.module.scss';

export const CardName = 'delta-card' as const;

export interface CardProps {}

@customElement(CardName)
export class Card extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    protected render() {
        return html`<div>
            <slot name="header"></slot>
            <slot name="content"></slot>
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [CardName]: Card;
    }
}
