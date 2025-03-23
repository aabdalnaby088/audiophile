import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className=" text-white ">
            <div className="flex flex-col max-container font-primary">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-10">
                    <h3 className="font-bold text-2xl border-t-4 border-primary pt-10 ">audiophile</h3>
                    <ul className="flex flex-col sm:flex-row justify-center items-center gap-7 pt-10 subtitle-custom ">
                        <li><Link className="hover:text-primary" to="/">Home</Link></li>
                        <li><Link className="hover:text-primary" to="/headphones">Headphones</Link></li>
                        <li><Link className="hover:text-primary" to="/speakers">Speakers</Link></li>
                        <li><Link className="hover:text-primary" to="/earphones">Earphones</Link></li>
                    </ul>
                </div>
                <div className="text-body pb-7">
                    <p className="md:w-2xl text-gray-400 max-sm:text-center">
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-5 justify-between items-center py-7">
                    <p className="text-bold text-gray-400">
                        Copyright 2021. All Rights Reserved
                    </p>
                    <ul className="text-2xl flex gap-6">
                        <li><FaFacebookSquare /></li>
                        <li><FaInstagram /></li>
                        <li><FaTwitter /></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
