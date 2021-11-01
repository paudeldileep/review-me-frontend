import React from "react";

const ReviewList = ({ response }) => {


  const renderedReviews = response.reviews.map((review) => (
    <div key={review._id} className="w-full h-12 my-2 bg-gray-400 text-gray-100 px-1 shadow-sm rounded-md flex flex-col justify-between transform transition-transform duration-300 border-l-8 border-gray-400 hover:border-purple-600 hover:scale-105">
      <p>{review.review}</p>
      <p className="text-right text-sm">-{review.reviewedBy.firstname}</p>
    </div>
  ));
  return (
    <div>
      {response.reviews.length > 0 ? renderedReviews : <p className="text-lg text-gray-200">No Reviews Yet..</p>}
    </div>
  );
};

export default ReviewList;
