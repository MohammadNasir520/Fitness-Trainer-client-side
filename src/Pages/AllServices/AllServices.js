import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTittle from '../../Hooks/Hooks';
import ServicesCard from '../../Shared/servicesCard/ServicesCard';

const AllServices = () => {
    useTittle('AllServices')
    const allServices=useLoaderData()
    return (
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
               {
                    allServices.map(service=><ServicesCard
                    service={service}
                    key={service._id}
                    ></ServicesCard>)
               }
        </div>
    );
};

export default AllServices;