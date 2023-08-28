import React, { useState } from 'react'

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { setChatShow } from '../../Redux/Chat/ChatSlice';

import { Textarea } from "@material-tailwind/react";

const Messenger = () => {

    const chatState = useSelector(state => state.Chat);
    const dispatch = useDispatch();


    const closeMessenger = () => {
        dispatch(setChatShow(false));
    }



    return (
        chatState.chatShow ? <div className="messenger_container absolute top-4 right-4 bg-white rounded-lg h-[calc(100vh-80px)] w-[310px] flex flex-col">
            <div className="messenger_header p-[16px] flex items-center justify-between">
                <div className='font-pSans font-extrabold text-xl'>In-call Messages</div>
                <CloseOutlinedIcon className='text-gray-500 hover:text-gray-800 hover:cursor-pointer' fontSize='small' onClick={closeMessenger} />
            </div>

            <div className="alert mb-5 text-xs px-4 font-pSans">
                Messages can be seen only by people in the call and are deleted when the call ends
            </div>


            <div className="scrollBar overflow-y-auto">
                <div className="chat_secion mt-4 px-5">
                    <div className="chat_block">
                        <div className="sender flex space-x-4">
                            <div className="sender_name font-pSans text-sm font-semibold">
                                You
                            </div>
                            <div className="sender_time font-pSans text-xs mt-1 ">
                                12:00 PM
                            </div>
                        </div>
                        <p className="msg text-xs mt-2">hello google</p>
                    </div>
                </div>
            </div>



            <div className="send-msg-section mt-auto mb-3 mx-2 ">

                <textarea id="message" rows="2" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white" placeholder="Send a message"></textarea>

            </div>


        </div> : null
    )
}

export default Messenger