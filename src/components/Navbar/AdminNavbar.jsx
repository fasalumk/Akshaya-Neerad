import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { photos } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPassport,
  faIdCard,
  faBook,
  faImage,
  faFastForward,
  faBuilding,
  faBars
} from '@fortawesome/free-solid-svg-icons';


const AdminNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // For desktop hover dropdown
  const [servicedownOpen, setServicedownOpen] = useState(false); // For desktop hover dropdown
  const [educationdownOpen, setEducationdownOpen] = useState(false);
  const [gallerydownOpen, setGallerydownOpen] = useState(false);

  //submenu
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [subparivahanOpen, setSubparivahanOpen] = useState(false); // For desktop hover submenu


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // For mobile menu toggle
  const navbarRef = useRef(null); // Ref for detecting outside clicks
  const location = useLocation(); // React Router's hook for tracking current location

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Reset dropdown and submenu state on navigation
  useEffect(() => {
    setDropdownOpen(false);
    setSubmenuOpen(false);
  }, [location]); // Runs whenever the route changes

  return (
    <>
      <nav className="bg-blue-100  font-semibold text-gray-700" ref={navbarRef}>
        <div className="container mx-auto md:px-36 py-3 h-20 flex items-center sm: px-10 ">
          {/* Logo */}
          <img src={photos.Logo} alt="" className="w-10"/>
          <div className="text-xl font-bold ">AKSHAYA ADMIN</div>

          {/* Desktop Menu Items */}
          <ul className="hidden lg:flex space-x-4 lg:space-x-6 pl-64 font-serif ">
      {/* PREMIUM */}
      <li
        className="relative"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <span className="hover:text-blue-500 cursor-pointer">
          <FontAwesomeIcon icon={faPassport} className="mr-2" />
          PREMIUM
        </span>
        {dropdownOpen && (
          <ul  className="absolute top-full left-0 bg-gray-100 w-64 rounded shadow-lg z-50 "
          style={{ maxHeight: "400px", marginTop: "2px" }}>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://www.passportindia.gov.in/AppOnlineProject/user/userLogin">
                <FontAwesomeIcon icon={faPassport} className="mr-2" />
                PASSPORT SEVA
              </a>
            </li>
            <li
              className="relative px-4 py-2 hover:bg-gray-200"
              onMouseEnter={() => setSubmenuOpen(true)}
              onMouseLeave={() => setSubmenuOpen(false)}
            >
              <span className="cursor-pointer">
                <FontAwesomeIcon icon={faIdCard} className="mr-2" />
                PANCARD
              </span>
              {submenuOpen && (
                <ul className="absolute top-0 left-full mt-0 bg-gray-100 w-64 rounded shadow-lg z-40">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://www.psaonline.utiitsl.com/psapanservices/forms/login.html/loginHome">UTI MALAPPURAM</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan">INSTANT E-PAN</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://pan.altruistindia.com/login?logout">NSDL PALAKKAD</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://pan.altruistindia.com/login?logout">AADHAR TO PAN SEARCH</a>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative px-4 py-2 hover:bg-gray-200"
              onMouseEnter={() => setSubparivahanOpen(true)}
              onMouseLeave={() => setSubparivahanOpen(false)}
            >
              <span className="cursor-pointer">
                <FontAwesomeIcon icon={faIdCard} className="mr-2" />
                PARIVAHAN
              </span>
              {subparivahanOpen && (
                <ul className="absolute top-0 left-full mt-0 bg-gray-100 w-64 rounded shadow-lg z-40">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://vahan.parivahan.gov.in/vahanservice/vahan/ui/statevalidation/homepage.xhtml?statecd=Mzc2MzM2MzAzNjY0MzIzODM3NjIzNjY0MzY2MjM3NGI0Yw==">VEHICLE RELATED SERVICES</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do">DRIVING LICENCE</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://echallan.parivahan.gov.in/index/accused-challan">CAMERA  FINE</a>
                  </li>
                </ul>
              )}
            </li>
          <li className="px-4 py-2 hover:bg-gray-200">
    <a href="https://foscos.fssai.gov.in/">
      <FontAwesomeIcon icon={faBuilding} className="mr-2" />
      FSSI REGISTRATION
    </a>
  </li>
         <li className="px-4 py-2 hover:bg-gray-200">
    <a href="https://foscos.fssai.gov.in/">
      <FontAwesomeIcon icon={faBuilding} className="mr-2" />
      LABOUR REGISTRATION
    </a>
  </li>
          </ul>
        )}
      </li>

      {/* FASTRACK */}
      <li
        className="relative"
        onMouseEnter={() => setServicedownOpen(true)}
        onMouseLeave={() => setServicedownOpen(false)}
      >
        <span className="hover:text-blue-500 cursor-pointer">
          <FontAwesomeIcon icon={faBuilding} className="mr-2" />
          FASTRACK
        </span>
        {servicedownOpen && (
          <ul className="absolute top-full left-0 bg-gray-100 w-64 rounded shadow-lg z-50 "
          style={{ maxHeight: "400px", marginTop: "2px" }}>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="http://176.97.66.217/akshaya/Adminlogin.aspx">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                AKSHAYA BILLING
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://uidai.gov.in/en/">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                AADHAAR
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://connect.csc.gov.in/account/authorize?response_type=code&client_id=0f8ca686-5a31-46b8-bb51-d9834ba9fa9d&redirect_uri=https%3A%2F%2Fdigitalseva.csc.gov.in%2Fauth%2Fcallback%2F&state=77254">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                CSC DIGITAL SEVA
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://edistrict.kerala.gov.in/edportalsignin.jsp?lang=en">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                E-DISTRICT
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://voters.eci.gov.in/">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                VOTTER ID
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                RATION CARD
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://ksmart.lsgkerala.gov.in/ui/home/citizen/login">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                K-SMART
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://citizen.lsgkerala.gov.in/">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                ILGMS
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://revenue.kerala.gov.in/">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
               LAND TAX
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://tax.lsgkerala.gov.in/epayment/QuickPaySearch.php">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                BUILDING TAX
              </a>
            </li>
          </ul>
        )}
      </li>

      {/* EDUCATION */}
      <li
        className="relative"
        onMouseEnter={() => setEducationdownOpen(true)}
        onMouseLeave={() => setEducationdownOpen(false)}
      >
        <span className="hover:text-blue-500 cursor-pointer">
          <FontAwesomeIcon icon={faBook} className="mr-2" />
          EDUCATION
        </span>
        {educationdownOpen && (
          <ul className="absolute top-full left-0 bg-gray-100 w-64 rounded shadow-lg z-50 "
          style={{ maxHeight: "400px", marginTop: "2px" }}>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#web-development">
                <FontAwesomeIcon icon={faBook} className="mr-2" />
                ADMISSION
              </a>
            </li>
          </ul>
        )}
      </li>

      {/* SERVICES*/}
      <li
        className="relative"
        onMouseEnter={() => setGallerydownOpen(true)}
        onMouseLeave={() => setGallerydownOpen(false)}
      >
        <span className="hover:text-blue-500 cursor-pointer">
          <FontAwesomeIcon icon={faImage} className="mr-2" />
          SERVICES
        </span>
        {gallerydownOpen && (
          <ul className="absolute top-full left-0 bg-gray-100 w-64 rounded shadow-lg z-50 "
          style={{ maxHeight: "400px", marginTop: "2px" }}>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#web-development">
                <FontAwesomeIcon icon={faFastForward} className="mr-2" />
                FASTRACK
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#web-development">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                AKSHAYA BILLING
              </a>
            </li>
          </ul>
        )}
      </li>
    </ul>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              className="text-black pl-52 hover:text-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
             <FontAwesomeIcon icon={faBars} className="text-lg" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-white lg:hidden">
            <ul className="space-y-2 py-2">
               {/* PREMUIM */}
              <li className="px-4 py-2 hover:bg-gray-100">
                <button
                  className="w-full text-left"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <FontAwesomeIcon icon={faPassport} className="mr-2" />
                  PREMUIM
                </button>
                {dropdownOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <a href="https://www.passportindia.gov.in/AppOnlineProject/user/userLogint">PASSPORT SEVA</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <button
                        className="w-full text-left"
                        onClick={() => setSubmenuOpen(!submenuOpen)}
                      >
                        PANCARD
                      </button>
                      {submenuOpen && (
                        <ul className="pl-4 mt-2 space-y-2 ">
                           <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://www.psaonline.utiitsl.com/psapanservices/forms/login.html/loginHome">UTI MALAPPURAM</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan">INSTANT E-PAN</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://pan.altruistindia.com/login?logout">NSDL PALAKKAD</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://pan.altruistindia.com/login?logout">AADHAR TO PAN SEARCH</a>
                  </li>
                        </ul>
                      )}
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <button
                        className="w-full text-left"
                        onClick={() => setSubparivahanOpen(!subparivahanOpen)}
                      >
                        PARIVAHAN
                      </button>
                      {subparivahanOpen && (
                        <ul className="pl-4 mt-2 space-y-2 ">
                          <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://vahan.parivahan.gov.in/vahanservice/vahan/ui/statevalidation/homepage.xhtml?statecd=Mzc2MzM2MzAzNjY0MzIzODM3NjIzNjY0MzY2MjM3NGI0Yw==">VEHICLE RELATED SERVICES</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do">DRIVING LICENCE</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://echallan.parivahan.gov.in/index/accused-challan">CAMERA  FINE</a>
                  </li>
                        </ul>
                      )}
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
    <a href="https://foscos.fssai.gov.in/">
      <FontAwesomeIcon icon={faBuilding} className="mr-2" />
      FSSI REGISTRATION
    </a>
  </li>
         <li className="px-4 py-2 hover:bg-gray-200">
    <a href="https://foscos.fssai.gov.in/">
      <FontAwesomeIcon icon={faBuilding} className="mr-2" />
      LABOUR REGISTRATION
    </a>
  </li>
                  </ul>
                )}
                {/* //fastrack */}
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <button
                  className="w-full text-left"
                  onClick={() => setServicedownOpen(!servicedownOpen)}
                >
                  <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                  FASTRACK
                </button>
                {servicedownOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                   <li className="px-4 py-2 hover:bg-gray-200">
              <a href="http://176.97.66.217/akshaya/Adminlogin.aspx">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                AKSHAYA BILLING
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://uidai.gov.in/en/">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                AADHAAR
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://connect.csc.gov.in/account/authorize?response_type=code&client_id=0f8ca686-5a31-46b8-bb51-d9834ba9fa9d&redirect_uri=https%3A%2F%2Fdigitalseva.csc.gov.in%2Fauth%2Fcallback%2F&state=77254">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                CSC DIGITAL SEVA
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://edistrict.kerala.gov.in/edportalsignin.jsp?lang=en">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                E-DISTRICT
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://voters.eci.gov.in/">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                VOTTER ID
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                RATION CARD
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://ksmart.lsgkerala.gov.in/ui/home/citizen/login">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                K-SMART
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://citizen.lsgkerala.gov.in/">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                ILGMS
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://revenue.kerala.gov.in/">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
               LAND TAX
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="https://tax.lsgkerala.gov.in/epayment/QuickPaySearch.php">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                BUILDING TAX
              </a>
            </li>
                    </ul>
                )}
                    </li>
                     {/* //Education */}
                    <li className="px-4 py-2 hover:bg-gray-100">
                <button
                  className="w-full text-left"
                  onClick={() => setEducationdownOpen(!educationdownOpen)}
                >
                  <FontAwesomeIcon icon={faBook} className="mr-2" />
                  EDUCATION
                </button>
                {educationdownOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <a href="#web-development">ADMISSION </a>
                    </li>
                    </ul>
                )}
                  {/* //services */}
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                <button
                  className="w-full text-left"
                  onClick={() => setGallerydownOpen(!gallerydownOpen)}
                >
                  <FontAwesomeIcon icon={faImage} className="mr-2" />
                  SERVICES
                </button>
                {gallerydownOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <a href="#web-development">FASTRACK </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <a href="#web-development">AKSHAYA BILLING</a>
                    </li>
                    </ul>
                )}
                    </li>
      
            
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default AdminNavbar;
