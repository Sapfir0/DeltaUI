import { html, LitElement } from 'lit';
// import 'chartjs-web-components';

export const DoughnutName = 'delta-doughnut' as const;

export interface DoughnutProps {}

class Doughnut extends LitElement {
    public data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            },
        ],
    };
    public options = {};
    public type = 'line';

    public render() {
        const { type, data, options } = this;
        return html` <base-chart type="${type}" .data="${data}" .options="${options}"></base-chart> `;
    }

    public firstUpdated() {
        setInterval(() => {
            this.data.labels.push('July');
            this.data.datasets[0].data.push(parseInt('' + Math.random() * 100));
        }, 3000);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [DoughnutName]: Doughnut;
    }
}
