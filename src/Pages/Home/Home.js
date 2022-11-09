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
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-2/4 w-3/4 mx-auto">
        <Carousel>
          <img
            src="https://image.shutterstock.com/image-photo/man-running-on-road-toward-260nw-749383591.jpg"
            alt="..."
          />
          <img
            src="https://blog.arenaswim.com/wp-content/uploads/2015/03/swimmer-training.jpg"
            alt="..."
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlfcHQCOjTrXxWr2aHm_8utiYIOGSCCEJyg&usqp=CAU"
            alt="..."
          />
          <img
            src="https://img.freepik.com/free-photo/concept-power-strength-healthy-lifestyle-sport-powerful-attractive-muscular-man-gym_155003-4993.jpg?size=626&ext=jpg&ga=GA1.2.424094994.1665416332&semt=sph"
            alt="..."
          />
          <img
            src="https://www.outsideonline.com/wp-content/uploads/2019/02/22/man-doing-bench-pushups_s.jpg"
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
