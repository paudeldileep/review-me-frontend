import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postReview } from "../../../redux/productSlice";
import { useAPI } from "../../../utils/fetchHelper";
import Alert from "../../utils/Alert";
import ReviewList from "./ReviewList";

const Review = ({ productId }) => {
  let content;
  const dispatch = useDispatch();
  const [newReview, setNewReview] = useState("");
  const [response, setResponse] = useAPI(`/product/${productId}/reviews`);

  const postResponse = useSelector((state) => state.product.response);

  useEffect(() => {
    setResponse(`/product/${productId}/reviews`);
  }, []);

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview) {
      
      dispatch(postReview(productId, { review: newReview }));

      setTimeout(function () {
        setResponse(`/product/${productId}/reviews`);
      }, 2000);
      setNewReview("")
    }
  };

  if (response.error) {
    content = response.error.data.errors;
  } else if (response.data) {
    content = <ReviewList response={response.data} />;
  }

  return (
    <div className="w-full">
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <textarea
            name="review"
            value={newReview}
            onChange={handleReviewChange}
            placeholder="Post a new Review"
            className="w-full px-2 py-1 rounded-md shadow-sm"
          ></textarea>
          <button type="submit" className="px-2 py-1 w-full bg-purple-300 hover:bg-purple-400 my-2 shadow-sm rounded-md">Submit Review</button>
          {postResponse && <Alert type="success" delay="3000">{postResponse}</Alert>}
        </form>
      </div>
      <div className="mx-2 text-gray-600">
        {response.isLoading && <p>Loading Reviews...</p>}
        {content}
      </div>
    </div>
  );
};

export default Review;
