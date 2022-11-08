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

},[user?.email])

    return (
        <div>
            {
            reviews.map(review=><MyReviewCard
            myreview={review}
            key={review._id}
            
            ></MyReviewCard>)
            }
      
      </div>
    );
};

export default MyReviews;