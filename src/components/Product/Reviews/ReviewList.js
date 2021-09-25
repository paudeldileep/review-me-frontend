import React from 'react';

const ReviewList=({response})=>{

   const renderedReviews=response.reviews.map(review=><div key={review._id}>{review.review}</div>)
    return <div>
        {response.reviews.length>0 ? renderedReviews : <p>No Reviews Yet..</p> }
    </div>
}

export default ReviewList