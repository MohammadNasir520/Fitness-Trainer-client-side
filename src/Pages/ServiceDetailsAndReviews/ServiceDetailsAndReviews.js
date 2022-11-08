import { data } from "autoprefixer";
import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useTittle from "../../Hooks/Hooks";
import ReviewCard from "./ReviewCard";

const ServiceDetailsAndReviews = () => {
  useTittle("Service Review");

  const { user } = useContext(AuthContext);
  


  
  //destructurin servise details
  const service = useLoaderData();
  console.log(service)
  const { image, name, description,_id } = service;


  // usestate for getting Customer review.
  const [reviews, setReviews] = useState([]);


  //get customers review
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
      .then((res) => res.json())
      .then((data) => {

        setReviews(data);
      });
  }, []);



  //handle input reviwe and set to mongodb
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
      serviceId: _id,
    };


    //insert revie to mongo db

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

      {/* ----------------------service details------------------------- */}
      <div className="w-1/2  mx-auto">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={image}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

        </Card>
      </div>

      {/*---------------------- add reviews section----------------------- */}

    {
      user?.uid?
      <div className="my-10 p-4 bg-red-100">
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

   

        <Button type="submit">Add Reviews</Button>
      </form>
    </div>

      :

     <div className="text-center p-10 bg-red-100">
       <h1>Please Login to Add Review</h1>
     </div>

    }

      {/* -----------show review  ---------------------------------------*/}
      <div>


        <div className="">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-xl text-center font-bold leading-none text-gray-900 dark:text-white">
              Customers Reviews
            </h5>
          </div>
            <div>
              {
                reviews.map(review=><ReviewCard
                key={review._id}
                crReview={review}
                ></ReviewCard>)
              }
            </div>

        
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsAndReviews;
