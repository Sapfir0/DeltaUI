import { __decorate } from "tslib";
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './list.module.scss';
export const ListName = 'delta-list';
let List = class List extends LitElement {
    render() {
        return html `<div>
            <slot></slot>
        </div>`;
    }
};
List.styles = css `
        ${unsafeCSS(style)}
    `;
List = __decorate([
    customElement(ListName)
], List);
export { List };
//# sourceMappingURL=list.js.map