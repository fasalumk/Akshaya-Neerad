import React from 'react'
import UserNavbar from '../Navbar/UserNavbar'
import Footer from '../Footer/Footer'

function LocationPage() {
  return (
    <>
    <UserNavbar />
     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-20 px-4">
     <div className="text-center mb-10">
        <h2 className="text-xl font-extrabold text-gray-800 tracking-wider font-mono">
          LOCATION
        </h2>
        <div className="mt-1 w-16 h-1 bg-blue-500 mx-auto"></div>
      </div>
      {/* Updated height for the white box */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6 h-[700px] lg:h-[400px]">
        {/* Container for the two columns */}
        <div className="flex flex-col lg:flex-row h-[500px] lg:h-[350px]">
          {/* Left Column: Map */}
          <div className="w-full lg:w-1/2 h-2/3 lg:h-full mb-8 lg:mb-0">
            <iframe
              title="Akshaya Location"
              src="https://maps.app.goo.gl/k2ZcyH9f9o2izTA97"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Right Column: Contact and Address */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-8">
            {/* Contact Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Contact</h1>
              <p className="text-gray-600">
                Phone:{" "}
                <a href="tel:+919497555535" className="text-blue-500">
                  94975 55535
                </a>
              </p>
            </div>

            {/* Address Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Address</h2>
              <p className="text-gray-600">
              Akshaya Centre Neerad
                <br />
                Neerad, Muthuvalloor PO, Malappuram Dist.
                <br />
                Pin: 673638, Kerala, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default LocationPage