import { boolean } from 'fp-ts';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './switch.module.scss';

export const SwitchName = 'delta-switch' as const;

export interface SwitchProps {
    disabled?: boolean;
}

@customElement(SwitchName)
export class Switch extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    disabled: boolean = false;

    protected render() {
        return html`
            <label class="switch">
                <input ?disabled=${this.disabled} type="checkbox" />
                <span class="slider round"></span>
            </label>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [SwitchName]: Switch;
    }
}
