import styles from '../../styles/scss/statistics.module.scss';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import DonutChart from '../../components/DonutChart';
import BarChart from '../../components/BarChart';
import PieChart from '../../components/PieChart';
import PolarChart from '../../components/PolarChart';
import LineChart from '../../components/LineChart';
import DashboardMenu from '../../components/DashboardMenu';

const Dashboard = () => {
	const jwt = useSelector((state) => state.jwtToken);
	const [ userFilesBreakdown, setUserFilesBreakdown ] = useState();
	const [ userFilesLabels, setUserFilesLabels ] = useState();

	const [ userStarredWorkflows, setUserStarredWorkflows ] = useState();
	const [ userStarredLabels, setUserStarredLabels ] = useState();

	const [ userFinishedWorkflows, setUserFinishedWorkflows ] = useState();
	const [ userFinishedLabels, setUserFinishedLabels ] = useState();

	const [ userOriginalSharedWorkflows, setUserOriginalSharedWorkflows ] = useState();
	const [ userOriginalSharedLabels, setUserOriginalSharedLabels ] = useState();

	const [ descriptionData, setDescriptionData ] = useState();
	const [ descriptionLabels, setDescriptionLabels ] = useState();

	const capitalize = (str) => {
		return str.slice(0, 1).toUpperCase() + str.slice(1);
	};

	const fetchFileBreakdown = async () => {
		const res = await fetch('http://localhost:8000/workflows-file-breakdown', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + jwt
			}
		});
		if (res.status === 200) {
			const resJson = await res.json();
			const info = resJson['msg'];

			setUserFilesLabels(Object.keys(info).map((label) => capitalize(label)));
			setUserFilesBreakdown(Object.values(info));
		}
	};

	const fetchFinishedBreakdown = async () => {
		const res = await fetch('http://localhost:8000/workflows-finished-data', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + jwt
			}
		});
		if (res.status === 200) {
			const resJson = await res.json();
			const info = resJson['msg'];

			setUserFinishedLabels(Object.keys(info).map((label) => capitalize(label)));
			setUserFinishedWorkflows(Object.values(info));
		}
	};

	const fetchStarredBreakdown = async () => {
		const res = await fetch('http://localhost:8000/workflows-starred-data', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + jwt
			}
		});
		if (res.status === 200) {
			const resJson = await res.json();
			const info = resJson['msg'];

			setUserStarredLabels(Object.keys(info).map((label) => capitalize(label)));
			setUserStarredWorkflows(Object.values(info));
		}
	};

	const fetchSharedOriginal = async () => {
		const res = await fetch('http://localhost:8000/workflows-original-shared-data', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + jwt
			}
		});
		if (res.status === 200) {
			const resJson = await res.json();
			const info = resJson['msg'];

			setUserOriginalSharedLabels(Object.keys(info).map((label) => capitalize(label)));
			setUserOriginalSharedWorkflows(Object.values(info));
		}
	};

	const fetchDescriptionData = async () => {
		const res = await fetch('http://localhost:8000/workflows-description-data', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + jwt
			}
		});
		if (res.status === 200) {
			const resJson = await res.json();
			const info = resJson['msg'];

			setDescriptionLabels(Object.keys(info).map((label) => new Date(label)));
			setDescriptionData(Object.values(info));
		}
	};

	useEffect(() => {
		fetchFileBreakdown();
		fetchFinishedBreakdown();
		fetchStarredBreakdown();
		fetchSharedOriginal();
		fetchDescriptionData();
	}, []);

	return (
		<main className={styles.statisticsContainer}>
			<div className={styles.dashboardMenuContainer}>
				<DashboardMenu />
			</div>
			<div className={styles.statisticsSection}>
				<h1>Workflow Insights</h1>
				<div className={classnames({ [styles.chart]: true, [styles.topChart]: true })}>
					<PolarChart labels={userFilesLabels} breakdown={userFilesBreakdown} chartTitle={'File Breakdown'} />
				</div>
				<div className={styles.chart}>
					<BarChart
						labels={userFinishedLabels}
						breakdown={userFinishedWorkflows}
						chartTitle={'Finished vs. Unfinished'}
					/>
				</div>

				<div className={styles.chart}>
					<PieChart
						labels={userStarredLabels}
						breakdown={userStarredWorkflows}
						chartTitle={'Starred vs. Unstarred'}
					/>
				</div>
				<div className={styles.chart}>
					<DonutChart
						labels={userOriginalSharedLabels}
						breakdown={userOriginalSharedWorkflows}
						chartTitle={'Your Workflows vs. Shared Workflows'}
					/>
				</div>
				<div className={styles.lineChart}>
					<LineChart
						labels={descriptionLabels}
						breakdown={descriptionData}
						chartTitle={'Length of Descriptions'}
					/>
				</div>
			</div>
		</main>
	);
};

export default Dashboard;
