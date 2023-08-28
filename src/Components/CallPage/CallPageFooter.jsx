import React from 'react'

import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined';

import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';

import PresentToAllOutlinedIcon from '@mui/icons-material/PresentToAllOutlined';

import CallEndOutlinedIcon from '@mui/icons-material/CallEndOutlined';

import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';


const CallPageFooter = () => {



    return (
        <div className="container">
            <div className="flex justify-between md:justify-between items-center mt-[5px]">
                <div className="md:flex hidden">
                    {/* <div className="ml-10 font-gSans meetinginfo font-semibold hover:cursor-pointer hover:text-gray-800">
                        Meeting Info
                    </div>
                    <ArrowDropUpTwoToneIcon className="text-gray-500 hover:text-gray-800 hover:cursor-pointer " /> */}

                </div>
                <div className="flex ml-10 space-x-10 items-center">
                    <div className='boxCon p-[7px] rounded-full bg-[#ea4335]'>

                        <VideocamOffOutlinedIcon className="text-gray-500 hover:text-gray-800 hover:cursor-pointer" />
                    </div>
                    <div className='boxCon p-[7px] rounded-full bg-[#ea4335]'>

                        <MicOffOutlinedIcon className="text-gray-500 hover:text-gray-800 hover:cursor-pointer" />
                    </div>
                    <div className='boxCon p-[7px] rounded-full '>
                        <PresentToAllOutlinedIcon className="text-gray-500 hover:text-gray-800 hover:cursor-pointer" />
                    </div>
                    <div className="boxCon p-[7px] rounded-full bg-[#ea4335]">
                        <CallEndOutlinedIcon />
                    </div>
                </div>
                <div className=" hidden md:block font-gSans meetinginfo font-semibold ">
                    {/* Meeting Info */}
                </div>
            </div>
        </div>
    )
}

export default CallPageFooter