import { ComponentStory } from "@storybook/react";
import React from "react";
import { Chart } from "./Chart";

export default {
  title: "Example/Chart",
  argTypes: {
    value: { type: "number" },
    max: { type: "number" },
  },
};

const BaseView: ComponentStory<typeof Chart> = (args) => (
  <Chart {...args} />
);

export const Primary = BaseView.bind({});
Primary.args = {
  value: 76,
  max: 100,
  height: 600,
  width: 800,
  options: {
    chart: {
      id: 'apexchart-example',
    },
    xaxis: {
      categories: [
        1991,
        1992,
        1993,
        1994,
        1995,
        1996,
        1997,
        1998,
        1999,
      ],
    },
  },
  series: [
    {
      name: 'series-1',
      data: [
        30,
        40,
        35,
        50,
        49,
        60,
        70,
        91,
        125,
      ],
    },
  ],
  

};
