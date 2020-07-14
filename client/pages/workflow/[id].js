import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import DashboardMenu from '../../components/DashboardMenu';
import styles from '../../styles/scss/worklow_editor.module.scss';
import classnames from 'classnames';
import { parseCookie } from '../../components/parseCookie';
import WorkflowDescription from '../../components/WorkflowDescription';
import AddFile from '../../components/addFile';
import Share from '../../components/Share';
import WorkflowTitle from '../../components/WorkflowTitle';
import WorkflowStarredAndFinished from '../../components/WorkflowStarredAndFinished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkflowDeleteBtn from '../../components/WorkflowDeleteBtn';

const Workflow = (props) => {
	const jwtToken = useSelector((state) => state.jwtToken);

	const [ audioUrls, setAudioUrls ] = useState([]);
	const [ imageUrls, setImageUrls ] = useState([]);
	const [ thumbnailUrls, setThumbnailUrls ] = useState([]);
	const [ videoUrls, setVideoUrls ] = useState([]);
	const [ description, setDescription ] = useState(null);
	const [ title, setTitle ] = useState(null);
	const [ starred, setStarred ] = useState(null);
	const [ finished, setFinished ] = useState(null);
	const [ fetched, setFetched ] = useState(false);
	const id = props.id;
	const [ creator, setCreator ] = useState('');
	const [ otherUsers, setOtherUsers ] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const workflowInfoRes = await fetch(`http://127.0.0.1:8000/get-workflow/${id}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwtToken}`
				}
			});
			const workflowInfoJson = await workflowInfoRes.json();
			const workflowInfo = workflowInfoJson['workflow'];
			setDescription(workflowInfo.description);
			setTitle(workflowInfo.title);
			setStarred(workflowInfo.starred);
			setFinished(workflowInfo.finished);
			setOtherUsers(workflowInfo['other_users']);
			setCreator(workflowInfoJson.creator);
			const workflowFilesRes = await fetch(`http://127.0.0.1:8000/get-workflow-files/${id}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwtToken}`
				}
			});
			const filesJson = await workflowFilesRes.json();
			const fileUrlsJson = filesJson['workflow-file-urls'];
			setAudioUrls(fileUrlsJson['audio']);
			setImageUrls(fileUrlsJson['image']);
			setVideoUrls(fileUrlsJson['video']);
			setThumbnailUrls(fileUrlsJson['thumbnail']);
			setFetched(true);
		}
		fetchData();
	}, []);

	const updateFileCollections = async (fileType) => {
		const res = await fetch(`http://localhost:8000/get-workflow-files/${id}/${fileType}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + jwtToken
			}
		});
		const resJson = await res.json();
		const urls = resJson['workflow-specific-urls'];
		switch (fileType) {
			case 'image':
				setImageUrls(urls);
				break;
			case 'video':
				setVideoUrls(urls);
				break;
			case 'thumbnail':
				setThumbnailUrls(urls);
				break;
			case 'audio':
				setAudioUrls(urls);
				break;
		}
	};

	const deleteFile = async (url, fileType) => {
		if (confirm('Are you sure you want to delete this file?')) {
			const fileParts = url.split('/');
			const fileName = fileParts[fileParts.length - 1];
			await fetch(`http://localhost:8000/delete-file/${id}/${fileType}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + jwtToken
				},
				body: JSON.stringify({
					file_name: fileName
				})
			});
			await updateFileCollections(fileType);
		}
	};

	const pageInfo = () => {
		if (!fetched) {
			return <div>Fetching</div>;
		} else {
			return (
				<React.Fragment>
					<section className={styles.header}>
						<div className={styles.workflowHeaderInfo}>
							<WorkflowTitle oldTitle={title} id={id} />
							<WorkflowStarredAndFinished oldStarred={starred} oldFinished={finished} id={id} />
						</div>
						<Share id={id} />
					</section>
					<section className={styles.content}>
						<div className={styles.images}>
							<h2>Thumbnails</h2>
							<div className={styles.container}>
								{thumbnailUrls.map((thumbnailUrl) => {
									return (
										<div className={styles.fileContainer}>
											<img src={thumbnailUrl} className={styles.workflowImage} />
											<FontAwesomeIcon
												icon="trash"
												className={styles.deleteIcon}
												onClick={() => deleteFile(thumbnailUrl, 'thumbnail')}
											/>
										</div>
									);
								})}
								<AddFile fileType={'thumbnail'} id={id} updateFileCollections={updateFileCollections} />
							</div>
						</div>

						<div className={styles.images}>
							<h2>Images</h2>
							<div className={styles.container}>
								{imageUrls.map((imageUrl) => {
									return (
										<div className={styles.fileContainer}>
											<img src={imageUrl} className={styles.workflowImage} />
											<FontAwesomeIcon
												icon="trash"
												className={styles.deleteIcon}
												onClick={() => deleteFile(imageUrl, 'image')}
											/>
										</div>
									);
								})}
								<AddFile fileType={'image'} id={id} updateFileCollections={updateFileCollections} />
							</div>
						</div>
						<div className={styles.audios}>
							<h2>Audio</h2>
							<div className={styles.container}>
								{audioUrls.map((audioUrl) => {
									const dotParts = audioUrl.split('.');
									const mimeType = dotParts[dotParts.length - 1];
									return (
										<div
											className={classnames({
												[styles.fileContainer]: true,
												[styles.audioFileContainer]: true
											})}
										>
											<audio key={audioUrl} controls>
												<source src={audioUrl} type={`audio/${mimeType}`} />;
											</audio>
											<FontAwesomeIcon
												icon="trash"
												className={styles.deleteIcon}
												onClick={() => deleteFile(audioUrl, 'audio')}
											/>
										</div>
									);
								})}
								<AddFile fileType={'audio'} id={id} updateFileCollections={updateFileCollections} />
							</div>
						</div>
						<div className={styles.videos}>
							<h2>Videos</h2>
							<div className={styles.container}>
								{videoUrls.map((videoUrl) => {
									const dotParts = videoUrl.split('.');
									const mimeType = dotParts[dotParts.length - 1];
									if (mimeType !== 'mov') {
										return (
											<div className={styles.fileContainer}>
												<video
													key={videoUrl}
													className={styles.workflowVideo}
													width="320"
													height="240"
													controls
												>
													<source src={videoUrl} type={`video/${mimeType}`} />
												</video>
												<FontAwesomeIcon
													icon="trash"
													className={styles.deleteIcon}
													onClick={() => deleteFile(videoUrl, 'video')}
												/>
											</div>
										);
									} else {
										return <React.Fragment />;
									}
								})}
								<AddFile fileType={'video'} id={id} updateFileCollections={updateFileCollections} />
							</div>
						</div>
						<WorkflowDescription oldDescription={description} id={id} />
						<WorkflowDeleteBtn id={id} />
					</section>
				</React.Fragment>
			);
		}
	};

	// console.log('hi');
	return (
		<main className={styles.workflowEditorContainer}>
			<div className={styles.dashboardMenuContainer}>
				<DashboardMenu />
			</div>
			<div className={styles.editor}>{pageInfo()}</div>
		</main>
	);
};

export async function getServerSideProps({ params }) {
	// console.log(params.id);
	return {
		props: {
			id: params.id
		}
	};
}

export async function getServerSidePaths({ req }) {
	const cookies = parseCookie(req);
	const origWorkflowsRes = await fetch('http://127.0.0.1:8000/get-workflow-ids', {
		headers: {
			'Content-Type': 'application/json',
			Authorization: cookies.jwt
		}
	});
	const origWorkflowsJson = origWorkflowsRes.json();
	const workflowIds = origWorkflowsJson['workflow-ids'];

	const paths = workflowIds.map((workflowId) => {
		return {
			params: {
				id: workflowId.toString()
			}
		};
	});
	return {
		paths,
		fallback: false
	};
}

export default Workflow;
