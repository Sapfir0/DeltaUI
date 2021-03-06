import { css, html, LitElement, unsafeCSS } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators.js';
import style from './button.module.scss';

export const ButtonName = 'delta-button' as const;

export interface ButtonProps {
    text: string;
    disabled?: boolean;
    fullSize: boolean;
}

@customElement(ButtonName)
export class Button extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    text: string = '';
    disabled: boolean = false;
    fullSize: boolean = false;
    onclick: () => void = () => {};

    protected getRenderClasses(): ClassInfo {
        return {};
    }

    protected render() {
        return html`<button
            @onclick=${this.onclick}
            .disabled=${this.disabled}
            class="my-button ${this.getRenderClasses()}"
        >
            ${this.text}
        </button> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [ButtonName]: Button;
    }
}
