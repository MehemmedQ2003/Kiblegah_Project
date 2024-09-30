import Link from "next/link";
import LogoImage from "@/public/images/kıblegah-icon.jpg"
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube, FaTelegram, FaAppStoreIos, FaGithub  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiVendorAndroid } from "react-icons/ti";



export default function Footer() {
  const currentYear = new Date().getFullYear(); 
  return (
    <footer data-aos="zoom-y-out" data-aos-delay={150}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* First Column - Logo */}
          <div className="flex justify-center">
            <Image src={LogoImage} alt="Hero Image" width={150} height={150} />
          </div>

          {/* Second Column - Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-4">Social</h3>
            <ul className="flex justify-center gap-1 my-3">
              <li>
                <Link
                  className="border rounded-lg text-2xl flex p-2 items-center justify-center bg-black transition hover:scale-110 duration-200"
                  href="#0"
                  style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", color: "white"}}
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  className="border rounded-lg text-2xl flex p-2 items-center justify-center bg-black transition hover:scale-110 duration-200"
                  href="#0"
                  style={{ background: "linear-gradient(45deg, #4267B2, #4c69ba)", color: "white"}}
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  className="border rounded-lg text-2xl flex p-2 items-center justify-center bg-black transition hover:scale-110 duration-200"
                  href="#0"
                  style={{ background: "linear-gradient(45deg, #FF0000, #FF4F00)", color: "white"}}
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
            <ul className="flex justify-center gap-1 my-3">
              <li>
                <Link
                  className="border rounded-lg text-2xl flex p-2 items-center justify-center bg-black transition hover:scale-110 duration-200"
                  href="#0"
                  style={{ background: "black", color: "white"}}
                  aria-label="XTwitter"
                >
                  <FaSquareXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  className="border rounded-lg text-2xl flex p-2 items-center justify-center bg-black transition hover:scale-110 duration-200"
                  href="#0"
                  style={{ background: "linear-gradient(45deg, #0088cc, #00aaff)", color: "white"}}
                  aria-label="Telegram"
                >
                  <FaTelegram />
                </Link>
              </li>
              <li>
                <Link
                  className="border rounded-lg text-2xl flex p-2 items-center justify-center bg-black transition hover:scale-110 duration-200"
                  href="#0"
                  style={{ background: "#000000", color: "white "}}
                  aria-label="Telegram"
                >
                  <FaGithub />
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column - App Links */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-4">App</h3>
            <ul className="flex gap-10 justify-center">
              <li>
                <Link
                  className="border rounded-lg text-6xl flex p-3 items-center justify-center transition hover:scale-110 duration-200"
                  href="#"
                  style={{ color: "#007AFF" }}
                  aria-label="AppStore"
                >
                  <FaAppStoreIos />
                </Link>
              </li>
              <li>
                <Link
                  className="border rounded-lg text-6xl flex p-3 items-center justify-center transition hover:scale-110 duration-200"
                  href="#"
                  style={{ color: "#34A853" }}
                  aria-label="Android"
                >
                  <TiVendorAndroid />
                </Link>
              </li>
            </ul>
          </div>

          {/* Fourth Column - Resources */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-4">Resources</h3>
            <ul className="text-center">
              <li>
                <Link
                  className="text-gray-900 text-xl  transition hover:text-gray-900"
                  href="mailto:info@tevhiddergisi.com"
                >
                  info@tevhiddergisi.com
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-900 text-xl  transition hover:text-gray-900"
                  href="mailto:info@tevhiddergisi.com"
                >
                  info@tevhiddergisi.com
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-900 text-xl  transition hover:text-gray-900"
                  href="mailto:info@tevhiddergisi.com"
                >
                  info@tevhiddergisi.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-2xl text-gray-900 font-bold text-center mt-20 mb-4">
          &copy; {currentYear} Kıblegah - All rights reserved.
        </div>
      </div>
    </footer>

  );
}
