import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/scss/file-upload.module.scss';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

const AddFile = ({ fileType, id, updateFileCollections }) => {
	const fileInput = useRef(null);
	const fileForm = useRef(null);

	const jwtToken = useSelector((state) => state.jwtToken);
	const submitFile = async () => {
		const formData = new FormData(fileForm.current);
		await fetch(`http://localhost:8000/upload-file/${id}/${fileType}`, {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + jwtToken
			},
			body: formData
		});

		await updateFileCollections(fileType);
	};

	return (
		<div className={styles.fileUploadContainer}>
			<FontAwesomeIcon icon={'plus-circle'} className={styles.fileUpload} />
			<form ref={fileForm} encType="multipart/form-data">
				<input
					ref={fileInput}
					type="file"
					accept={`${fileType}/*`}
					name="file"
					className={styles.fileInput}
					onChange={() => {
						submitFile();
					}}
				/>
			</form>
		</div>
	);
};

export default AddFile;
