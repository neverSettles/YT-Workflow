const setWorkflowInfo = (workflowInfo) => {
	return {
		type: 'SET_WORKFLOWS',
		payload: {
			workflowInfo
		}
	};
};

export { setWorkflowInfo };
