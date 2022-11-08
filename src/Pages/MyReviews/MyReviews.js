import { Card } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {

    const {user}=useContext(AuthContext)


      // usestate for seting my review.
  const [reviews, setReviews] = useState([]);
console.log(reviews)

  //query my  review
  useEffect(()=>{
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
     .then(res=>res.json())
    .then(data=>setReviews(data))

},[user?.email],reviews)

const handleDelete=id=>{
    const procede= window.confirm('are you sure, you want to cancle this order')
    if(procede){
      fetch(`http://localhost:5000/reviews/${id}`,{
          method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          if(data.deletedCount>0){
              alert("orders deleted succesFully");
              const remaining= reviews.filter(review=>review._id !==id);
              setReviews(remaining)
          }
      })
    }
  
    }

    return (
        <div>
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