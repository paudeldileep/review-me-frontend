import axios from "../utils/axios";

const initialState = {
  featuredProducts: null,
  singleProduct:null,
  status: "idle",
  errors: null,
  response: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "product/loading":
      return {
        ...state,
        status: "loading",
      };
    case "product/productFetched":
      return {
        ...state,
        status: "idle",
        featuredProducts: action.payload,
        errors: null,
        response:null
      };
      case "product/fetchedOne":
      return {
        ...state,
        status: "idle",
        singleProduct: action.payload,
        errors: null,
        response:null
      };
    case "product/loaded":
      return {
        ...state,
        status: "idle",
        response: action.payload,
        errors: null,
      };
    case "product/error":
      return {
        ...state,
        status: "idle",
        errors: action.payload,
      };
    case "product/deleted":
    case "product/reviewed":
    case "product/liked":
    case "product/loved":
      return {
        ...state,
        status: "idle",
        response: action.payload,
        errors: null,
      };
    case "product/clearResponse":
      return {
        ...state,
        response: null,
      };
    default:
      return state;
  }
}

//action creators
export const fetchFeaturedProducts = () => ({ type: "product/productFetched" });
export const processingRequest = () => ({ type: "product/loading" });
export const productsFetched = (products) => ({
  type: "product/productFetched",
  payload: products,
});
export const gotResponse = (response) => ({
  type: "product/loaded",
  payload: response,
});
export const gotError = (error) => ({ type: "product/error", payload: error });
export const clearResponse = () => ({ type: "product/clearResponse" });

export const productDeleted = (response) => ({
  type: "product/deleted",
  payload: response,
});
export const reviewPosted = (response) => ({
  type: "product/reviewed",
  payload: response,
});
export const likePosted = (response) => ({
  type: "product/liked",
  payload: response,
});
export const heartPosted = (response) => ({
  type: "product/loved",
  payload: response,
});

export const productFetched=(product)=>({
  type: "product/fetchedOne",
  payload: product,
})
//thunk functions

//#1.delete a product
export const deleteProduct = (productId) => async (dispatch) => {
  axios
    .delete(`/product/${productId}`)
    .then((res) => {
      console.log("product delete success" + res);
      dispatch(productDeleted(res.data));
    })
    .catch((err) => {
      if (err.response) {
        dispatch(gotError(err.response.data.errors));
      }
      console.log("product delete error" + err.response.data);
    });
};

//#2.add new product

//#3.post comment
export const postReview = (productId,review) => async (dispatch) => {
  console.log(review)
  axios
    .post(`/product/${productId}/review`,review)
    .then((res) => {
      console.log("product review success" + res);
      dispatch(reviewPosted(res.data));
    })
    .catch((err) => {
      if (err.response) {
        dispatch(gotError(err.response.data.errors));
      }
      console.log("product review error" + err.response.data);
    });
};

//#4.post like
export const postLike = (productId) => async (dispatch) => {
  axios
    .post(`/product/${productId}/like`)
    .then((res) => {
      console.log("product like success" + res);
      dispatch(likePosted(res.data));
    })
    .catch((err) => {
      if (err.response) {
        dispatch(gotError(err.response.data.errors));
      }
      console.log("product like error" + err.response.data);
    });
};

//#5.post heart
export const postHeart = (productId) => async (dispatch) => {
  axios
    .post(`/product/${productId}/heart`)
    .then((res) => {
      console.log("product heart success" + res);
      dispatch(heartPosted(res.data));
    })
    .catch((err) => {
      if (err.response) {
        dispatch(gotError(err.response.data.errors));
      }
      console.log("product heart error" + err.response.data);
    });
};

//#6. fetch one product with details

export const fetchSingleProduct=(productId)=>async(dispatch)=>{

  axios.get(`/product/${productId}`).then(res=>{
    console.log('single one fetched')
    dispatch(productFetched(res.data))
  }).catch(err=>{
    if (err.response) {
      dispatch(gotError(err.response.data.errors));
    }
    console.log("fetch one product error" + err.response.data);
  })
}

//custom selectors
export const selectFeatured = (state) => state.product.featuredProducts;
