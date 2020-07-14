import styles from '../styles/scss/dashboard-menu-item.module.scss';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DashboardMenuItem = ({ menuTitle, menuLinkReference, menuItemFontAwesomeRef, menuItemActive }) => {
	return (
		<a href={menuLinkReference} className={styles.menuItemLink}>
			<div className={styles.menuItemContainer}>
				<div className={styles.menuItemInfo}>
					<div
						className={classnames({
							[styles.iconContainer]: true,
							[styles.iconContainerActive]: menuItemActive
						})}
					>
						<FontAwesomeIcon icon={menuItemFontAwesomeRef} />
					</div>
					<h3 className={styles.menuTitle}>{menuTitle}</h3>
				</div>
				<div className={classnames({ [styles.activeCircle]: true, [styles.active]: menuItemActive })} />
			</div>
		</a>
	);
};

export default DashboardMenuItem;
