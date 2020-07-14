import { Line } from 'react-chartjs-2';

const LineChart = ({ labels, breakdown, chartTitle }) => {
	const breakdownData = () => {
		return {
			labels: labels,
			datasets: [
				{
					data: breakdown,
					backgroundColor: [ '#DC1C13', '#F1959B', '#EA4C46', '#F07470' ],
					borderWidth: 2,
					hoverBorderColor: 'black',
					borderColor: 'white'
				}
			]
		};
	};

	const chartOptions = {
		legend: {
			display: false
		},
		tooltips: {
			padding: 5
		},
		title: {
			text: chartTitle,
			display: true,
			fontSize: 20
		},
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						maxTicksLimit: 5
					}
				}
			],
			xAxes: [
				{
					type: 'time',
					time: {
						unit: 'day'
					},
					display: true,
					ticks: {
						display: true
					}
				}
			]
		}
	};

	return <Line data={breakdownData} responsive={true} options={chartOptions} />;
};

export default LineChart;
