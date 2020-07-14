const workflowsInfo = (state = [], action) => {
	switch (action.type) {
		case 'SET_WORKFLOWS':
			return action.payload.workflowInfo;
		default:
			return state;
	}
};

export default workflowsInfo;
