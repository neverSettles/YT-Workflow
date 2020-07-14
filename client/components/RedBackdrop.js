import styles from '../styles/scss/redBackdrop.module.scss';
import { useEffect, useRef } from 'react';

const RedBackdrop = () => {
	const backdropRef = useRef();
	// useEffect(
	// 	() => {
	// 		const height = document.querySelector('html').getClientRects()[0].height;
	// 		// console.log(document.que)
	// 		backdropRef.current.style.height = `${height}px`;
	// 	},
	// 	[ backdropRef ]
	// );
	return <main ref={backdropRef} className={styles.redBackdrop} />;
};

export default RedBackdrop;
