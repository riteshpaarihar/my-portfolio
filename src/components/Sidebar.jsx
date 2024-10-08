import React, { useState } from 'react';
import myAvatar from "../../public/my-avatar.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { BiCalendar } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";  // For the toggle button
import Details from "./Details";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle details

  const contactInfo = {
    email: {
      icon: <MdOutlineMailOutline />,
      title: "Email",
      link: "ritesh.rs199@gmail.com",
    },
    phone: {
      icon: <IoMdPhonePortrait />,
      title: "Phone",
      link: "+91 78693 86543",
    },
    birthday: {
      icon: <BiCalendar />,
      title: "Birthday",
      link: "12/01/1999",
    },
    location: {
      icon: <SlLocationPin />,
      title: "Location",
      link: "A08 406 Palash Parisar II indore",
    },
  };

  return (
    <div className="col-span-3 bg-neutral-900 md:h-screen flex flex-col items-center md:justify-start">
      {/* Profile Section - Always visible */}
      <div className="profile bg-zinc-600 h-32 w-32 rounded-lg flex justify-center items-center my-4">
        <img src={myAvatar} alt="Ritesh Singh" className="object-cover rounded-lg" />
      </div>
      <div className="occupation text-white text-2xl font-semibold">
        <h1>Ritesh Singh</h1>
        <p className="text-white font-extralight text-sm max-w-fit bg-zinc-500 rounded-lg px-2 py-1">
          Software Developer
        </p>
      </div>
      <hr className="w-4/5 my-5 border-gray-600" />

      {/* Toggle Button for Details (visible on mobile only) */}
      <button
        className="md:hidden text-white bg-gray-700 p-2 rounded-lg mb-4 flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaAngleUp size={24} /> : <FaAngleDown size={24} />}
        <span className="ml-2">{isOpen ? "Hide Details" : "Show Details"}</span>
      </button>

      {/* Contact Details - Toggle visibility on mobile with dynamic height */}
      <div
        className={`details flex flex-col w-full space-y-2 px-4 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-full' : 'max-h-0'
        } md:max-h-none`}
      >
        {Object.entries(contactInfo).map(([key, value]) => (
          <Details
            key={key}
            type={key}
            icon={value.icon}
            title={value.title}
            link={value.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
