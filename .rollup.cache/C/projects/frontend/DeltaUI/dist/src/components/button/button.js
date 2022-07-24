import { __decorate } from "tslib";
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './button.module.scss';
export const ButtonName = 'delta-button';
let Button = class Button extends LitElement {
    constructor() {
        super(...arguments);
        this.text = '';
        this.disabled = false;
        this.fullSize = false;
        this.onclick = () => { };
    }
    getRenderClasses() {
        return {};
    }
    render() {
        return html `<button
            @onclick=${this.onclick}
            .disabled=${this.disabled}
            class="my-button ${this.getRenderClasses()}"
        >
            ${this.text}
        </button> `;
    }
};
Button.styles = css `
        ${unsafeCSS(style)}
    `;
Button = __decorate([
    customElement(ButtonName)
], Button);
export { Button };
//# sourceMappingURL=button.js.map