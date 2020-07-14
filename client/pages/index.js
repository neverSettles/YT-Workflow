import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import Header from '../components/Header';
import RedBackdrop from '../components/RedBackdrop';
import styles from '../styles/scss/landing-page.module.scss';

const Index = () => {
	const jwtToken = useSelector((state) => state.jwtToken);

	if (jwtToken !== '') {
		Router.push('/dashboard/home');
	}

	return (
		<Fragment>
			<span className={styles.landingPageContent}>
				<span>
					<Header />
					<RedBackdrop />
				</span>
				<div className={styles.contentDiv}>
					<section className={styles.content}>
						<section className={styles.text}>
							<h1>Never Deal With Annoying Computer Files Ever Again.</h1>
							<h3>
								YT Workflow is the easiest tool made to help you store all your necessary files all in
								one place, the Cloud.
							</h3>
						</section>
						<section className={styles.img}>
							<img src={'images/online-video.svg'} alt="Online" />
						</section>
					</section>
				</div>
			</span>
		</Fragment>
	);
};

export default Index;
