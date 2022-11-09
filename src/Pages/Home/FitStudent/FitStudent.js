import { Card } from 'flowbite-react';
import React from 'react';
import student1 from '../../../images/images.jpg'
import student2 from '../../../images/sudent.jpg'
import student3 from '../../../images/swimingChamp.jpg'

const FitStudent = () => {
    return (
        <div>
            <div className="">
            <Card>
        

        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={student1}
                    alt="Revivewer img"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                    Akash Ahmed
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    Akashahmed@gmail.com
                  </p>
                </div>

                    <div>
                        <p className='text-lg'>MR. Bangladesh</p>
                    </div>

               
                
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={student2}
                    alt="Revivewer img"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                    Akash Ahmed
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    arifhosen@gmail.com
                  </p>
                </div>

                    <div>
                        <p className='text-lg'>Swimming Champ</p>
                    </div>

               
                
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={student3}
                    alt="Revivewer img"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                    Jubair Islam
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    Jubairislam@gmail.com
                  </p>
                </div>

                    <div>
                        <p className='text-lg'>Running Champ</p>
                    </div>

               
                
              </div>
            </li>
          </ul>
        </div>
      </Card>
</div>
        </div>
    );
};

export default FitStudent;