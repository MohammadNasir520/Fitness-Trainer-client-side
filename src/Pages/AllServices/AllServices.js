import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTittle from '../../Hooks/Hooks';
import ServicesCard from '../../Shared/servicesCard/ServicesCard';

const AllServices = () => {
    useTittle('AllServices')

      

    const allServices=useLoaderData()

    const {loading}=useContext(AuthContext)
    if (loading) {
        return (
          <div className="text-center mt-6">
            <Spinner color="success" aria-label="Success spinner example" />
          </div>
        );
      }
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