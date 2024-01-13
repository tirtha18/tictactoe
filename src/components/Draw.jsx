import React from 'react';
import Tic from '../images/Tic.png';

export default function Draw() {
  return (
    <div className="flex flex-col items-center">
      <img className="w-[150px] h-[150px] mt-8 mb-7 rounded-2xl shadow-xl" src={Tic} alt="Trophy" />
      <div className="flex-col justify-center items-center gap-2 flex">
        <div className="justify-center items-center gap-2 inline-flex">
          <div className="text-neutral-800 text-2xl font-medium font-['Inter'] capitalize">It's a Draw!</div>
        </div>
        <div className="w-[312px] text-center text-neutral-500 text-base font-normal font-['Inter'] leading-normal">
          Congrats to both of you for equally excelling in the art of not winning.
        </div>
      </div>
      <div onClick={() => {window.location.reload();}} className="w-[179px] h-[72px] px-12 py-[18px] bg-sky-700 rounded-[56px] shadow justify-center items-center gap-2 inline-flex mt-9 mb-6">
        <div className="text-white text-base font-bold font-['Inter'] uppercase leading-tight tracking-wider">Replay</div>
      </div>
    </div>
  );
}
