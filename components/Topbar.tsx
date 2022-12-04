import Image from "next/image"
import {AiOutlineMail}  from 'react-icons/ai';
import{MdLocationOn} from 'react-icons/md';
import {FaFacebookF,FaTwitter,FaInstagram,FaGithub} from 'react-icons/fa';
import Link from "next/link";

const Topbar = () => {
  return (
    <>
    <div className="grid items-center grid-cols-12 bg-slate-800 px-12">
        <div className="mx-6 topbar-left-col col-span-6 text-white">
            <div className="flex items-center gap-2">
                <div className="item-1 flex gap-1 items-center">
                <AiOutlineMail className="text-red-500" size={20} strokeWidth={40} /> <span className="text-sm">info@webmail.com</span>
                </div>
                <div className="item-2 flex gap-1 items-center">
                <MdLocationOn className="text-red-500" size={20} /> <span className="text-sm">Lahore,Pakistan</span>
                </div>
            </div>
        </div>
        <div className="mx-6 topbar-left-col col-span-6 text-end text-white">
            <span className="flex justify-end items-center gap-3">
                <a href="//facebook.com">
                <FaFacebookF />
                </a>
                <a href="//twitter.com">
                <FaTwitter />
                </a>
                <a href="//instagram.com/codewith_uzair">
                <FaInstagram />
                </a>
                <a href="//github.com/heyitsuzair">
                <FaGithub />
                </a>
                <Link href="/" className="bg-red-500 py-3 px-8 font-semibold text-sm">
                Add Listing
                </Link>
            </span>
        </div>
    </div>
    </>
  )
}

export default Topbar