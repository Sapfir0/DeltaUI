import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './listItem.module.scss';

export const ListItemName = 'delta-list-item' as const;

export interface ListItemProps {
    onClick?: () => void;
}

@customElement(ListItemName)
export class ListItem extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    onClick = () => {};

    protected render() {
        return html`<div class="list-item">
            <button class="list-item__button" @onclick=${this.onClick}><slot></slot></button>
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [ListItemName]: ListItem;
    }
}
