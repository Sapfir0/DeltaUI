import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './listItem.module.scss';

export const ListItemName = 'delta-list-item' as const;

export interface ListItemProps {}

@customElement(ListItemName)
export class ListItem extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    protected render() {
        return html`<div>name</div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [ListItemName]: ListItem;
    }
}
