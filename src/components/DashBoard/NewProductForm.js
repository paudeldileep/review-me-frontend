import React, { useState } from "react";
import BasicLoader from "../LoadingScreen/BasicLoader";
import axios from "../../utils/axios";

const NewProductForm = (props) => {
  const inputStyle =
    "focus:outline-none border-2 border-blue-500 mb-3 rounded-md p-1 w-full";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [filename, setFileName] = useState(null);
  const [response, setResponse] = useState({
    isLoading: false,
    status: null,
    error: null,
  });
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);

    setFileName(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //todo: file validation

    if (!title || !desc || !file) {
      console.log("errror");
      setError("*Must include a title,description and image");
      return;
    }

    setResponse({
      ...response,
      isLoading: true,
    });

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("productImage", file);

    axios
      .post("/product/new", formData)
      .then((res) => {
        setResponse({
          ...response,
          isLoading: false,
          status:res.data
        });
        props.onPost();
        props.onPostComplete();
      })
      .catch((err) => {
        console.log(err);
        setResponse({
          ...response,
          isLoading: false,
          error: err.response?.data?.error,
        });
      });
    setError(null);
  };

  return (
    <div className="ml-0 pl-4 py-2 mb-2 h-1/2 w-full  relative">
      {response.isLoading && <BasicLoader>Posting....</BasicLoader>}
      <h3 className="font-mono text-lg font-semibold text-gray-800 text-center">
        Add new Product
      </h3>
      <div className="max-w-md w-full mx-auto">
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
          <label className="font-mono text-gray-600" htmlFor="productImage">
            Image
          </label>
          <input
            className="mb-3"
            type="file"
            name="productImage"
            id="productImage"
            onChange={handleFileChange}
          />
          {error && <p className="font-mono text-red-600 my-1">{error}</p>}
          <div className="flex items-center my-2">
          <button type="button" className="focus:bg-purple-500 text-red-400 font-mono text-lg rounded-md h-9 flex-1" onClick={props.onPost}>
            Cancel
          </button>
          <button className="border border-gray-500 bg-purple-400 focus:bg-purple-500 text-gray-100 font-mono text-lg rounded-md h-9 flex-1">
            Post
          </button>
          </div>
        </form>
        <div className="mt-2 m-auto rounded-md overflow-hidden w-max">
          {filename && (
            <img src={filename} alt="product" className="h-52 w-auto" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NewProductForm;
