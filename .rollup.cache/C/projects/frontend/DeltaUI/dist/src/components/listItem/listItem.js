import { __decorate } from "tslib";
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './listItem.module.scss';
import { classMap } from 'lit/directives/class-map.js';
export const ListItemName = 'delta-list-item';
let ListItem = class ListItem extends LitElement {
    constructor() {
        super(...arguments);
        this.onClick = () => {
            console.log('default on click');
        };
        this.selected = false;
        this.key = 0;
    }
    render() {
        return html `<div class="list-item">
            <button class="list-item__button ${classMap({ selected: this.selected })}" @onclick="${this.onClick}">
                <slot></slot>
            </button>
        </div>`;
    }
};
ListItem.styles = css `
        ${unsafeCSS(style)}
    `;
ListItem = __decorate([
    customElement(ListItemName)
], ListItem);
export { ListItem };
//# sourceMappingURL=listItem.js.map