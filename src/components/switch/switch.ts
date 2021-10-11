import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import style from './button.module.css';

const componentName = 'delta-button'

import '@material/mwc-ripple/mwc-ripple.js';

import {ariaProperty} from '@material/mwc-base/aria-property.js';
import {FormElement} from '@material/mwc-base/form-element.js';
import {Ripple} from '@material/mwc-ripple/mwc-ripple.js';
import {RippleHandlers} from '@material/mwc-ripple/ripple-handlers.js';
import {html, TemplateResult} from 'lit';
import {eventOptions, property, query, queryAsync, state} from 'lit/decorators.js';
import {ClassInfo, classMap} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';

import {MDCSwitchFoundation} from './foundation.js';
import {MDCSwitchAdapter, MDCSwitchState} from './state.js';

/** @soyCompatible */
export class Switch extends FormElement implements MDCSwitchState {
  // MDCSwitchState
  @property({type: Boolean}) override disabled = false;
  @property({type: Boolean}) processing = false;
  @property({type: Boolean}) selected = false;

  // Aria
  /** @soyPrefixAttribute */
  @ariaProperty
  @property({type: String, attribute: 'aria-label'})
  ariaLabel = '';

  /** @soyPrefixAttribute */
  @ariaProperty
  @property({type: String, attribute: 'aria-labelledby'})
  ariaLabelledBy = '';

  // Ripple
  @queryAsync('mwc-ripple') override readonly ripple!: Promise<Ripple|null>;
  @state() protected shouldRenderRipple = false;

  protected rippleHandlers = new RippleHandlers(() => {
    this.shouldRenderRipple = true;
    return this.ripple;
  });

  // FormElement
  @property({type: String, reflect: true}) name = '';
  @property({type: String}) value = 'on';
  @query('input') protected readonly formElement!: HTMLElement;

  protected setFormData(formData: FormData) {
    if (this.name && this.selected) {
      formData.append(this.name, this.value);
    }
  }

  // BaseElement
  @query('.mdc-switch') protected readonly mdcRoot!: HTMLElement;
  protected readonly mdcFoundationClass = MDCSwitchFoundation;
  protected mdcFoundation?: MDCSwitchFoundation;

  override click() {
    // Switch uses a hidden input as its form element, but a different <button>
    // for interaction. It overrides click() from FormElement to avoid clicking
    // the hidden input.
    if (!this.disabled) {
      this.mdcRoot?.focus();
      this.mdcRoot?.click();
    }
  }

  /** @soyTemplate */
  protected override render(): TemplateResult {
    return html`
      <button
        type="button"
        class="mdc-switch ${classMap(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label="${ifDefined(this.ariaLabel || undefined)}"
        aria-labelledby="${ifDefined(this.ariaLabelledBy || undefined)}"
        .disabled=${this.disabled}
      >
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__handle-track">
          ${this.renderHandle()}
        </div>
      </button>
      <input
        type="checkbox"
        aria-hidden="true"
        name="${this.name}"
        .checked=${this.selected}
        .value=${this.value}
      >
    `;
  }

  /** @soyTemplate */
  protected getRenderClasses(): ClassInfo {
    return {
      'mdc-switch--processing': this.processing,
      'mdc-switch--selected': this.selected,
      'mdc-switch--unselected': !this.selected,
    };
  }


}

declare global {
    interface HTMLElementTagNameMap {
        [typeof componentName]: Button;
    }
}
