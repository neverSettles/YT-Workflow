import styles from '../styles/scss/workflow-item.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

const WorkflowItem = ({ workflow, id }) => {
	const maxTitleLengthBeforeCutoff = 15;
	const maxDescriptionLengthBeforeCutoff = 30;

	const profileImage = useSelector((state) => state.profileImage);

	return (
		<div
			className={classnames({
				[styles.workflowContainer]: true,
				[styles.workflowFinished]: workflow['finished'],
				[styles.important]: workflow['starred'] && !workflow.finished
			})}
		>
			<h2 className={styles.workflowTitle}>
				{workflow.title.length > maxTitleLengthBeforeCutoff ? (
					workflow.title.slice(0, maxTitleLengthBeforeCutoff) + '...'
				) : (
					workflow.title
				)}
			</h2>
			<h4>
				{workflow.description.length > maxDescriptionLengthBeforeCutoff ? (
					workflow.description.slice(0, maxDescriptionLengthBeforeCutoff) + '...'
				) : (
					workflow.description
				)}
			</h4>
			<div>
				<div className={styles.workflowUsers}>{/* <img src={profileImage} /> */}</div>
				<div className={styles.workflowExtraInfo}>
					<h3 className={styles.workflowCreated}>{workflow.created_at.slice(0, 10)}</h3>
					<div className={styles.workflowStatusIcons}>
						<FontAwesomeIcon className={classnames({ [styles.starred]: workflow.starred })} icon="star" />
						<FontAwesomeIcon
							className={classnames({ [styles.finished]: workflow.finished })}
							icon="check"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkflowItem;
