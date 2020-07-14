import Header from '../components/Header';
import RedBackdrop from '../components/RedBackdrop';
import fs from 'fs';
import path from 'path';
import styles from '../styles/scss/features.module.scss';

const Features = ({ mp4FileNames }) => {
	const capitalize = (str) => {
		return str.slice(0, 1).toUpperCase() + str.slice(1);
	};

	return (
		<React.Fragment>
			<span>
				<Header />
				{/* <RedBackdrop /> */}
			</span>
			<section className={styles.featuresSection}>
				{mp4FileNames.map((file) => {
					const fileArray = file.split('/');
					const fileName = fileArray[fileArray.length - 1];
					const descriptionPart = fileName.split('.')[0];
					const description = descriptionPart.split('-').join(' ');
					return (
						<span className={styles.vidSection}>
							<video className={styles.vid} key={file} src={file} type="video/mp4" autoPlay muted loop />
							<h4>{capitalize(description)}</h4>
						</span>
					);
				})}
			</section>
		</React.Fragment>
	);
};

export async function getStaticProps() {
	const mp4Path = path.join(process.cwd(), 'public', 'features');
	const mp4FileNames = fs.readdirSync(mp4Path).map((file) => `features/${file}`);

	return {
		props: {
			mp4FileNames
		}
	};
}

export default Features;
