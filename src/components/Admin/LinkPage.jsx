import React from 'react'
import { FiBell } from "react-icons/fi";

function LinkPage() {
  return (
   <>
   <div className="bg-white text-gray-800 min-h-screen p-6 md:px-36">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold">IMPORTANT LINKS</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Akshaya",  },
          { title: "passport", },
          { title: "Aadhar",  },
          { title: "Pancard", },
          { title: "Akshaya",  },
          { title: "passport", },
          { title: "Aadhar",  },
          { title: "Pancard", },
          
        ].map((event, idx) => (
          <div
          key={idx}
          className="bg-gray-100 w-full lg:w-72 md:w-56 h-64 p-4 rounded-3xl shadow-md text-center cursor-pointer hover:bg-blue-50 flex flex-col items-center justify-center"
        >
          <div 
            className="bg-blue-500 text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-600 flex items-center justify-center"
          >
            <FiBell className="text-2xl m-0" />
          </div>
        
          <h2 className="text-4xl font-semibold truncate mt-4">{event.title}</h2>
          <p className="text-gray-600 mt-2">{event.category}</p>
        
          <div className="pt-4">
            <button className="flex items-center gap-2 bg-gray-100 text-gray-800 py-2 px-6 rounded-full shadow hover:bg-gray-200 transition">
              View More <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        
        ))}
      </div>
    </div>
   </>
  )
}

export default LinkPage