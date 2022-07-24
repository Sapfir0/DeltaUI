import { __decorate } from "tslib";
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './textfield.module.scss';
export const TextFieldName = 'delta-textfield';
let Textfield = class Textfield extends LitElement {
    constructor() {
        super(...arguments);
        this.placeholder = '';
        this.pattern = '';
        this.value = '';
    }
    render() {
        return html `<div>
            <input class="textfield" pattern=${this.pattern} value=${this.value} placeholder=${this.placeholder} />
            <span class="material-icons-outlined">done</span>
        </div>`;
    }
};
Textfield.styles = css `
        ${unsafeCSS(style)}
    `;
Textfield = __decorate([
    customElement(TextFieldName)
], Textfield);
export { Textfield };
//# sourceMappingURL=textfield.js.map