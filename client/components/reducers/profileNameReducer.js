const profileNameReducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_PROFILE_NAME':
			return action.payload.name;
		default:
			return state;
	}
};

export default profileNameReducer;
