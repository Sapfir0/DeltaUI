import { __decorate } from "tslib";
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './progressBar.module.scss';
export const ProgressBarName = 'delta-progress';
let ProgressBar = class ProgressBar extends LitElement {
    constructor() {
        super(...arguments);
        this.value = 0;
        this.max = 100;
    }
    render() {
        return html `<progress max="${this.max}" value=${this.value}></progress>`;
    }
};
ProgressBar.styles = css `
        ${unsafeCSS(style)}
    `;
ProgressBar = __decorate([
    customElement(ProgressBarName)
], ProgressBar);
export { ProgressBar };
//# sourceMappingURL=progressBar.js.map