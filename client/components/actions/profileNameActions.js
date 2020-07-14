const setProfileName = (name) => {
	return {
		type: 'SET_PROFILE_NAME',
		payload: {
			name
		}
	};
};

export { setProfileName };
