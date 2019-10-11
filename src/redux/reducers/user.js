// user reducer 생성
export const userReducer = ( state = '' , action ) => {
	if(action.type === 'updateUser') {
		return action.payload;
	}
	else {
		return state;
	}
}