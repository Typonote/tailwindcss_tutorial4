import React from 'react'

import profile from '../assets/kim_j_k.jpg'
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const Card = () => {
    return (
        <div className="w-full md:w-2/5">
          <div className="flex flex-col justify-center max-w-xs mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 mb-6">
            <div className="">
              <img
                className="w-32 mx-auto shadow-xl rounded-full"
                src={profile}
                alt="Profile face"
              />
            </div>
            <div className="text-center mt-5">
              <p className="text-xl sm:text-2xl font-semibold text-primary">
                김진경
              </p>
              <p className="text-xs sm:text-base text-primary pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                저는 프론트엔드 개발자를 꿈꿉니다.
              </p>
              <div className="flex align-center justify-center mt-4">
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 dark:text-primary hover:bg-gray-800 dark:hover:bg-yellow-500 rounded-full hover:text-white transition-colors duration-300"
                  href='https://github.com/Typonote?tab=repositories'
                >
                  <FaGithub />
                  <span class="sr-only">Github</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
                  href='https://kdt-gitlab.elice.io/'
                >
                  <FaGitlab />
                  <span class="sr-only">Gitlab</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                  href='https://frontend-challenge.tistory.com/'
                >
                  <FaBloggerB />
                  <span class="sr-only">Blog</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 dark:text-primary hover:bg-green-500 rounded-full hover:text-white transition-colors duration-300"
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
