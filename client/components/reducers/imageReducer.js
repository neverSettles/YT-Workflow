const imageReducer = (state = '', action) => {
	console.log(action.type);
	switch (action.type) {
		case 'SET_PROFILE_IMAGE':
			return action.payload.profile_image;
		case 'REMOVE_PROFILE_IMAGE':
			return '';
		default:
			return state;
	}
};

export default imageReducer;
