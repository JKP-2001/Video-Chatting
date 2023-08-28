import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'

import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';

import shortid from 'shortid'
import {useNavigate} from 'react-router-dom'



const HomePage = () => {

  const navigate = useNavigate();

  const [link, setLink] = useState('')

  const handleLink = (e) => {
    setLink(e.target.value)
  }


  const startCall = () => {
    const uid = shortid.generate();
    navigate(`/call/${uid}#init`)
  }





  return (
    <>
      <div className='fixed top-0 bg-white w-full pb-2'>
      <Navbar />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-start  mt-16 md:mt-40 ">
        <div className=' md:mr-28 mx-5 max-w-xl'>
          <div className='font-gSans mx-1 text-5xl font-bold my-2 md:my-5'>
            Unlocking Premium Video Meetings for All - Now Free.
          </div>
          <div className='font-gSans text-gray-500 font-bold mt-5'>
            Experience the future of virtual meetings with MeetHub. We've reimagined secure business interactions for all, offering an advanced, user-friendly platform designed to empower your success
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <button className="flex bg-blue-500 hover:bg-blue-600 font-gSans text-white font-bold py-2 px-4 rounded-md mt-5 md:mt-10 md:mr-5" onClick={startCall}>
              <VideoCallOutlinedIcon className="mr-2"/>
              New Meeting
            </button>
            
            <label className='flex'>
              {/* <KeyboardOutlinedIcon className="mt-5 md:mt-10 mr-2" /> */}
              <input className="bg-white border-[1px] border-black hover:bg-gray-200 font-gSans text-gray-800 font-bold py-2 px-4 rounded-md mt-5 md:mt-10 md:ml-5" type="text" placeholder="Enter a code or link" onChange={handleLink} vlaue={link} />
            </label>

            {link.length>0?<button className="w-auto bg-blue-500 hover:bg-blue-600 font-gSans text-white font-bold py-2 px-4 rounded-md mt-5 md:mt-10 md:ml-5">
              Join
            </button>:null}


          </div>
        </div>

        <div className='image-section my-2 -mt-5 md:-mt-20'>
          <img className="" src="https://img.icons8.com/?size=512&id=117342&format=png" alt="" />
        </div>

      </div>



    </>
  )
}

export default HomePage