import { combineReducers } from "redux"


export const destinationState = (state = [], action: { type: any; obj: any | never})=>{
    //console.log(action.obj)
    switch(action.type){
        case "ADD_DESTINATION":
            return state.push(action.obj)
        default:
            return state
    }
}

export const allReducers = combineReducers({
    destinationState
})