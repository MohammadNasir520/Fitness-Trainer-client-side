import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import"./MyReviewCard.css"

const MyReviewCard = ({ myreview, handleDelete }) => {
  const { image, userName, email, review, _id, serviceName } = myreview;

  console.log(myreview);

  return (
    <div className="w-full">
      <Card className=" bg-teal-50 my-4">
        <div className="w-full text-center">
          <p>{review}</p>
        </div>

        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="pt-3 pb-0 sm:pt-4">


              <div className=" review-container  flex  items-center justify-between space-x-4  ">


                <div className=" flex ">
                  <div className="shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={image}
                      alt="Revivewer img"
                    />
                  </div>
                  <div className="min-w-0 flex-1 mx-3">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      {userName}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      {email}
                    </p>
                  </div>
                </div>




                <div className="flex ">
                  <div>
                    <p className="font-bold service-name">{serviceName}</p>
                  </div>

                  <div className="inline-flex mx-7 items-center text-base font-semibold text-gray-900 dark:text-white">
                    <Link to={`/editReview/${_id}`}>
                      {" "}
                      <div>
                        <Button gradientMonochrome="cyan">Edit</Button>
                      </div>
                    </Link>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <Link>
                      {" "}
                      <div>
                        <Button
                          onClick={() => handleDelete(_id)}
                          gradientMonochrome="cyan"
                        >
                          Delete
                        </Button>
                      </div>
                    </Link>
                  </div>
                </div>


              </div>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default MyReviewCard;
