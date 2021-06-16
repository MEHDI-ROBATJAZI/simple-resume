export function changeDataAction(TYPE){
	return {
		type:TYPE
	}
}

export function changeColorAction(payload){
	return{
		type:"CHANGE_COLOR",
		payload
	}
}