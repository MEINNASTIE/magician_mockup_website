import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';


const ModalNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <button
              onClick={handleClose}
              className="absolute top-[39%] right-[31%] text-gray-500 hover:text-gray-700"
            >
              X
            </button>
            <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: [0, -20, 0, -10, 0] }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
            >
            <div className="flex">
                <div>
                    <p className="text-[40px] font-semibold mb-4 font-zeyada ">Join the show</p>
                    <p className="text-gray-600">
                    Reserve a ticket at the known and majestic Opera Epiclese in Fontaine<br></br> and enjoy the best performance of your life!
                    </p>
                    <Link href="/book">
                      <button className="border-2 border-[#7c264b] p-[10px] shadow-md hover:bg-[#7c264b] transition ease-out duration-300 hover:text-[#fff8f0] mt-[20px]">Book here</button>
                    </Link>
                </div>
            <img src="/lyney-genshin-impact.gif" alt="Lyney logo" className="w-[190px]"/>
            </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalNotice;
