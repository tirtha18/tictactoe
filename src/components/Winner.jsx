import React from 'react'
import Trophy from '../images/Trophy.png'
export default function Winner(props) {
  return ( 
    <div className="flex flex-col items-center">
        <img className="w-[180px] h-[180px] mt-8" src={Trophy} alt="Trophy"/>
        <div className="flex-col justify-center items-center gap-2 flex">
            <div className="justify-center items-center gap-2 inline-flex">
                <div className="text-neutral-800 text-2xl font-medium font-['Inter'] capitalize">Player {props.playerwin ? 'X' : 'O'}</div>
                <div className="text-neutral-800 text-2xl font-medium font-['Inter'] capitalize">Won</div>
            </div>
        <div className="w-[312px] text-center text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Congrats on being the undisputed champion of pressing buttons like a pro.</div></div>
        <div onClick={() => {window.location.reload();}} className="hover:scale-105 cursor-pointer w-[179px] h-[72px] px-12 py-[18px] bg-sky-700 rounded-[56px] shadow justify-center items-center gap-2 inline-flex mt-9 mb-6">
            <div className="text-white text-base font-bold font-['Inter'] uppercase leading-tight tracking-wider">Restart</div>
        </div>
    </div>
  )
}
