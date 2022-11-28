export const pushDestination = (obj: any) => {
    return { 
        type: "ADD_DESTINATION",
        obj 
    }
}

export const saveReceptionistContract = (contractInstance: any)=>{
    return{
        type: "SAVE_RECEPTIONIST_CONTRACT",
        contractInstance
    }
}

export const saveRoomContract = (contractInstance: any)=>{
    return{
        type: "SAVE_ROOM_CONTRACT",
        contractInstance
    }
}