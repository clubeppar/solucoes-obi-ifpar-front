import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const BORDER_RADIUS = 12;
const COLORS = {
  WHITE: "#ffffff",
  GREEN: "#059669", // green-600
  GRAY: "#374151", // gray-700
};
const RADIUS = "80%";
const CUTOUT = "85%";

const centerTextPlugin = {
  id: "centerText",
  afterDraw(chart) {
    const [arc] = chart.getDatasetMeta(0).data;
    if (!arc) return;
    const { x, y } = arc;

    const percentage = chart.options.plugins.centerText.percentage;

    const { ctx } = chart;
    ctx.save();
    ctx.fillStyle = COLORS.WHITE;
    ctx.font = "500 32px arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${percentage.toFixed(0)}%`, x, y - 16);
    ctx.restore();
  },
};

Chart.register(ArcElement, centerTextPlugin);

function getBorderRadius(percentage, index) {
  const rounded = (start, end) => ({
    outerStart: start,
    outerEnd: end,
    innerStart: start,
    innerEnd: end,
  });

  if (percentage === 0 || percentage === 100)
    return rounded(BORDER_RADIUS, BORDER_RADIUS);

  return index === 0 ? rounded(BORDER_RADIUS, 0) : rounded(0, BORDER_RADIUS);
}

export function HalfDonutChart({ percentage }) {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [COLORS.GREEN, COLORS.GRAY],
        borderWidth: 0,
        borderRadius: ({ dataIndex }) => getBorderRadius(percentage, dataIndex),
        circumference: 180,
        rotation: 270,
        radius: RADIUS,
        cutout: CUTOUT,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      centerText: {
        percentage,
      },
    },
  };

  return (
    <div className="w-full max-w-sm h-30">
      <Doughnut data={data} options={options} />
    </div>
  );
}
