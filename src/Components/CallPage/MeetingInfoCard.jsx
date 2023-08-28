import React, { useState } from 'react'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import copy from 'copy-to-clipboard';
import showToast from '../../Utils/showToast';
import { duration } from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import { setMInfo } from '../../Redux/Meeting/MeetingSlice';

const MeetingInfoCard = (props) => {

    

    const meetInfoState = useSelector(state => state.Meeting);
    const dispatch = useDispatch();

    const onClickCross = () => {
        dispatch(setMInfo(false));
    }

    const [url, setUrl] = useState(props.url)

    const copyToClipboard = () => {
        copy(url);
        showToast({
            msg:"Copied meeting link.",
            type:"success",
            duration:3000
        })
    }


    return (
        meetInfoState.meeetingInfo && props.isAdmin?<div className='bg-white border-r-[8px] bottom-1/4 p-5 rounded-md left-[20px] absolute top-auto transition-transform duration-[0.5s] max-w-[20rem]  min-w-[300px] z-10'>
            <div className='flex justify-between'>

                <div className='font-gSans font-bold text-base mb-4'>
                    Your meeting's ready
                </div>

                <CloseOutlinedIcon className='text-gray-500 hover:text-gray-800 hover:cursor-pointer' fontSize='small' onClick={onClickCross}/>

            </div>
            <div className='font-gSans text-gray-800 font-bold mb-5 text-sm'>
                Share this meeting link with others that you want in the meeting
            </div>
            <div className='flex  border-2 p-2 rounded-md bg-gray-200 w-full mb-4 hover:bg-gray-300'>
                <div className='font-gSans text-sm mr-2'>
                    {url}
                </div>
                <ContentCopyOutlinedIcon className='ml-2 text-gray-500 hover:text-gray-800 hover:cursor-pointer hover:shadow-lg' fontSize='small' onClick={copyToClipboard}/>

            </div>

            <div className="flex justify-between my-5">
                <img src="https://www.gstatic.com/meet/security_shield_with_background_2f8144e462c57b3e56354926e0cda615.svg" className='mr-3' alt="" />
                <div className="infor font-gSans text-xs text-gray-500 font-semibold">
                    People who use this meeting link must get your permission before they can join.
                </div>
            </div>

            <div className="joinedAs mb-1">
                    <div className='mt-1 text-xs font-gSans'>
                        Joined as abc@gmail.com
                    </div>
            </div>

        </div>:null
    )
}

export default MeetingInfoCard