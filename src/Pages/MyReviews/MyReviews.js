import { Card, Toast } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewCard from './MyReviewCard';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {

    const {user}=useContext(AuthContext)


      // usestate for seting my review.
  const [reviews, setReviews] = useState([]);
console.log(reviews)

  //query my  review
  useEffect(()=>{
    fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
      headers:{
        
                authorization: `Bearer ${localStorage.getItem('fitness token')}`
              }

    })
     .then(res=>res.json())
    .then(data=>setReviews(data))

},[user?.email],reviews)


//deelte review system

const handleDelete=id=>{
    const agree= window.confirm('are you sure, you want to delete the review?')
    if(agree){
      fetch(`http://localhost:5000/reviews/${id}`,{
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