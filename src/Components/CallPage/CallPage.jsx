import React from 'react'
import CallPageHeader from './CallPageHeader'
import MeetingInfoCard from './MeetingInfoCard'
import CallPageFooter from './CallPageFooter'
import Messenger from '../Messenger/Messenger'
import { useParams } from 'react-router-dom'

const CallPage = () => {

  const params = useParams();

  const {id} = params;

  // console.log({id})

  const isAdmin = window.location.hash === '#init'? true : false;
  const url = `${window.location.origin}${window.location.pathname}`;

  


  return (
    <div className="callPageContainer">
      <video className='h-[100vh] w-full  object-cover absolute -z-10' src="" controls></video>
      <div className=''>
        <CallPageHeader />
      </div>
      <div className="meetingInfoCard">
        <MeetingInfoCard isAdmin={isAdmin} url={url}/>
      </div>
      <div className='bg-white bottom-0 w-screen z-10 absolute h-14'>
        <CallPageFooter />
      </div>
      <div>
        <Messenger />
      </div>
    </div>
  )
}

export default CallPage