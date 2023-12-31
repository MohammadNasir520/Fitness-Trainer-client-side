import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesCard = ({ service }) => {
  const { name, _id, price, description, image } = service;
  return (
    <div className="max-w-sm mt-10 ">
      <Card >

        {/* react photo viewr added to servicess image */}

        <PhotoProvider>
          <div className="foo">
            <PhotoView src={image}>
              <img src={image} style={{ objectFit: 'cover', maxHeight: "200px" }} alt="service img" />
            </PhotoView>

          </div>
        </PhotoProvider>


        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
          Cervice Charge : {price} tk /month
        </h5>

        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description.slice(0, 100)}.....
        </p>

        <Link to={`/service/${_id}`}>
          {" "}
          <div>
            <Button gradientMonochrome="cyan">Service Details</Button>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default ServicesCard;
