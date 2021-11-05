import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconNames } from '../../typings/iconNames';
import style from './icon.module.scss';
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
        return html`<img src="/icons/${this.name}_black_24dp.svg" />`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [IconName]: Icon;
    }
}
