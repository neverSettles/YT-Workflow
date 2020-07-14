const setJwt = (jwt) => {
	return {
		type: 'SET_JWT',
		payload: jwt
	};
};

export { setJwt };
