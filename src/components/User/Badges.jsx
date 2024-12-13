import React from 'react';
import { photos } from '../../assets/images';

function Badges() {
  return (
    <div className="bg-gray-100 flex flex-col items-center py-20 px-4 ">
      <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6" style={{marginTop:"-100px"}}>
        <img src={photos.Aadhaarpng} alt="Aadhaar" className="w-32" />
        <img src={photos.Itmissionpng} alt="IT Mission" className="w-32" />
        <img src={photos.Cscpng} alt="CSC" className="w-32" />
      </div>
    </div>
  );
}

export default Badges;
