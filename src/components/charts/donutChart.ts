import { Chart, DoughnutController, Tooltip, SubTitle } from 'chart.js';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

const config = {
    type: 'doughnut',
    data: [12, 19, 3, 5, 2, 3],
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart',
            },
        },
    },
};

export const DoughnutName = 'delta-doughnut' as const;

export interface DoughnutProps {}

@customElement(DoughnutName)
export class Doughnut extends LitElement {
    constructor() {
        super();
        const ctx = document.getElementById('chartJSContainer').getContext('2d');
        const myChart = new Chart(ctx, config);
    }

    protected render() {
        return html`<canvas id="chartJSContainer"> </canvas>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [DoughnutName]: Doughnut;
    }
}
