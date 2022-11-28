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

export const receptionistContract = (state = "", action: {type: string, contractInstance: any})=>{
    switch(action.type){
        case "SAVE_RECEPTIONIST_CONTRACT":
            return state = action.contractInstance
        default:
            return state
    }
}

export const roomContract = (state = [], action: {type: string, contractInstance: any})=>{
    switch(action.type){
        case "SAVE_ROOM_CONTRACT":
            return state = action.contractInstance
        default:
            return state
    }
}

export const allReducers = combineReducers({
    destinationState,
    receptionistContract,
    roomContract
})