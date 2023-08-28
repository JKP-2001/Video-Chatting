import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    chatShow: false,
}

const ChatSlice = createSlice({
    name: "Chat",
    initialState: initialState,
    reducers: {
        setChatShow: (state, action) => {
            state.chatShow = action.payload
        }
    }
})


export const { actions, reducer } = ChatSlice
export default reducer

export const setChatShow = (payload) => (dispatch) => {
    dispatch(actions.setChatShow(payload))
}

