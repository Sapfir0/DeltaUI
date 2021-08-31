import '@material/mwc-textfield';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import React from 'react';

export interface InputFieldProps {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onClose: () => void;
}

const componentName = 'delta-input-field';

@customElement(componentName)
export class InputField extends LitElement {
    @property()
    onClick: () => any = () => {};

    @property()
    onChange: () => any = () => {};

    render() {
        return html`
            <mwc-textfield onChange=${this.onChange} label="Standard"></mwc-textfield>
            <mwc-icon-button onClick="{props.onClose}" icon="close" @onclick=${this.onClick}></mwc-icon-button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentName]: InputField;
    }
}
