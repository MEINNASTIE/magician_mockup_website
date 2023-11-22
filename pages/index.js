import styles from '../styles/Home.module.css'
import FadeInAndOut from './components/fadeinout'

import FlipCard from './components/flipcard'
import ModalNotice from './components/modalnotice'
import YouTubeBackground from './components/youtubebackground'

export default function Home() {
  
  return (
    <>
    <div className="flex relative">
      <div className="w-1/2 p-4">
        <div className="h-[940px] pt-[80px]">
          <FadeInAndOut>
          <h1 className="text-[150px] font-bold pl-[180px] font-zeyada text-right">Lyney Snezhnevich</h1>
            <h2 className="text-right text-[32px]">Welcome to the art of illusion</h2>
          </FadeInAndOut>
        </div>
      </div>
      <div className={`${styles.headerflip} w-1/2 p-4 shadow-md`}>
        <div className="h-[940px]">
          <FlipCard />
        </div>
      </div>
      <img src="/arrow-13.svg" alt="arrow" className="absolute w-[350px] transform rotate-180 top-[58%] left-[30%]"/>
    </div>

    <div className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
        
          <img
            src="/magic_cat.png"
            alt="Testimonial Icon"
            className="w-20 h-20 mx-auto mb-4"
          />
        </div>
        <FadeInAndOut>
        <h2 className="text-3xl text-gray-800 mb-6">Pen & Teller</h2>
        <p className="text-gray-600">
          "A genius of a magician famed throughout Fontaine. He moves his audience with a combination of sleight of hand and the gift of the gab. Eloquent, ingenious, and with a mind as hard to fathom as a cat."
        </p>
        </FadeInAndOut>
      </div>
    </div>

    <div className="flex">
      <div className="w-1/2 p-4">
        <div className="h-[660px]">
          <YouTubeBackground videoId="3kDWIZebjOM" />
        </div>
      </div>
      <div className={`w-1/2 p-4`}>
        <div className="h-[660px] pl-[100px] relative">
          <FadeInAndOut>
          <h2 className="text-right text-[90px] pt-[40px] font-zeyada font-bold">A humble introduction</h2>
            <p>With the possible exception of the trials held at the Opera Epiclese, Lyney and Lynette's magic show is without a doubt the best live performance in the Court of Fontaine.</p>

            <p>Judgment uses truth to deliver justice. Magic uses facade to reach people's hearts.</p>

            <p>Even if the whole audience knows that everything that takes place on stage is simply trickery and deception, they'll still be dazzled when they're brought face to face with a miracle. Long before the magician's elegant curtain call, the thunder of the cheering and applause will be deafening.</p>

            <p>On stage, Lyney is a Great Magician in the eyes of all. Off stage, he's a reliable older brother, courteous visitor, and devoted friend.</p>

            <p>His every move is a pleasant surprise, every word a reason to smile. His whole being is like an indecipherable enigma that you just can't help trying to solve.</p>

            <p>If you suddenly find yourself so close to him that you're confiding your innermost thoughts, don't be too surprised.</p>

            <p>After all, <span className="text-[#7c264b] font-bold">what is a magician if not an expert in stealing hearts?</span></p>
          </FadeInAndOut>
            <img
              src="/card_back.jpg"
              alt="Magic Card"
              className="absolute top-80 left-[-15%] w-[180px] rounded-[10px] transform rotate-6 shadow-md"
            />
        </div>
      </div>
    </div>
    
    <div className={`${styles.headerflip} w-full h-[250px] shadow-md`}></div>

    <div className="flex">
      <div className="w-1/2 p-4">
        <div className="h-[920px] text-right pl-[90px]">
          <FadeInAndOut>
          <h1 className="text-[90px] font-bold pl-[180px] font-zeyada text-right">Interested in learning magic?</h1>
            <h2 className="text-right text-[32px]">Unleash your Inner Magician: Easy Tricks for Beginners!</h2>
            <p>Have you ever been interested in learning magic trick? Discover the world of magic with these simple yet astonishing tricks to impress yur friends and family. Let Lynette take your hand and lead you with her amazing videos.</p>   
            
            
            <p className="text-gray-600 pt-[70px] text-[20px]">
              "Sometimes it distracts with a feint, others it pretends to slip up and reveal a flaw... When things get serious, sleight of hand dazzles more than the magic itself. Can you guess what it is?"
            </p>
            <p className="text-gray-800 mb-6">—A riddle Lynette set for her younger brother Freminet while blowing on the surface of her tea.</p>

            <button className="border-2 border-[#7c264b] p-[10px] shadow-md hover:bg-[#7c264b] transition ease-out duration-300 hover:text-[#fff8f0]">Start your journey here</button>
            </FadeInAndOut>
        </div>
      </div>
      <div className={`w-1/2 p-4 relative ${styles.backgroundsection}`}>
        <div className="h-[920px]">
        </div>
      </div>
    </div>

    <ModalNotice />
    </>
  )
}