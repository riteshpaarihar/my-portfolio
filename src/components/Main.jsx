import myAvatar from "../../public/my-avatar.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { BiCalendar } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
// import { SiFacebook } from "react-icons/si";
// import { FaInstagram } from "react-icons/fa";
// import { CiTwitter } from "react-icons/ci";
import Details from "./Details";
// import About from "./About";
// import Resume from "./Resume";
// import Portfolio from "./Portfolio";
// import Contact from "./Contact";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Repo from "./repo";

export default function Main() {
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
      link: "123 Main Street, City, State",
    },
  };

  const social = {
    Linkedin: <CiLinkedin />,
    Leetcode: <SiLeetcode />,
    twitter: <FaGithub />,
  };

  return (
    <Router>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">


          <div className="md:col-span-3 bg-neutral-900 md:h-screen">
          <Sidebar></Sidebar>
          {/*<div className="container flex flex-col items-center">
              <div className="profile bg-zinc-600 h-32 w-32 rounded-lg flex justify-center items-center">
                <img src={myAvatar} alt="" className="object-cover rounded-lg" />
              </div>
              <div className="occupation text-white text-2xl font-semibold">
                <h1 className="text-white">Ritesh Singh</h1>
                <p className="text-white font-extralight text-sm max-w-fit bg-zinc-500 rounded-lg px-2 py-1">
                  Software Engineer
                </p>
              </div>
              <hr className="w-4/5 my-5" />
              <div className="details">
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
              <div className="social flex">
                {Object.entries(social).map(([key, value]) => (
                  <a href="#" key={key} className="social-icon text-white mx-4">
                    {value}
                  </a>
                ))}
              </div>
            </div> */ }  
          </div>
          <div className="md:col-span-9 bg-neutral-900 h-screen overflow-y-auto">
           <Navbar></Navbar>
          </div>
        </div>
      </div>
    </Router>
  );
}
