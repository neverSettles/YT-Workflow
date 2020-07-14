const setProfileImage = (image_url) => {
	console.log('new image url: ' + image_url);
	return {
		type: 'SET_PROFILE_IMAGE',
		payload: {
			profile_image: image_url
		}
	};
};

const removeProfileImage = () => {
	return {
		type: 'REMOVE_PROFILE_IMAGE'
	};
};

export { setProfileImage, removeProfileImage };
