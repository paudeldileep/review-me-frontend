import React, { useState } from "react";
//import BasicLoader from "../../components/LoadingScreen/BasicLoader";

//import { useAPI } from "../../utils/fetchHelper";

const EditProduct = ({ match, history }) => {
 // const { productId } = match.params;
  // const [response, setResponse] = useAPI(`/product/details/${productId}`);

  //   useEffect(() => {
  //    setResponse();
  //  }, [productId]);

  //const post = response.data;
  const inputStyle =
    "focus:outline-none border-2 border-blue-500 mb-3 rounded-md p-1";

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [error, setError] = useState(null);

//   if(post){
//       setTitle(post.title)
//       setDesc(post.description)
//   }


  // const [updateResponse, setUpdateResponse] = useState({
  //   isLoading: false,
  //   status: null,
  //   error: null,
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    //todo: file validation

    if (!title || !desc ) {
      console.log("errror");
      setError("*Must include a title and description");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    //todo
    // axios
    //   .post("/product/update", formData)
    //   .then((res) => setUpdateResponse({...response,isLoading:false,status:'Updated'}))
    //   .catch((err) => {
    //     console.log(err);
    //     setUpdateResponse({
    //       ...response,
    //       isLoading: false,
    //       error: err.response?.data?.error,
    //     });
    //   });
    setError(null);
  };

  return (
    <div className="mx-4 px-4 py-2 my-4 rounded-md bg-gradient-to-r from-purple-400 to-purple-100 relative">
      {/* {response.isLoading && <BasicLoader>Posting....</BasicLoader>} */}
      <h3 className="font-mono text-lg font-semibold text-gray-800">
        Edit Product (Currently not working!)
      </h3>
      <div className="max-w-md w-96">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="font-mono text-gray-600" htmlFor="title">
            Title
          </label>
          <input
            className={inputStyle}
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="font-mono text-gray-600" htmlFor="desc">
            Desciption
          </label>
          <textarea
            className={inputStyle}
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          {error && <p className="font-mono text-red-600 my-1">{error}</p>}
          <button className="border border-gray-500 bg-purple-400 focus:bg-purple-500 text-gray-100 font-mono text-lg rounded-md h-9">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
