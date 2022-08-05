import React, { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export default function App() {
  let { width, height } = useWindowSize();
  const words = ['cousin', 'mentor', 'teacher', 'developer', 'friend', 'role model', 'genius'];
  const [text, setText] = useState(words[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
	const [confetties, setConfetties] = useState([
		<Confetti
        confettiSource = {{
          x: 0,
          y: height / 3,
          w: 1,
          h: 30
        }}
        wind = { .02 }
				numberOfPieces = { 100 }
      />,
      <Confetti
        confettiSource = {{
          x: width,
          y: height / 3,
          w: 1,
          h: 30
        }}
        wind = { -.02 }
				numberOfPieces = { 100 }
      />
	]);
  return (
    <div>
      {confetties}
      <button
        className='fixed top-20 left-1/2 -translate-x-1/2 font-bold text-9xl z-30 hover:scale-125 active:scale-100 transition-transform focus-visible:outline-none focus:outline-none'
        onClick={(e) => {
          const r = () => {
            const v = Math.floor(Math.random() * words.length);
            return v === currentIndex ? r : v;
          }
          setCurrentIndex(r());
          setText(words[currentIndex]);
					setConfetties([
						...confetties,
						<Confetti
							confettiSource = {{
								x: Math.random() * width,
								y: Math.random() * height,
								w: 1,
								h: 30,
							}}
							numberOfPieces = { 20 }
							wind = { .02 }
      			/>
					]);
        }}
      >
        🎉<br/><div className = 'text-sm'>click</div>
      </button>
      <div className='flex h-screen justify-center items-center text-3xl text-center'>
        <div>
          Happy birthday to <span className="font-bold text-5xl underline">Patrick</span>
          {/* <br/>
          an awesome <span className = 'inline-block p-2 border-red-500 border-[3px] bg-amber-500'>{ text }</span> */}
        </div>
      </div>
    </div>
  )
}