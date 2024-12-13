import React, { useState, useEffect } from "react";
import { photos } from '../../assets/images';

function DateandTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-white p-4 shadow-lg text-center h-28 flex flex-col items-center justify-center">
      {/* Styled Box for "Logged in" with Excel download link */}
      <div className="bg-red-600 text-xs border h-7 w-24 text-white font-bold rounded-md mb-1 flex items-center justify-center">
        <a
          href={photos.excel}
          download="LULU INVOICE.xlsm"
          className="text-white"
        >
          Logged in
        </a>
      </div>
      {/* Flexbox for Date and Time */}
      <div className="justify-center items-center gap-8">
        <div className="text-xs text-red-600 italic">
          Date: <span className="font-semibold">{currentTime.toLocaleDateString()}</span>
        </div>
        <div className="text-xs text-red-600 italic">
          Time: <span className="font-semibold">{currentTime.toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
}

export default DateandTime;
