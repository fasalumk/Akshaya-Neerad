import React from "react";
import { photos } from '../../../assets/images';
// import  "./CounterImage.scss"

const CounterImage: React.FC = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Main Section */}
      <div className="max-w-7xl w-full mx-auto bg-white p-6 rounded-3xl shadow-lg flex flex-col lg:flex-row items-center">


        {/* Center Image Section */}
        <div className="relative mx-8 my-4">
          <img
            src={photos.Logo}
            alt="Placeholder"
            className="rounded-3xl border-4 border-primary"
          />
          <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full shadow-md">
            Pause
          </button>
        </div>

        {/* Right Stats Section */}
        <div className="flex flex-col items-center lg:items-end gap-6 ">
          <div className="flex items-center gap-4  lg:pl-64">
            <div className="bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5zm1.035-1.244A.5.5 0 0 1 6.5 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.465-.744zM8 4a.5.5 0 0 1 .465.744l-1.732 3.5a.5.5 0 0 1-.93-.488L7.536 4H8zm1.5 0a.5.5 0 0 1 .465.744l-1.732 3.5a.5.5 0 0 1-.93-.488L9.036 4H9.5z" />
              </svg>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-xl font-bold">65+</p>
              <p className="text-gray-600">Services</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 0 1-3-3h2a2 2 0 0 0 2-2V0a3 3 0 0 1 3 3v2a2 2 0 0 0-2 2H8zm-7 8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2H1zm12-1a1 1 0 0 1-1-1H2a1 1 0 0 1 0 2h10z" />
              </svg>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-xl font-bold">1500+</p>
              <p className="text-gray-600">Staffs</p>
            </div>
          </div>
        </div>
      </div>
      

      {/* Footer Text */}
      <h1 className="text-2xl font-bold mt-8">History of Pride, Inspiring Future</h1>
    </div>

<div className="flex gap-4 bg-gray-100 justify-center">
<button className="bg-green-500 text-white hover:bg-white hover:text-blue-500 hover:border-2 border-blue-500 font-semibold py-2 px-6 rounded-3xl">
  Join Whatsapp
</button>
<button className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-semibold py-2 px-6 rounded-3xl flex items-center">
  Contact 
</button>

</div>
  <div className="bg-gray-100"><br /> <br /></div>
</>
  );
};

export default CounterImage;
