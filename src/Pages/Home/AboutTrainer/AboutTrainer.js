import { Card, Dropdown } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import trainerImg from "../../../images/20220503_202745 (2).jpg";

const AboutTrainer = () => {
  return (
    <div className="my-10">

        
      <div className="">
      <h1 className="text-center text-xl font-bold">About Trainer</h1>
        <Card>
          <div className="flex justify-end px-4 pt-4">
            <Dropdown inline={true} label="">
              <Dropdown.Item>
                <Link
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Export Data
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  href="#"
                  className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Delete
                </Link>
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 h-24 w-24 rounded-full shadow-lg"
              src={trainerImg}
              alt="trainer"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Mohammad Nasir
            </h5>
            <span className="text-sm text-center text-gray-500 dark:text-gray-400">
             Instructor of Fitness Trainer 
             <br />
             Mohammad Nasir is a fitness trainer who is very experinece in this sector .
             <br />
              His Student is Successful in Nationally and Internationally.
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <Link
                href="#"
                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
              Contact
              </Link>
              <Link
                href="#"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutTrainer;
