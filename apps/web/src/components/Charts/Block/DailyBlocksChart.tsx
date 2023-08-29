import type { FC } from "react";
import type { EChartOption } from "echarts";

import { ChartCard } from "~/components/Cards/ChartCard";
import type { SingleDailyBlockStats } from "~/types";
import { buildTimeSeriesOptions, formatNumber } from "~/utils";

export type DailyBlocksChartProps = {
  days?: SingleDailyBlockStats["day"][];
  blocks?: SingleDailyBlockStats["totalBlocks"][];
};

export const DailyBlocksChart: FC<DailyBlocksChartProps> = function ({
  days,
  blocks,
}) {
  const options: EChartOption<EChartOption.SeriesBar> = {
    ...buildTimeSeriesOptions(days, {
      yAxisTooltip: (value) => formatNumber(value),
    }),
    series: [
      {
        name: "Transactions",
        data: blocks,
        type: "bar",
      },
    ],
    animationEasing: "cubicOut",
  };

  return <ChartCard title="Daily Blocks" size="sm" options={options} />;
};
