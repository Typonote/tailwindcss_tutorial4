import React from 'react'

import profile from '../assets/kim_j_k.jpg'
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const Card = () => {
    return (
        <div className="w-full md:w-2/5">
          <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-7 mb-6">
            <div className="">
              <img
                className="w-32 mx-auto shadow-xl rounded-full"
                src={profile}
                alt="Profile face"
              />
            </div>
            <div className="text-center mt-5">
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                김진경
              </p>
              <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                I wanna be Forntend Developer
              </p>
              <div className="flex align-center justify-center mt-4">
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                  href='https://github.com/Typonote?tab=repositories'
                >
                  <FaGithub />
                  <span class="sr-only">Github</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
                  href='https://github.com/Typonote?tab=repositories'
                >
                  <FaDribbble />
                  <span class="sr-only">Dribble</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                  href='https://github.com/Typonote?tab=repositories'
                >
                  <FaTwitter />
                  <span class="sr-only">Twitter</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-green-500 rounded-full hover:text-white transition-colors duration-300"
                  href={"https://mail.google.com/mail/?view=cm&fs=1&to=kimradium@gmail.com"}
                >
                  <FaRegEnvelope />
                  <span class="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Card
