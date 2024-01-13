import React, { useState } from 'react'
import Tic from '../images/Tic.png'
import Game from './Game'
import { useEffect } from 'react'
import anime from 'animejs';
export default function Welcome() {
    const [bclicked,setbclicked] = useState(-1);
    const [clicked,setclicked] =useState(false);
    useEffect(() => {
        const moduleElement = document.querySelector('.Gameup');
        anime.set(moduleElement, {
          translateY: 0,
          opacity: 0,
        });
        anime({
          targets: moduleElement,
          translateY: 0,
          opacity: 1,
          easing: 'easeInOutQuad',
          duration: 100,
        });
      }, [clicked]);
    return (
    <div className=" text-white bg-black flex w-screen items-center justify-center min-h-screen ">
        <div className=" bg-sky-400 flex flex-col w-screen sm:w-[360px] h-screen items-center relative">
            <div className="w-[182px] h-[61px] px-6 py-4 bg-white rounded-bl-2xl rounded-br-2xl justify-center items-center gap-2 inline-flex">
                <div className="text-center text-sky-400 text-2xl font-bold">Tic Tac Toe</div>
            </div>
            <div className="mt-28 mb-auto w-[240px] rounded-3xl shadow-2xl shadow-sky-900">
                <img src={Tic} alt="TicTacToe" className=" rounded-3xl" style={{transformStyle: "preserve-3d",backfaceVisibility: "hidden",filter: "brightness(90%) contrast(110%)"}}/>
            </div>
            <div className="text-center text-gray-200  text-2xl font-bold font-['Inter'] mb-auto mt-8">Who is playing first?</div>
            <div className="mb-auto w-[360px] h-20 px-6 justify-start items-start gap-4 inline-flex ">
                <div onClick={()=>{setbclicked(1); setclicked(true);}} style={{transformStyle: "preserve-3d",backfaceVisibility: "hidden",filter: "brightness(90%) contrast(110%)",}} className="w-[148px] h-20 cursor-pointer p-6 bg-white rounded-[80px] border border-gray-200 justify-center items-center gap-[163px] inline-flex text-pink-400 font-bold text-6xl text-center shadow-2xl hover:scale-105 duration-400">
                    <div>X</div>
                </div>
                <div onClick={()=>{setbclicked(0); setclicked(true);}} style={{transformStyle: "preserve-3d",backfaceVisibility: "hidden",filter: "brightness(90%) contrast(110%)",}} className="w-[148px] h-20 cursor-pointer p-6 bg-white rounded-[80px] border border-gray-200 justify-center items-center gap-[163px] inline-flex mb-auto text-yellow-300 font-bold text-6xl shadow-2xl hover:scale-105 duration-400">
                    <div>O</div>
                </div>
            </div>
            {(clicked)&&
            (<div className="Gameup">
                <div className="z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-screen sm:min-w-[360px] items-center justify-center">
                    <div className=""><Game playerstart={bclicked}></Game></div>
                </div>
            </div>)
            }      
        </div>
    </div>
  )
}
