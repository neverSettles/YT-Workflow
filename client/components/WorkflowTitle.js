import { useRef, useState, useEffect } from 'react';
import styles from '../styles/scss/workflow-title.module.scss';
import { useSelector } from 'react-redux';

const WorkflowTitle = ({ oldTitle, id }) => {
	const titleInput = useRef(null);
	const jwtToken = useSelector((state) => state.jwtToken);
	const inputLengthMultiplier = 18;

	const pushTitleChangeToBackend = async () => {
		await fetch(`http://localhost:8000/set-workflow-title/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + jwtToken
			},
			body: JSON.stringify({
				title: titleInput.current.innerText
			})
		});
	};

	const handleChange = async () => {
		if (titleInput.current.innertText !== oldTitle) {
			console.log('changing');
			await pushTitleChangeToBackend();
		}
	};

	return (
		<h2
			contentEditable={'plaintext-only'}
			ref={titleInput}
			className={styles.titleInput}
			onBlur={handleChange}
			spellCheck={'false'}
		>
			{oldTitle}
		</h2>
	);
};

export default WorkflowTitle;
