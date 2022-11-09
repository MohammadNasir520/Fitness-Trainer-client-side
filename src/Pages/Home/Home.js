import { Button, Carousel } from "flowbite-react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTittle from "../../Hooks/Hooks";
import ServicesCard from "../../Shared/servicesCard/ServicesCard";
import AboutTrainer from "./AboutTrainer/AboutTrainer";
import FitStudent from "./FitStudent/FitStudent";

const Home = () => {
  const services = useLoaderData();
  console.log(services);

  useTittle("Home");
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto ">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
      <div>
        <Link to={"/allServices"}>
          {" "}
          <Button className="mx-auto my-5" color="success" pill={true}>
            See All Services
          </Button>
        </Link>




      </div>

            {/* about trainer section */}

   <div>
   <AboutTrainer></AboutTrainer>
   </div>

   {/* fit student section */}
   <div>
          <h1 className="text-center text-lg font-bold">some of Our Successful student and their acquirement</h1>


    <FitStudent></FitStudent>
   </div>



    </div>



  );
};

export default Home;
