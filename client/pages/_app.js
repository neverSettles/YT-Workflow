import '../styles/global.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import allReducers from '../components/reducers/allReducers';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { defaults } from 'react-chartjs-2';
import {
	faHome,
	faShareAlt,
	faStar,
	faChartPie,
	faUserAlt,
	faSitemap,
	faCheck,
	faGripVertical,
	faArrowRight,
	faUsers,
	faPlusCircle,
	faTrash,
	faUserPlus,
	faTimes,
	faUserEdit,
	faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const icons = [
	faHome,
	faShareAlt,
	faStar,
	faChartPie,
	faUserAlt,
	faSitemap,
	faCheck,
	faGripVertical,
	faArrowRight,
	faPlusCircle,
	faUsers,
	faTrash,
	faUserPlus,
	faTimes,
	faUserEdit,
	faSignOutAlt
];
library.add(fab, ...icons);

const App = ({ Component, pageProps }) => {
	const store = createStore(allReducers);

	const persistor = persistStore(store);

	defaults.global.defaultFontFamily = 'Poppins';
	defaults.global.defaultFontSize = 10;

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	);
};

export default App;
