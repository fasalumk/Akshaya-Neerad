import React, { useState } from "react";
import { photos } from "../../assets/images";
import UserNavbar from "../Navbar/UserNavbar";
import Footer from "../Footer/Footer";

const initialServiceItems = [
  {
    id: 1,
    image: photos.Aadhaar,
    label: "50",
    title: "AADHAR",
    description: "this is description",
  },
  {
    id: 2,
    image: photos.Pancard,
    label: "100",
    title: "PANCARD",
    description: "this is description",
  },
  {
    id: 3,
    image: photos.Passport,
    label: "2000",
    title: "PASSPORT",
    description: "this is description",
  },
  {
    id: 4,
    image: photos.Aadhaar,
    label: "50",
    title: "AADHAR",
    description: "this is description",
  },
  {
    id: 5,
    image: photos.Pancard,
    label: "100",
    title: "PANCARD",
    description: "this is description",
  },
  {
    id: 6,
    image: photos.Passport,
    label: "2000",
    title: "PASSPORT",
    description: "this is description",
  },
  {
    id: 9,
    image: photos.Aadhaar,
    label: "5000",
    title: "SPECIAL SERVICE",
    description: "This is a detailed description of the special service.",
  },
  {
    id: 10,
    image: photos.Pancard, // Unique image for id: 10
    label: "10000",
    title: "PREMIUM SERVICE",
    description: "This is a detailed description of the premium service.",
  },
];

const ServicePage = () => {
  const [serviceItems, setServiceItems] = useState(
    initialServiceItems.filter((item) => item.id !== 9 && item.id !== 10) // Exclude id: 9 and 10 initially
  );
  const [showMore, setShowMore] = useState(false);

  const handleSeeMore = () => {
    if (!showMore) {
      const additionalServices = initialServiceItems.filter(
        (item) => item.id === 9 || item.id === 10
      );
      setServiceItems((prev) => [...prev, ...additionalServices]);
      setShowMore(true);
    }
  };

  return (
    <>
      <UserNavbar />
      <div className="min-h-screen bg-gray-100 py-10 px-40">
        <div className="text-center mb-10">
          <h2 className="text-xl font-extrabold text-gray-800 tracking-wider font-mono">
            SERVICES
          </h2>
          <div className="mt-1 w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((serviceItem) => (
            <div key={serviceItem.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={serviceItem.image}
                  alt={serviceItem.title}
                  className="w-full h-48 object-cover rounded-3xl"
                />
                <div className="absolute top-2 left-2 bg-blue-500 w-10 h-5 text-xs text-white font-semibold px-3 py-1 rounded-full flex items-center justify-center">
                  {serviceItem.label}
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">
                  {serviceItem.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {serviceItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={handleSeeMore}
            className={`bg-blue-500 ${
              showMore ? "cursor-pointer hover:bg-blue-600" : ""
            } text-white text-sm font-semibold py-2 px-6 rounded`}
            disabled={showMore} // Disable button after showing more services
          >
            SEE MORE &rarr;
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
