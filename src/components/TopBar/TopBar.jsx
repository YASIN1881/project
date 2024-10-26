import './TopBar.css'
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { SlSocialFacebook,SlSocialInstagram } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineYoutube } from "react-icons/ai";

export default function TopBar() {
    return(
        <div className="bg-zinc-900 text-gray-300 py-2 px-4 hidden md:block">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
                <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-4 mb-4 md:mb-0">
                    <span className="flex items-center gap-1 lg:gap-2">
                        <IoLocationSharp size={20} color="#f59e0b"/>
                        4648 Rocky Road Philadelphia PA, 1920
                    </span>
                    <span className="flex items-center gap-1 lg:gap-2">
                        <MdEmail size={20} color="#f59e0b"/>
                        info@coloringco.com
                    </span>
                    <span className="flex items-center gap-1 lg:gap-2">
                        <BiSolidPhoneCall size={20} color="#f59e0b"/>
                        +88 0123 654 99
                    </span>
                </div>
                <div className="flex gap-2 lg:gap-4">
                    <a href="#" className="social-icon w-8 h-8 border rounded-full flex items-center justify-center">
                        <SlSocialFacebook/>
                    </a>
                    <a href="#" className="social-icon w-8 h-8 border rounded-full flex items-center justify-center">
                        <TfiTwitter/>
                    </a>
                    <a href="#" className="social-icon w-8 h-8 border rounded-full flex items-center justify-center">
                        <SlSocialInstagram/>
                    </a>
                    <a href="#" className="social-icon w-8 h-8 border rounded-full flex items-center justify-center">
                        <AiOutlineYoutube/>
                    </a>
                </div>
            </div>
        </div>
    )
}
