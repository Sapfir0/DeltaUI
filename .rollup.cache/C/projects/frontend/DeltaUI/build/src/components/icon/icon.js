import { __decorate } from "tslib";
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconNames } from '../../typings/iconNames';
import style from './icon.module.scss';
import webpackConfig from '../../../.storybook/webpack.config.js';
export const IconName = 'delta-icon';
let Icon = class Icon extends LitElement {
    constructor() {
        super(...arguments);
        this.name = IconNames.Done;
    }
    render() {
        const publicPath = webpackConfig.output.publicPath;
        console.log(webpackConfig);
        return html `<img src="${publicPath}/icons/${this.name}_black_24dp.svg" />`;
    }
};
Icon.styles = css `
        ${unsafeCSS(style)}
    `;
Icon = __decorate([
    customElement(IconName)
], Icon);
export { Icon };
//# sourceMappingURL=icon.js.map