import { IoLogoFacebook } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-default-600">
                            <img src="https://i.ibb.co/YdzGHwB/Logo.png" alt="" />
                        </div>
                        <span className="self-center text-2xl font-semibold">Earthy Paint</span>
                    </a>

                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-900">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Features</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Integrations</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Pricing</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-900">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Public API</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Documentation</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Guides</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-900">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <a target="_blank" href="https://www.facebook.com/mdalam.islam.351/" title="Facebook" className="flex items-center p-1">
                                <IoLogoFacebook className="text-xl"></IoLogoFacebook>
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                <MdEmail className="text-xl"></MdEmail>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="copied_username0" title="Instagram" className="flex items-center p-1">
                                <FaInstagramSquare className="text-xl"></FaInstagramSquare>
                            </a>

                        </div>
                        <div>
                            <h3 className="opacity-75 mt-5 space-y-2 mb-1">Contact Us: </h3>
                            <p className="flex gap-3"> <FaPhoneVolume className="text-lg"></FaPhoneVolume> 01920259209</p>
                            <p className="flex gap-3"><FaLocationDot className="text-xl"></FaLocationDot> Dhaka,Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-600">© 2024 Earthy Paint. All rights reserved.</div>
        </footer>
    );
};

export default Footer;