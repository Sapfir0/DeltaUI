import '@material/mwc-icon-button';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MouseEventHandler } from 'react';
import './material.css';
export interface SearchButtonProps {
    onClick: MouseEventHandler;
}

const componentName = 'delta-search-button';

@customElement(componentName)
export class SearchButton extends LitElement {
    @property()
    onClick: MouseEventHandler = () => {};

    render() {
        return html`<mwc-icon-button icon="code" @onclick=${this.onClick} disabled></mwc-icon-button>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentName]: SearchButton;
    }
}
