import { createSlice } from "@reduxjs/toolkit"


const intitalState = {
    meeetingInfo:true,
}

const MeetingSlice = createSlice({
    name:"Meeting",
    initialState:intitalState,
    reducers:{
        setMeetingInfo:(state,action)=>{
            state.meeetingInfo = action.payload
        }
    }
})

export const {actions,reducer} = MeetingSlice
export default reducer

export const setMInfo = (payload) => (dispatch) => {
    dispatch(actions.setMeetingInfo(payload))
}