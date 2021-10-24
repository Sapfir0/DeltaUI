import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './progressBar.module.scss';
import { classMap } from 'lit/directives/class-map.js';

export const ProgressBarName = 'delta-progress' as const;

export interface ProgressBarProps {
    value?: number;
    max?: number;
}

@customElement(ProgressBarName)
export class ProgressBar extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    value: number = 0;
    max: number = 100;

    protected render() {
        return html`<progress max="${this.max}" value=${this.value}></progress>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [ProgressBarName]: ProgressBar;
    }
}
