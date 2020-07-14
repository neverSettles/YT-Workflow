import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/scss/workflow-starred-finished.module.scss';
import classnames from 'classnames';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const WorkflowStarredAndFinished = ({ oldStarred, oldFinished, id }) => {
	const [ starred, setStarred ] = useState(oldStarred);
	const [ finished, setFinished ] = useState(oldFinished);
	const jwtToken = useSelector((state) => state.jwtToken);

	const toggleStarred = async () => {
		setStarred(!starred);
		await fetch(`http://localhost:8000/toggle-workflow-starred/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + jwtToken
			}
		});
	};
	const toggleFinished = async () => {
		setFinished(!finished);
		await fetch(`http://localhost:8000/toggle-workflow-finished/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + jwtToken
			}
		});
	};

	return (
		<React.Fragment>
			<FontAwesomeIcon
				icon="star"
				className={classnames({ [styles.regular]: true, [styles.starred]: starred })}
				onClick={toggleStarred}
			/>
			<FontAwesomeIcon
				icon="check"
				className={classnames({ [styles.regular]: true, [styles.finished]: finished })}
				onClick={toggleFinished}
			/>
		</React.Fragment>
	);
};

export default WorkflowStarredAndFinished;
