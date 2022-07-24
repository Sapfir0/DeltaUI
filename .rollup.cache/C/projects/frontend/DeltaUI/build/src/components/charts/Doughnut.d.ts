import { LitElement } from 'lit';
export declare const DoughnutName: "delta-doughnut";
export interface DoughnutProps {
}
declare class Doughnut extends LitElement {
    data: {
        labels: string[];
        datasets: {
            label: string;
            backgroundColor: string;
            borderColor: string;
            data: number[];
        }[];
    };
    options: {};
    type: string;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [DoughnutName]: Doughnut;
    }
}
export {};
