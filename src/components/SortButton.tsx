import '@material/mwc-icon-button';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MouseEventHandler } from 'react';
import { SortDirection } from '../typings';

export interface SortButtonProps {
    onClick: MouseEventHandler;
    selected: boolean;
    direction: SortDirection;
}

const componentName = 'delta-sort-button';

@customElement(componentName)
export class SortButton extends LitElement {
    @property()
    onClick: MouseEventHandler = () => {};

    @property()
    direction: string = 'desc';

    @property({ type: Boolean })
    selected: boolean = false;

    render() {
        const icon = this.direction === 'desc' ? `ArrowDownward` : `ArrowUpward`;

        return html`<mwc-icon-button
            icon="${icon}"
            color=${this.selected ? 'primary' : 'default'}
            @onclick=${this.onClick}
            disabled
        ></mwc-icon-button>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentName]: SortButton;
    }
}
