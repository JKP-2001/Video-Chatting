import { configureStore } from "@reduxjs/toolkit";
import MeetingReducer from "./Meeting/MeetingSlice";
import ChatReducer from "./Chat/ChatSlice";

const store = configureStore({
    reducer:{
        Meeting:MeetingReducer,
        Chat:ChatReducer,
    }
})

export default store
