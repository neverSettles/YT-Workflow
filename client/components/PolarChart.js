import { Polar } from 'react-chartjs-2';

const PolarChart = ({ labels, breakdown, chartTitle }) => {
	const breakdownData = () => {
		return {
			labels: labels,
			datasets: [
				{
					data: breakdown,
					backgroundColor: [ '#DC1C13', '#F1959B', '#EA4C46', '#F07470' ],
					borderWidth: 2,
					hoverBorderColor: 'black',
					borderColor: 'white',
					label: 'Hi'
				}
			]
		};
	};

	const chartOptions = {
		legend: {
			position: 'right',
			labels: {}
		},
		tooltips: {
			padding: 5
		},
		title: {
			text: chartTitle,
			display: true,
			fontSize: 20
		}
	};

	return <Polar data={breakdownData} responsive={true} options={chartOptions} />;
};

export default PolarChart;
