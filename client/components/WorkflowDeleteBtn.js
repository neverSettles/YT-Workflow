import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/scss/workflow-delete.module.scss';
import { useSelector } from 'react-redux';
import Router from 'next/router';

const WorkflowDeleteBtn = ({ id }) => {
	const jwtToken = useSelector((state) => state.jwtToken);

	const deleteWorkflow = async () => {
		await fetch(`http://localhost:8000/delete-workflow/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + jwtToken
			}
		});

		return Router.push('/../dashboard/workflows');
	};

	return (
		<div
			className={styles.workflowDeleteBtn}
			onClick={() => {
				deleteWorkflow();
			}}
		>
			<FontAwesomeIcon icon="trash" className={styles.trashIcon} />
			<span className={styles.deleteText}>Delete Workflow</span>
		</div>
	);
};

export default WorkflowDeleteBtn;
