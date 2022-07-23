import { Close } from '@mui/icons-material'
import {React,useState} from 'react';


const Announce = () => {
  return <div className='bg-[#8a4af3] font-bold text-white flex items-center justify-center'>
      Hurry up 50% off Sale!
  </div>;
};


// const Announce = () => {
//     const [announceStyle,setAnnounceStyle]=useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center')

//     const closeHandle=()=>{
//         setAnnounceStyle(announceStyle + "hidden")
//     }

//   return (
//     <div className={announceStyle}>
//         <h1>40% discount </h1>
//         <Close className='curser-pointer' onClick={closeHandle}/>
//     </div>
//   )
// }

export default Announce