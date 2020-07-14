import styles from '../styles/scss/dashboard-menu.module.scss';
import Profile from './Profile';
import DashboardMenuItem from './DashboardMenuItem';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setJwt } from '../components/actions/jwtAction';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import { useState } from 'react';

import Cookie from 'js-cookie';

const DashboardMenu = () => {
	const router = useRouter();
	const curRoute = router.route;
	const currentPage = curRoute.split('/')[2];
	const dispatch = useDispatch();

	const [ hideMenuItems, setHideMenuItems ] = useState(true);

	const toggleMobileMenu = () => {
		setHideMenuItems(!hideMenuItems);
	};

	const logout = () => {
		localStorage.setItem('refresh-token', '');
		dispatch(setJwt(''));
		localStorage.setItem('jwt', '');
		Cookie.set('jwt', JSON.stringify(''));
		Cookie.set('refresh-token', JSON.stringify(''));
		return router.push('/');
	};

	return (
		<React.Fragment>
			<div className={classnames({ [styles.toggleIcon]: true })} onClick={toggleMobileMenu}>
				<div />
				<div />
				<div />
			</div>
			<div
				className={classnames({
					[styles.dashboardMenuContainer]: true,
					[styles.hideMenuItems]: !hideMenuItems
				})}
			>
				<div className={styles.divProfile}>
					<Profile />
				</div>
				<div className={styles.dashboardMenuItems}>
					<DashboardMenuItem
						menuTitle={'Workflows'}
						menuItemFontAwesomeRef={'sitemap'}
						menuLinkReference={'/dashboard/workflows'}
						menuItemActive={currentPage == 'workflows'}
					/>
					<DashboardMenuItem
						menuTitle={'Shared with me'}
						menuItemFontAwesomeRef={'share-alt'}
						menuLinkReference={'/dashboard/shared-with-me'}
						menuItemActive={currentPage == 'shared-with-me'}
					/>
					<DashboardMenuItem
						menuTitle={'Statistics'}
						menuItemFontAwesomeRef={'chart-pie'}
						menuLinkReference={'/dashboard/statistics'}
						menuItemActive={currentPage == 'statistics'}
					/>
				</div>
				<div className={styles.logout} onClick={logout}>
					<FontAwesomeIcon icon={'sign-out-alt'} />
					{'    '}Logout
				</div>
			</div>
		</React.Fragment>
	);
};

export default DashboardMenu;
