import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { name, _id, price, description, image } = service;
  return (
    <div className="max-w-sm">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={image}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
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
