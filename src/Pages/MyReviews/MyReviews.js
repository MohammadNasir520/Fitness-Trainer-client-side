import { Card, Toast } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewCard from './MyReviewCard';
import 'react-toastify/dist/ReactToastify.css';
import useTittle from '../../Hooks/Hooks';

const MyReviews = () => {
useTittle('MyReview')
    const {user, LogOut}=useContext(AuthContext)


      // usestate for seting my review.
  const [reviews, setReviews] = useState([]);
console.log(reviews)

  //query my  review
  useEffect(()=>{
    fetch(`https://assignmint-11-server.vercel.app/reviews?email=${user?.email}`,{
     headers: {
      authorization:`Bearrer ${localStorage.getItem('fitness-trainerToken')}`
     }

    })
     .then(res=>{

      if(res.status===401 || res.status===403){
        LogOut()
      }
      return res.json();
     })
    .then(data=>setReviews(data))



},[user?.email],reviews)




//deelte review system

const handleDelete=id=>{
    const agree= window.confirm('are you sure, you want to delete the review?')
    if(agree){
      fetch(`https://assignmint-11-server.vercel.app/reviews/${id}`,{
          method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          if(data.deletedCount>0){
            toast("review deleted")
              const remaining= reviews.filter(review=>review._id !==id);
              setReviews(remaining)
          }
      })
    }
  
    }


    

    return (
        <div>
            {
              reviews==0 &&
               <div className='w-full h-20 bg-slate-100'>


                <h1 className='text-lg text-center text-semibold'>No reviwe were Added</h1>


              </div>
            }

            {
              


            reviews.map(review=><MyReviewCard
            myreview={review}
            key={review._id}
            handleDelete={handleDelete}
            ></MyReviewCard>)
            }
      
      </div>
    );
};

export default MyReviews;