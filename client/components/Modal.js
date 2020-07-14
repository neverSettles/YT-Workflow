import classnames from 'classnames';
import styles from '../styles/scss/modal.module.scss';

const Modal = ({ text, visible, title, toggleVisiblity }) => {
	return (
		<React.Fragment>
			<section
				onClick={toggleVisiblity}
				className={classnames({ [styles.backdrop]: true, [styles.backdropVisible]: visible })}
			/>
			<section className={classnames({ [styles.modal]: true, [styles.modalVisible]: visible })}>
				<h2>{title}</h2>
				<p>{text}</p>
			</section>
		</React.Fragment>
	);
};

export default Modal;
