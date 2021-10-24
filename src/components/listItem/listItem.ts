import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './listItem.module.scss';
import { classMap } from 'lit/directives/class-map.js';

export const ListItemName = 'delta-list-item' as const;

export interface ListItemProps {
    onClick?: () => void;
    selected?: boolean;
    key?: string | number;
}

@customElement(ListItemName)
export class ListItem extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    onClick = () => {
        console.log('default on click');
    };
    selected: boolean = false;
    key: string | number = 0;

    protected render() {
        return html`<div class="list-item">
            <button class="list-item__button ${classMap({ selected: this.selected })}" @onclick="${this.onClick}">
                <slot></slot>
            </button>
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [ListItemName]: ListItem;
    }
}
