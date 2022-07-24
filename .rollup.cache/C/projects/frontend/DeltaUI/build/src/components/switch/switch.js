import { __decorate } from "tslib";
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './switch.module.scss';
export const SwitchName = 'delta-switch';
let Switch = class Switch extends LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
    }
    render() {
        return html `
            <label class="switch">
                <input ?disabled=${this.disabled} type="checkbox" />
                <span class="slider round"></span>
            </label>
        `;
    }
};
Switch.styles = css `
        ${unsafeCSS(style)}
    `;
Switch = __decorate([
    customElement(SwitchName)
], Switch);
export { Switch };
//# sourceMappingURL=switch.js.map