import { Bar } from 'react-chartjs-2';

const BarChart = ({ labels, breakdown, chartTitle }) => {
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
						beginAtZero: true
					}
				}
			]
		}
	};

	return <Bar data={breakdownData} responsive={true} options={chartOptions} />;
};

export default BarChart;
