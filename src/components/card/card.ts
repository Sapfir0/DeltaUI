import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './card.module.scss';

export const CardName = 'delta-card' as const;

export interface CardProps {
    header?: string;
    content?: string;
}

@customElement(CardName)
export class Card extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    protected render() {
        return html`<div class="card">
            <h2 class="card__header"><slot name="header"></slot></h2>
            <div class="card__content"><slot name="content"></slot></div>
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [CardName]: Card;
    }
}
