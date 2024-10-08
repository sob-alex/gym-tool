import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';

const TrainingChart: React.FC = ({}) => {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue('--text-color');
		const textColorSecondary = documentStyle.getPropertyValue(
			'--text-color-secondary'
		);
		const surfaceBorder =
			documentStyle.getPropertyValue('--surface-border');
		const data = {
			labels: ['March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'Жим',
					data: [80, 95, 105, 102.5, 107.5],
					fill: false,
					borderColor: documentStyle.getPropertyValue('--green-500'),
					tension: 0.4,
				},
				{
					label: 'Подтягивания',
					data: [20, 35, 30, 40, 42.5],
					fill: false,
					borderColor: documentStyle.getPropertyValue('--blue-500'),
					tension: 0.4,
				},
				{
					label: 'Жим ногами',
					data: [120, 140, 145, 150, 165],
					fill: false,
					borderColor: documentStyle.getPropertyValue('--orange-500'),
					tension: 0.4,
				},
			],
		};
		const options = {
			maintainAspectRatio: false,
			aspectRatio: 0.6,
			plugins: {
				legend: {
					labels: {
						color: textColor,
					},
				},
			},
			scales: {
				x: {
					ticks: {
						color: textColorSecondary,
					},
					grid: {
						color: surfaceBorder,
					},
				},
				y: {
					ticks: {
						color: textColorSecondary,
					},
					grid: {
						color: surfaceBorder,
					},
				},
			},
		};

		setChartData(data);
		setChartOptions(options);
	}, []);
	return (
		<Card>
			<Chart type="line" data={chartData} options={chartOptions} />
		</Card>
	);
};

export default TrainingChart;
