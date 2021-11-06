import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconNames } from '../../typings/iconNames';
import style from './icon.module.scss';
import webpackConfig from '../../../.storybook/main.js';

export const IconName = 'delta-icon' as const;

export interface IconProps {
    name: IconNames;
}

@customElement(IconName)
export class Icon extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    name: IconNames = IconNames.Done;

    render() {
        const publicPath = webpackConfig.publicPathCtor;
        console.log(publicPath);

        return html`<img src="${publicPath}/icons/${this.name}_black_24dp.svg" />`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [IconName]: Icon;
    }
}
