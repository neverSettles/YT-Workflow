import styles from '../../styles/scss/workflows.module.scss';
import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setJwt } from '../../components/actions/jwtAction';
import { setWorkflowInfo } from '../../components/actions/workflowInfo';
import DashboardMenu from '../../components/DashboardMenu';
import WorkflowItem from '../../components/WorkflowItem';
import Cookie from 'js-cookie';
import Router from 'next/router';

const Dashboard = () => {
	const [ workflows, setWorkflows ] = useState(null);
	const jwtToken = useSelector((state) => state.jwtToken);
	const dispatch = useDispatch();
	const [ origWorkflow, setOrigWorkflow ] = useState([]);
	const [ curFilter, setCurFilter ] = useState('');
	if (jwtToken === '') {
		Router.push('/');
	}

	const setWorkflowIdsInLocalStorage = (workflowsInfo) => {
		const workflowIds = workflowsInfo.map((workflowInfo) => workflowInfo.id);
		if (!localStorage.getItem('workflowIds')) {
			localStorage.setItem('workflowIds', workflowIds);
		}
	};

	const getNewJwtToken = async () => {
		const refreshToken = localStorage.getItem('refresh-token');
		const data = {
			refresh: refreshToken
		};
		const dataStringified = JSON.stringify(data);
		const newAccessTokenRes = await fetch('http://127.0.0.1:8000/api/refresh', {
			method: 'POST',
			body: dataStringified,
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const newAccessTokenJson = await newAccessTokenRes.json();
		if (newAccessTokenJson.detail === 'Token is invalid or expired') {
			localStorage.setItem('refresh-token', '');
			Cookie.set('jwt', JSON.stringify(''));
			Cookie.set('refresh-token', JSON.stringify(''));
			dispatch(setJwt(''));
			return Router.push('/');
		}
		const newJwtToken = newAccessTokenJson.access;
		dispatch(setJwt(newJwtToken));
		localStorage.setItem('jwt', newJwtToken);
		Cookie.set('jwt', JSON.stringify(newJwtToken));
		const workflowsResponse = await fetch('http://localhost:8000/get-shared-workflows', {
			headers: {
				Authorization: 'Bearer ' + newJwtToken
			}
		});
		const workflowsJson = await workflowsResponse.json();
		setWorkflows(workflowsJson['workflows']);
		dispatch(setWorkflowInfo(workflowsJson['workflows']));
		setWorkflowIdsInLocalStorage(workflowsJson['workflows']);
	};

	const getWorkflows = async () => {
		const jwtBearerString = 'Bearer ' + jwtToken;
		const workflowsResponse = await fetch('http://localhost:8000/get-shared-workflows', {
			headers: {
				Authorization: jwtBearerString
			}
		});
		const workflowsJson = await workflowsResponse.json();

		if (workflowsJson.code) {
			await getNewJwtToken();
			return;
		}
		const tempWorkflows = workflowsJson['workflows'];
		const orig = tempWorkflows.sort((w1, w2) => {
			if (w1.id > w2.id) return -1;
			return 1;
		});
		setWorkflows([ ...orig ]);
		setOrigWorkflow([ ...orig ]);
	};

	useEffect(() => {
		getWorkflows();
	}, []);

	const filterByUnfinished = () => {
		const filtered = workflows.sort((w1, w2) => {
			if (w1.finished && w2.finished) {
				if (w1.starred && w1.starred) {
					if (w1.id > w2.id) {
						return -1;
					}
					return 1;
				}
				if (w1.starred) {
					return -1;
				}
				return 1;
			} else if (w1.finished) return 1;
			return -1;
		});
		setWorkflows([ ...filtered ]);
		setCurFilter('finished');
	};

	const filterByStarred = () => {
		const filtered = workflows.sort((w1, w2) => {
			if (w1.starred && w2.starred) {
				if (w1.finished && w1.finished) {
					if (w1.id > w1.id) {
						return -1;
					}
					return 1;
				}
				if (w1.finished) {
					return 1;
				}
				return -1;
			} else if (w1.starred) return -1;
			return 1;
		});
		setWorkflows([ ...filtered ]);
		setCurFilter('starred');
	};

	const removeFilter = () => {
		setWorkflows([ ...origWorkflow ]);
		setCurFilter('');
	};

	return (
		<main className={styles.workflowsContainer}>
			<div className={styles.dashboardMenuContainer}>
				<DashboardMenu />
			</div>
			<div className={styles.workflowsBody}>
				{!workflows ? (
					<p className={styles.noWorkflows}>You don't have any workflows. Let's get one started!</p>
				) : (
					<React.Fragment>
						<h1 className={styles.numWorkflows}>
							{workflows.length} Workflow{workflows.length != 1 ? 's' : ''}
						</h1>
						<ul className={styles.filter}>
							<li
								onClick={filterByStarred}
								className={classnames({ [styles.active]: curFilter === 'starred' })}
							>
								Starred
							</li>
							<li
								onClick={filterByUnfinished}
								className={classnames({ [styles.active]: curFilter === 'finished' })}
							>
								Unfinished
							</li>
							<li onClick={removeFilter} className={styles.clear}>
								Clear
							</li>
						</ul>
						<div className={styles.workflowList}>
							{workflows.map((workflow) => (
								<a href={`../workflow/${workflow.id}`}>
									<WorkflowItem workflow={workflow} key={workflow.id} id={workflow.id} />
								</a>
							))}
						</div>
					</React.Fragment>
				)}
			</div>
		</main>
	);
};

export default Dashboard;
