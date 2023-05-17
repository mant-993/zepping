
const initialstate = { isAuthorized:false }

function Reducer(state=initialstate, action){

	switch (action.type) {

		case "LOG":
			return{

				...state,
				isAuthorized:action.payload
			}

		default:
			return state;

	}

	
}

export default Reducer;