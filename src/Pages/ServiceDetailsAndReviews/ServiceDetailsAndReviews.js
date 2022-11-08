import { data } from "autoprefixer";
import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useTittle from "../../Hooks/Hooks";

const ServiceDetailsAndReviews = () => {
  useTittle("Service Review");

  const { user } = useContext(AuthContext);
  console.log(user?.displayName);

  const service = useLoaderData();
  const { image, name, Reviews } = service;

  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  const handleReviews = (event) => {
    event.preventDefault();
    const review = event.target.Reviews.value;

    const name = user?.displayName;
    const email = user?.email;
    const image = user?.photoURL;
    const reviews = {
      name,
      email,
      image,
      review,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("services placed");
          event.target.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="w-1/2  mx-auto">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={image}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {Reviews}
          </p>

          {/* <Link>
          {" "}
          <div>
            <Button gradientMonochrome="cyan">Cyan</Button>
          </div>
        </Link> */}
        </Card>
      </div>

      {/* add reviews section */}

      <div>
        <form
          onSubmit={handleReviews}
          className="flex flex-col gap-4 w-1/2 mx-auto"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Reviews" value="Services Reviews" />
            </div>
            <TextInput
              id="Reviews"
              name="Reviews"
              type="text"
              placeholder="tell about services"
              required={true}
            />
          </div>

          {/* <div>
            <div className="mb-2 block">
              <Label htmlFor="Email" value="Your Email" />
            </div>
            <TextInput
              id="Email"
              name="email"
              type="email"
              defaultValue={user.email}
              readOnly
              placeholder="Your Email"
              required={true}
            />
          </div> */}

          <Button type="submit">Add Reviews</Button>
        </form>
      </div>

      {/* show review */}
      <div>

        
        <div className="">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-xl text-center font-bold leading-none text-gray-900 dark:text-white">
              Customers Reviews
            </h5>
          </div>



          <Card>
            <div>
              <p>
                there will be
                reviw'asokjfd'p;awkf'wkefpkdsfkdkfsddkfpakf[pdkf[sdklfsdfksadkfs;ladf;'sakdfss'sdfksdkfsk
              </p>
            </div>

            <div className="flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="pt-3 pb-0 sm:pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="Thomas image"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Thomes Lean
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $2367
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsAndReviews;
