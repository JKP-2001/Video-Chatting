import React,{useState} from 'react'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Navbar = () => {

    const [time,setTime] = useState(new Date().toLocaleTimeString())
    const [date,setDate] = useState(new Date().toLocaleDateString("en-US"))
    

    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
        setDate(new Date().toLocaleDateString("en-US"))
    }, 1000);





    return (
        <div className="flex mt-2 justify-between">
            <div className="hidden md:flex ">
                <VideoCameraFrontIcon className=" ml-2 md:mt-1 text-blue-500" fontSize='large' />
                <h1 className=" mx-2  text-2xl font-pSans text-gray-800 dark:text-gray-800 md:text-3xl">MeetHub</h1>
            </div>

            <div className="flex dateTime text-gray-500">
                <div className="time font-gSans font-semibold ml-5 md:mx-0  md:mt-1 text-base">
                    {time}
                </div>

                <span className='ml-1 -mt-1 md:mt-1 font-semibold text-base'> • </span>
                
                <div className="time font-gSans md:mt-1 ml-1 font-semibold text-base mr-5">
                    {date}
                </div>
            </div>

        </div>
    )
}

export default Navbar