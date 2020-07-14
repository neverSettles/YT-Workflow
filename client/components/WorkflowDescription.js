import styles from '../styles/scss/workflow-description.module.scss';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

const WorkflowDescription = ({ oldDescription, id }) => {
	const [ sameSessionOldDescription, setSameSessionOldDescription ] = useState(null);
	const [ descriptionChanged, setDescriptionChanged ] = useState(false);
	const jwtToken = useSelector((state) => state.jwtToken);
	const descTextArea = useRef(null);

	const updateDescToBackend = async () => {
		const newDescJson = JSON.stringify({
			description: descTextArea.current.value
		});
		await fetch(`http://127.0.0.1:8000/set-workflow-description/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + jwtToken
			},
			body: newDescJson
		});
		setDescriptionChanged(false);
		setSameSessionOldDescription(descTextArea.current.value);
	};

	const updateDesc = () => {
		if (!sameSessionOldDescription) {
			setDescriptionChanged(descTextArea.current.value !== oldDescription);
		} else {
			setDescriptionChanged(descTextArea.current.value !== sameSessionOldDescription);
		}
	};

	return (
		<div className={styles.descriptionContainer}>
			<h2 className={styles.descriptionTitle}>Description</h2>
			<textarea
				ref={descTextArea}
				name="description"
				className={styles.description}
				defaultValue={oldDescription}
				onChange={() => updateDesc()}
			/>
			<FontAwesomeIcon
				icon={'arrow-right'}
				className={classnames({ [styles.updateIcon]: true, [styles.descriptionChanged]: descriptionChanged })}
				onClick={() => updateDescToBackend()}
			/>
		</div>
	);
};

export default WorkflowDescription;
