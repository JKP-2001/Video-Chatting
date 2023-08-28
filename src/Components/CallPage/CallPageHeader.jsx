import React, { useState } from 'react'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';


import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { setMInfo } from '../../Redux/Meeting/MeetingSlice';

import { Badge, Button } from "@material-tailwind/react";
import { setChatShow } from '../../Redux/Chat/ChatSlice';

const CallPageHeader = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    const dispatch = useDispatch();

    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);

    const meetInfo = useSelector(state => state.Meeting);

    const chatState = useSelector(state => state.Chat);

    const openMessanger = () => {
        dispatch(setChatShow(true));
    }

    const showMeetingInfo = () => {
        dispatch(setMInfo(true));
    }

    return (
        !chatState.chatShow?<div className="headerItems absolute flex justify-center space-x-5 items-center right-0 top-0 bg-white  rounded-bl-md ">

            <div className="teams hover:bg-gray-100 p-3 hover:cursor-pointer">
                <Groups2OutlinedIcon className="text-gray-500" />
            </div>



            {/* <div className="messages  hover:bg-gray-100 p-3 hover:cursor-pointer">
            
                <ChatBubbleOutlineOutlinedIcon className="text-gray-500" />
                <div class=" inline-flex w-2 h-2 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-6 -right-2 dark:border-gray-900">
                </div>
            </div> */}

            <div class="relative inline-flex items-center p-3 text-sm font-medium text-center hover:cursor-pointer" onClick={openMessanger}>
                <ChatBubbleOutlineOutlinedIcon className="text-gray-500" />
                {/* <span class="sr-only">Notifications</span> */}
                <div class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-2 right-2 dark:border-gray-900"></div>
            </div>

            <div className="time hover:bg-gray-100 p-3 hover:cursor-pointer">
                <div className="timeText">{time}</div>
            </div>

            <div className="profile hover:bg-gray-100 p-3 hover:cursor-pointer" onClick={showMeetingInfo}>
                <InfoOutlinedIcon className="text-gray-500" />
            </div>

        </div>:null
    )
}

export default CallPageHeader