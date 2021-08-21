import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MouseEventHandler } from 'react';

export interface SearchButtonProps {
    onClick: MouseEventHandler;
}

const componentName = 'delta-search-button';

@customElement(componentName)
export class SearchButton extends LitElement {
    @property()
    onClick: MouseEventHandler = () => {};

    render() {
        return html`<mwc-button @onclick=${this.onClick} icon="code" trailingIcon></mwc-button>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentName]: SearchButton;
    }
}
