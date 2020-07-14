import styles from '../styles/scss/profile.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = () => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const [ currentDate, setCurrentDate ] = useState('');

	const profileImageFormRef = useRef();
	const jwtToken = useSelector((state) => state.jwtToken);

	const [ profileImage, setProfileImage ] = useState('');
	const [ profileUsername, setProfileUsername ] = useState('');
	const [ displayName, setDisplayName ] = useState('');

	const capitalize = (str) => {
		return str.slice(0, 1).toUpperCase() + str.slice(1);
	};

	const getProfileImage = async () => {
		const profileImageUrlRes = await fetch('http://localhost:8000/get-profile-image', {
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + jwtToken
			}
		});
		if (profileImageUrlRes.status === 200) {
			const profileImageUrlJson = await profileImageUrlRes.json();
			setProfileImage(profileImageUrlJson['msg']);
		}
	};

	const getProfileUsername = async () => {
		const profileUsernameRes = await fetch('http://localhost:8000/get-profile-username', {
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + jwtToken
			}
		});
		if (profileUsernameRes.status === 200) {
			const profileUsernameJson = await profileUsernameRes.json();
			setProfileUsername(profileUsernameJson['msg']);
			setDisplayName(capitalize(profileUsernameJson['msg'].split(' ')[0]));
		}
	};

	const updateProfileImage = async () => {
		const profileForm = new FormData(profileImageFormRef.current);
		const res = await fetch('http://localhost:8000/upload-profile-image', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + jwtToken
			},
			body: profileForm
		});
		if (res.status !== 200) {
			const jsonRes = await res.json();
			console.log(jsonRes);
		}
		getProfileImage();
	};

	useEffect(() => {
		const currentDateInfo = new Date();
		const month = months[currentDateInfo.getMonth()];
		const day = currentDateInfo.getDate();
		const year = currentDateInfo.getFullYear();
		setCurrentDate(month + ' ' + day + ', ' + year);
		getProfileImage();
		getProfileUsername();
	}, []);

	return (
		<div className={styles.profileContainer}>
			<div className={styles.imageSection}>
				<img className={styles.profileImage} src={profileImage} alt={profileUsername.split(' ')[0]} />
				<span className={styles.inputSection}>
					<FontAwesomeIcon className={styles.editIcon} icon={'user-edit'} />
				</span>
				<form encType="multipart/form-data" ref={profileImageFormRef}>
					<input
						type="file"
						onChange={updateProfileImage}
						accept={'image/*'}
						className={styles.profileImageInput}
						name="image"
						title=""
					/>
				</form>
			</div>
			<h2>Hey {displayName}!</h2>
			<h5>{currentDate}</h5>
		</div>
	);
};

export default Profile;
