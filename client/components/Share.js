import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/scss/share.module.scss';
import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import Joi from '@hapi/joi';

const Share = ({ id }) => {
	const jwtToken = useSelector((state) => state.jwtToken);
	const [ modalVisible, setModalVisible ] = useState();
	const [ hideContent, setHideContent ] = useState();
	const [ inputActive, setInputActive ] = useState();
	const [ inputText, setInputText ] = useState('');

	const [ profileImagesInfo, setProfileImagesInfo ] = useState([]);
	const [ error, setError ] = useState('');

	const schema = Joi.object({
		email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: [ 'com', 'net' ] } })
	});

	const getProfileImages = async () => {
		const imageUrlsRes = await fetch(`http://localhost:8000/get-workflow-profile-images/${id}`, {
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + jwtToken
			}
		});
		const imageUrlsJson = await imageUrlsRes.json();
		setProfileImagesInfo(Object.entries(imageUrlsJson['urls']));
	};

	useEffect(() => {
		setModalVisible(false);
		setHideContent(true);
		setInputActive(false);
		getProfileImages();
	}, []);

	const capitalize = (str) => {
		return str.slice(0, 1).toUpperCase() + str.slice(1);
	};

	const shareWorkflow = async () => {
		const validation = schema.validate({ email: inputText });
		if (validation.error) {
			setError(
				'**' +
					capitalize(
						validation.error.toString().replace('ValidationError: ', '').replace(`"`, ``).replace(`"`, '')
					)
			);
			return;
		}

		const shareRes = await fetch(`http://localhost:8000/share-workflow/${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + jwtToken
			},
			body: JSON.stringify({
				email: inputText
			})
		});

		const shareJson = await shareRes.json();

		if (shareJson.msg == 'Account matching query does not exist.') {
			setError('**User does not exist.');
			return;
		}
		setInputText('');
		setError('');
		await getProfileImages();
	};

	const toggleModal = () => {
		if (!modalVisible) {
			setTimeout(() => {
				setHideContent(false);
			}, 250);
		} else {
			setHideContent(true);
			setInputText('');
			setError('');
		}
		setModalVisible(!modalVisible);
	};

	const toggleInputActive = () => {
		setInputActive(!inputActive);
	};

	const updateInputText = (e) => {
		setInputText(e.target.value);
	};

	const unshareWorkflow = async (email) => {
		const unshareRes = await fetch(`http://localhost:8000/unshare-workflow/${id}`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + jwtToken
			},
			body: JSON.stringify({
				email
			})
		});

		const unshareJson = await unshareRes.json();

		if (unshareJson['msg'] === 'The user and the user being unshared are the same. They must be different.') {
			setError('**You cannot unshare yourself.');
			return;
		}

		setError('');
		await getProfileImages();
	};

	return (
		<React.Fragment>
			<div
				className={classnames({
					[styles.shareModalNotVisible]: true,
					[styles.shareModalVisible]: modalVisible,
					[styles.contentsHidden]: hideContent
				})}
			>
				<p className={styles.title}>
					<FontAwesomeIcon icon="user-plus" className={styles.addUserIcon} />
					<span className={styles.heading}>Share with Other People</span>
				</p>
				<div className={styles.inputSection}>
					<input
						onClick={toggleInputActive}
						onBlur={toggleInputActive}
						type="email"
						className={styles.emailInput}
						onChange={updateInputText}
						value={inputText}
					/>
					<div
						className={classnames({
							[styles.inputBorderBottom]: true,
							[styles.inputBorderBottomActive]: inputActive
						})}
					/>
					<p className={classnames({ [styles.hoverLabel]: inputText !== '' })}>Add People</p>
				</div>
				<p className={styles.usersHeading}>Current Users</p>
				<ul className={styles.workflowUsersList}>
					{profileImagesInfo.map((profileImageInfo, index) => (
						<li key={profileImageInfo[0]} className={styles.workflowUsers}>
							<img src={profileImageInfo[1]} className={styles.workflowUserProfileImage} />
							<p className={styles.workflowUserEmail}>{profileImageInfo[0]}</p>
							{index !== 0 ? (
								<FontAwesomeIcon
									className={styles.unshareBtn}
									icon={'times'}
									onClick={() => unshareWorkflow(profileImageInfo[0])}
								/>
							) : (
								<span className={styles.owner}>(Owner)</span>
							)}
						</li>
					))}
				</ul>
				<div className={styles.footer}>
					<p>{error}</p>
					<div className={styles.shareBtn} onClick={shareWorkflow}>
						Done
					</div>
				</div>
			</div>
			<div className={styles.shareBtn} onClick={() => toggleModal()}>
				<FontAwesomeIcon icon="users" className={styles.shareIcon} />
				<p>Share</p>
			</div>
			<div
				onClick={toggleModal}
				className={classnames({ [styles.backdropNotVisible]: true, [styles.backdropVisible]: modalVisible })}
			/>
		</React.Fragment>
	);
};

export default Share;
