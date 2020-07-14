import profileNameReducer from './profileNameReducer';
import imageReducer from './imageReducer';
import jwtReducer from './jwtReducer';
import workflowsReducer from './workflowInfoReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'jwtToken', 'profileImage', 'profileName' ]
};

const rootReducer = combineReducers({
	profileImage: imageReducer,
	profileName: profileNameReducer,
	jwtToken: jwtReducer,
	workflowsInfo: workflowsReducer
});

export default persistReducer(persistConfig, rootReducer);
