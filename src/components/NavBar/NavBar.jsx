// import './NavBar.css';
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = (item) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setHoveredItem(null);
        }, 200); // Delay before hiding the submenu
        setTimeoutId(id);
    };

    const menuItems = [
        { text: "Home", href: "#" },
        { text: "About Us", href: "#" },
        { text: "Services", href: "#", subItems: ["Services", "Services Grid", "Services Carousel", "Room Wallpapers", "Wall Painting", "Wall Sheets", "Outdoor Design", "PVC Panels", "Interior Designing"] },
        { text: "Project", href: "#", subItems: ["Project", "Project Carousel", "Project Details"] },
        { text: "Pages", href: "#" },
        { text: "Shop", href: "#" },
        { text: "News", href: "#" },
        { text: "Contact", href: "#" },
    ];

    return (
        <nav className=" py-4 relative bg-[#2E2A20]">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex items-center gap-12">
                    {/* LOGO */}
                    {/* <img src="/path-to-your-logo.png" alt="Wallox" className="h-10" /> */}


                    <div className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(item.text)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href={item.href} className="text-white hover:text-amber-500">
                                    {item.text}
                                </a>
                                {item.subItems && hoveredItem === item.text && (
                                    <div
                                        className="absolute left-0 mt-2 w-48 bg-[#2E2A20] shadow-lg z-10 p-3"
                                        onMouseEnter={() => handleMouseEnter(item.text)} 
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {item.subItems.map((subItem, subIndex) => (
                                            <a
                                                key={subIndex}
                                                href="#"
                                                className="block px-4 py-2 text-sm text-white hover:bg-[#F4EDE4] hover:text-[#2E2A20]"
                                            >
                                                {subItem}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>





















                    {/* <div className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(item.text)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href={item.href} className="text-white hover:text-amber-500">
                                    {item.text}
                                </a>
                                {item.subItems && hoveredItem === item.text && (
                                    <div className="absolute left-0 mt-2 w-48 bg-[#2E2A20] shadow-lg z-10 p-3">
                                        {item.subItems.map((subItem, subIndex) => (
                                            <a
                                                key={subIndex}
                                                href="#"
                                                className="block px-4 py-2 text-sm text-white hover:bg-[#F4EDE4] hover:text-[#2E2A20]"
                                            >
                                                {subItem}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div> */}
                </div>
                <div className="flex items-center gap-6">
                    <FaSearch className="text-white w-5 h-5 cursor-pointer hover:text-amber-500 hidden sm:block" />
                    <FaShoppingCart className="text-white w-5 h-5 cursor-pointer hover:text-amber-500 hidden sm:block" />
                    <div className="relative flex items-center">
                        <div className="appointment-wrapper w-full flex">
                            <Link
                                to="#"
                                className="hidden md:block md:bg-black text-white px-4 py-2 rounded-full hover:bg-amber-500 transition-all duration-300 ease-in-out flex items-center gap-2 group z-10 relative"
                            >
                                <span className="hidden md:inline group-hover:no-underline transition-transform duration-300 ease-in-out transform group-hover:scale-110">Book Appointment</span>
                            </Link>
                            <button
                                className="ml-2 p-2 lg:hidden z-10 relative"
                                onClick={toggleMenu}
                            >
                                <HiMenu className="w-7 h-7 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
                    <div className="fixed left-0 top-0 w-64 h-full bg-zinc-800 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto">
                        <div className="flex justify-between items-center p-4 border-b border-zinc-700">
                            {/* LOGO */}
                            {/* <img src="/path-to-your-logo.png" alt="Wallox" className="h-8" /> */}
                            <HiX className="text-white w-6 h-6 cursor-pointer" onClick={toggleMenu} />
                        </div>
                        <div className="flex flex-col">
                            {menuItems.map((item, index) => (
                                <div key={index} className="relative">
                                    <MenuLink href={item.href} text={item.text} />
                                    {item.subItems && (
                                        <div className="flex flex-col">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <a key={subIndex} href="#" className="text-white hover:text-amber-500 py-2 px-8 block">
                                                    {subItem}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 px-4">
                            <ContactInfo icon={<MdEmail />} text="needhelp@wallox.com" />
                            <ContactInfo icon={<MdPhone />} text="666 888 0000" />
                            <div className="flex gap-4 mt-4">
                                <SocialIcon icon={<FaFacebookF />} />
                                <SocialIcon icon={<FaTwitter />} />
                                <SocialIcon icon={<FaInstagram />} />
                                <SocialIcon icon={<FaYoutube />} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
}

const MenuLink = ({ href, text }) => (
    <a href={href} className="text-white hover:text-amber-500 py-3 px-4 border-b border-zinc-700 flex justify-between items-center">
        {text}
        <IoIosArrowForward className="text-amber-500" />
    </a>
);

const ContactInfo = ({ icon, text }) => (
    <div className="flex items-center gap-2 text-white mb-2">
        {icon}
        <span>{text}</span>
    </div>
);

const SocialIcon = ({ icon }) => (
    <a href="#" className="text-white hover:text-amber-500">
        {icon}
    </a>
);