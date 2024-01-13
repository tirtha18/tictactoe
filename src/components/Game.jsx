import React, { useState } from 'react';
import { useEffect } from 'react';
import Winner from './Winner';
import anime from 'animejs';
import Draw from './Draw';
export default function Game(props) {
  const grid = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
  ];
  const [tictac, settictac] = useState(grid);
  const [turn, setturn] = useState(1);
  const [draw, setdraw] = useState(false);
  const [onewins, setonewins] = useState(false);
  const [twowins, settwowins] = useState(false);
  const [wins, setwins] = useState(false);
  const [player, setplayer] = useState();
  const [r1c1, setr1c1] = useState('');
  const [r1c2, setr1c2] = useState('');
  const [r1c3, setr1c3] = useState('');
  const [r2c1, setr2c1] = useState('');
  const [r2c2, setr2c2] = useState('');
  const [r2c3, setr2c3] = useState('');
  const [r3c1, setr3c1] = useState('');
  const [r3c2, setr3c2] = useState('');
  const [r3c3, setr3c3] = useState('');
  const [r1c1p, setr1c1p] = useState(false);
  const [r1c2p, setr1c2p] = useState(false);
  const [r1c3p, setr1c3p] = useState(false);
  const [r2c1p, setr2c1p] = useState(false);
  const [r2c2p, setr2c2p] = useState(false);
  const [r2c3p, setr2c3p] = useState(false);
  const [r3c1p, setr3c1p] = useState(false);
  const [r3c2p, setr3c2p] = useState(false);
  const [r3c3p, setr3c3p] = useState(false);
  function changevalue(ri, ci, turn) {
    const newArray = [...tictac];
    if (turn & 1) {
      newArray[ri][ci] = 1;
    } else {
      newArray[ri][ci] = 0;
    }
    settictac(newArray);
  }
  useEffect(() => {
    if (props.playerstart === 1) {
      setturn(1);
    } else {
      setturn(0);
    }
  }, [props.playerstart]);
  function checkwinner(turn) {
    let drwc = 0;
    let isequal = false;
    console.log(tictac);
    for (let i = 0; i < tictac.length; i++) {
      let c = 0,
        d = 0,
        a = tictac[i][0],
        b = tictac[0][i];

      for (let j = 0; j < tictac.length; j++) {
        if (tictac[i][j] === a && a !== -1) {
          c++;
        }
        if (tictac[j][i] === b && b !== -1) {
          d++;
        }
        if(tictac[i][j] !== -1)
         drwc++;
      }
      console.log(c);console.log(d);
      if (c === 3 || d === 3) {
        isequal = true;
      }
    }
    console.log(tictac);
    console.log(turn);
    if (
      isequal ||
      (tictac[0][0] === tictac[1][1] && tictac[0][0] === tictac[2][2] && tictac[0][0] !== -1) ||
      (tictac[0][2] === tictac[1][1] && tictac[0][2] === tictac[2][0] && tictac[0][2] !== -1)
    ) {
      //alert("Win");
      setwins(true);
    }
    else 
    {
      if(drwc===9)
      setdraw(true);
    }
    console.log(draw);
  }
  
  useEffect(() => {
    //console.log(wins + ' '+ onewins + ' ' + twowins + ' '+ props.playerstart);
    if(wins)
    {
    if (turn & 1) {
      settwowins(true);
    } 
    else {
      setonewins(true);
    }
    }
  }, [wins,turn]);
  useEffect(() => {
      if(turn&1)
      setplayer("X's");
      else
      setplayer("O's");
  }, [turn])
  useEffect(() => {
    const moduleElement = document.querySelector('.SliderWin');
    anime.set(moduleElement, {
      translateY: 100,
      opacity: 0,
    });
    anime({
      targets: moduleElement,
      translateY: 0,
      opacity: 1,
      easing: 'easeInOutQuad',
      duration: 700,
    });
  }, [onewins,twowins]);
  console.log(draw);
  useEffect(() => {
    const moduleElement = document.querySelector('.SliderDraw');
    anime.set(moduleElement, {
      translateY: 200,
      opacity: 0,
    });
    anime({
      targets: moduleElement,
      translateY: 0,
      opacity: 1,
      easing: 'easeInOutQuad',
      duration: 700,
    });
  }, [draw]);
  return (
    <div className=" text-white bg-black flex w-screen items-center justify-center min-h-screen ">
      <div className=" bg-sky-400 flex flex-col min-w-[360px] h-screen max-w-full items-center  relative">
        <div className="w-[182px] h-[61px] px-6 py-4 bg-white rounded-bl-2xl rounded-br-2xl justify-center items-center gap-2 inline-flex">
          <div className="text-center text-sky-400 text-2xl font-bold">Tic Tac Toe</div>
        </div>
        <div className=" text-white  text-[32px] font-medium top-[240px] mt-auto">
          <h1>Player {player} Turn!</h1>
        </div>
        <div className="flex flex-col justify-center h-80 w-[360px] mt-auto mb-12">
          <div className="flex flex-row h-1/3 border-y-4 border-white">
            {/* Row 1 */}
            <button
              className="bg-transparent font-bold text-7xl py-2 px-2 w-1/3 border-r-4 border-white"
              onClick={() => {
                if (!r1c1p) {
                  setturn(turn + 1);
                  changevalue(0, 0, turn);
                  if (turn & 1) {
                    setr1c1(<div className="text-pink-400">X</div>);
                  } else {
                    setr1c1(<div className=" text-yellow-300">O</div>);
                  }
                }
                checkwinner(turn);
                setr1c1p(true);
              }}
            >
              {r1c1}
            </button>
            <button
              className="bg-transparent  font-bold py-2 px-2 w-1/3 border-r-4 border-white text-7xl"
              onClick={() => {
                
                if (!r1c2p) {
                  setturn(turn + 1);
                  changevalue(0, 1, turn);
                  if (turn & 1) {
                    setr1c2(<div className="text-pink-400">X</div>);
                  } else {
                    setr1c2(<div className="text-yellow-300">O</div>);
                  }
                }
                checkwinner(turn);
                setr1c2p(true);
              }}
            >
              {r1c2}
            </button>
            <button
              className="bg-transparent text-white font-bold py-2 px-2 w-1/3 text-7xl pb-2"
              onClick={() => {
                
                if (!r1c3p) {
                  setturn(turn + 1);
                  changevalue(0, 2, turn);
                  if (turn & 1) {
                    setr1c3(<div className="text-pink-400">X</div>);
                  } else {
                    setr1c3(<div className="text-yellow-300">O</div>);
                  }
                }
                checkwinner(turn);
                setr1c3p(true);
              }}
            >
              {r1c3}
            </button>
          </div>
          <div className="flex flex-row h-1/3 border-b-4 border-white">
            {/* Row 2 */}
            <button
              className="bg-transparent text-white font-bold py-2 px-2 w-1/3 border-r-4 border-white text-7xl"
              onClick={() => {
                
                if (!r2c1p) {
                  setturn(turn + 1);
                  changevalue(1, 0, turn);
                  if (turn & 1) {
                    setr2c1(<div className="text-pink-400">X</div>);
                  } else {
                    setr2c1(<div className="text-yellow-300">O</div>);
                  }
                }
                checkwinner(turn);
                setr2c1p(true);
              }}
            >
              {r2c1}
            </button>
            <button
              className="bg-transparent text-white font-bold py-2 px-2 w-1/3 border-r-4 border-white text-7xl"
              onClick={() => {
                if (!r2c2p) {
                  setturn(turn + 1);
                  changevalue(1, 1, turn);
                  if (turn & 1) {
                    setr2c2(<div className="text-pink-400">X</div>);
                  } else {
                    setr2c2(<div className="text-yellow-300">O</div>);
                  }
                }
                checkwinner(turn);
                setr2c2p(true);
              }}
            >
              {r2c2}
            </button>
            <button
              className="bg-transparent text-white font-bold py-2 px-2 w-1/3 text-7xl"
              onClick={() => {
                
                if (!r2c3p) {
                  setturn(turn + 1);
                  changevalue(1, 2, turn);
                  if (turn & 1) {
                    setr2c3(<div className="text-pink-400">X</div>);
                  } else {
                    setr2c3(<div className="text-yellow-300">O</div>);
                  }
                  checkwinner(turn);
                }
                setr2c3p(true);
              }}
            >
              {r2c3}
            </button>
          </div>
          <div className="flex flex-row h-1/3 border-b-4 border-white">
            {/* Row 3 */}
            <button
              className="bg-transparent text-white font-bold py-2 px-2 w-1/3 border-r-4 border-white text-7xl"
              onClick={() => {
                if (!r3c1p) {
                  setturn(turn + 1);
                  changevalue(2, 0, turn);
                  if (turn & 1) {
                    setr3c1(<div className="text-pink-400">X</div>);
                  } else {
                    setr3c1(<div className="text-yellow-300">O</div>);
                  }
                  checkwinner(turn);
                }
                setr3c1p(true);
              }}
            >
              {r3c1}
            </button>
            <button
              className="bg-transparent text-white font-bold py-2 px- w-1/3 border-r-4 border-white text-7xl"
              onClick={() => {
                if (!r3c2p) {
                  setturn(turn + 1);
                  changevalue(2, 1, turn);
                  if (turn & 1) {
                    setr3c2(<div className="text-pink-400">X</div>);
                  } else {
                    setr3c2(<div className="text-yellow-300">O</div>);
                  }
                  checkwinner(turn);
                }
                setr3c2p(true);
              }}
            >
              {r3c2}
            </button>
            <button
              className="bg-transparent text-white font-bold py-2 px-2 w-1/3 text-7xl"
              onClick={() => {

                if (!r3c3p) {
                  setturn(turn + 1);
                  changevalue(2, 2, turn);
                  if (turn & 1) {
                    setr3c3(<div className="text-pink-400">X</div>);
                  } else {
                    setr3c3(<div className="text-yellow-300">O</div>);
                  }
                }
                setr3c3p(true);
                checkwinner(turn);
              }}
            >
              {r3c3}
            </button>
          </div>
        </div>
        {(onewins||twowins)&&(
        <div className="SliderWin">
          <div className="z-10 absolute bottom-0 bg-white rounded-t-3xl left-1/2 transform -translate-x-1/2 min-w-[360px] items-center justify-center">
            <div className=""><Winner playerwin={onewins}></Winner></div>
          </div>
        </div>)}
        {(draw)&&(
        <div className="SliderDraw">
          <div className="z-10 absolute bottom-0 bg-white rounded-t-3xl left-1/2 transform -translate-x-1/2 min-w-[360px] items-center justify-center">
            <div className=""><Draw ></Draw></div>
          </div>
        </div>)}
      </div>
    </div>
  );
}
