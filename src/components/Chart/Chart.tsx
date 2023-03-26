/* eslint no-magic-numbers: 0 */

import type { Props } from 'react-apexcharts'
import ApexChart from 'react-apexcharts'
import React from 'react'

export function Chart(props: Props) {
  return (
    <ApexChart
      {...props}
    />

  )
}
