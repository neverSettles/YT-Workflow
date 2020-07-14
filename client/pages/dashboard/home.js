import styles from '../../styles/scss/dashboard-home.module.scss';
import DashboardMenu from '../../components/DashboardMenu';

const Dashboard = () => {
	return (
		<main className={styles.dashboardContainer}>
			<div className={styles.dashboardMenuContainer}>
				<DashboardMenu />
			</div>
		</main>
	);
};

export default Dashboard;
