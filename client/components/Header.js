import styles from '../styles/scss/header.module.scss';

import Link from 'next/link';
import classnames from 'classnames';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
	const [ hideMenuItems, setHideMenuItems ] = useState(true);

	const toggleMobileMenu = () => {
		setHideMenuItems(!hideMenuItems);
	};

	return (
		<main className={styles.headerContainer}>
			<section className={styles.logoSection}>
				<Link href="/">
					<a>
						<img src="/images/logo.jpg" alt="YT Workflow" />
					</a>
				</Link>
			</section>
			<div
				className={classnames({
					[styles.mobileBackDrop]: true,
					[styles.showMobileBackdrop]: !hideMenuItems
				})}
				onClick={toggleMobileMenu}
			/>
			<nav className={styles.menuSection}>
				<div className={classnames({ [styles.toggleIcon]: true })} onClick={toggleMobileMenu}>
					<div />
					<div />
					<div />
				</div>
				<ul className={classnames({ [styles.hideMenuUl]: hideMenuItems })}>
					<Link href="/">
						<a>
							<li className={classnames({ [styles.toggleIcon]: true })} onClick={toggleMobileMenu}>
								<div />
								<div />
								<div />
							</li>
						</a>
					</Link>
					<Link href="/">
						<a>
							<li>
								Home
								<div className={classnames({ [styles.after]: true })} />
							</li>
						</a>
					</Link>

					<Link href="/features">
						<a>
							<li>
								Features
								<div className={classnames({ [styles.after]: true })} />
							</li>
						</a>
					</Link>

					<Link href="/login">
						<a>
							<li>
								Sign In
								<div className={classnames({ [styles.after]: true })} />
							</li>
						</a>
					</Link>
				</ul>
			</nav>
			<section className={styles.authSection}>
				<ul>
					<Link href="/signUp">
						<a>
							<li className={classnames({ [styles.signUp]: true })}>Sign Up</li>
						</a>
					</Link>
				</ul>
			</section>
		</main>
	);
};

export default Header;
