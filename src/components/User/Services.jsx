import React from 'react'
import { photos } from '../../assets/images';

const serviceitems = [
    {
      id: 1,
      image: photos.Aadhaar,
      label: "50",
      title: "AADHAR",
      description:
        "this is description",
    },
    {
      id: 2,
      image: photos.Pancard,
      label: "100",
      title: "PANCARD",
      description:
        "this is description",
    },
    {
      id: 3,
      image: photos.Passport,
      label: "2000",
      title: "PASSPORT",
      description:
        "this is description",
    },
    {
      id: 4,
      image: photos.Aadhaar,
      label: "50",
      title: "AADHAR",
      description:
        "this is description",
    },
    {
      id: 5,
      image: photos.Pancard,
      label: "100",
      title: "PANCARD",
      description:
        "this is description",
    },
    {
      id: 6,
      image: photos.Passport,
      label: "2000",
      title: "PASSPORT",
      description:
        "this is description",
    },
  ];

const Services=() => {
  return (
    <>
    <div className="min-h-screen bg-gray-50 py-10 lg:px-40 px-5 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-xl font-extrabold text-gray-800 tracking-wider font-mono">
          SERVICES
        </h2>
        <div className="mt-1 w-16 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {serviceitems.map((serviceitems) => (
    <div
      key={serviceitems.id}
      className="overflow-hidden"
    >
      <div className="relative">
        <img
          src={serviceitems.image}
          alt={serviceitems.title}
          className="w-full h-48 object-cover rounded-3xl"
        />
        <div 
  className="absolute top-2 left-2 bg-blue-500 w-10 h-5 text-xs text-white font-semibold px-3 py-1 rounded-full flex items-center justify-center"
>
  {serviceitems.label}
</div>

      </div>

      <div className="p-4 text-center"> {/* Added 'text-center' class */}
        <h3 className="text-lg font-bold text-gray-800">{serviceitems.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{serviceitems.description}</p>
      </div>
    </div>
  ))}
</div>


      <div className="text-center mt-10">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-6 rounded">
          All Services &rarr;
        </button>
      </div>
    </div>
    </>
  )
}

export default Services