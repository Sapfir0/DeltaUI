import { __decorate } from "tslib";
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './card.module.scss';
export const CardName = 'delta-card';
let Card = class Card extends LitElement {
    render() {
        return html `<div class="card">
            <h2 class="card__header"><slot name="header"></slot></h2>
            <div class="card__content"><slot name="content"></slot></div>
        </div>`;
    }
};
Card.styles = css `
        ${unsafeCSS(style)}
    `;
Card = __decorate([
    customElement(CardName)
], Card);
export { Card };
//# sourceMappingURL=card.js.map