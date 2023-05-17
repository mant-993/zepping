/* implemento la variabile isAuthorized per il local storage, 
   questa viene modificata sia dal componenti Login e App chiamando l'azione "log" */
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