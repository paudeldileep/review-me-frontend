import React from "react";

const ReviewList = ({ response }) => {


  const renderedReviews = response.reviews.map((review) => (
    <div key={review._id} className="w-full h-12 my-2 bg-gray-200 text-gray-100 px-1 shadow-sm rounded-md flex flex-col justify-between transform transition-transform duration-300 border-l-8 border-gray-400 hover:border-purple-600 hover:scale-105">
      <p className="text-gray-600">{review.review}</p>
      <p className="text-right text-sm text-gray-400">-{review.reviewedBy.firstname}</p>
    </div>
  ));
  return (
    <div>
      {response.reviews.length > 0 ? renderedReviews : <p className="text-lg text-gray-600">No Reviews Yet..</p>}
    </div>
  );
};

export default ReviewList;
