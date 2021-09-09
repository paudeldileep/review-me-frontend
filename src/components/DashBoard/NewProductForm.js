import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from "../../redux/productSlice";
import BasicLoader from "../LoadingScreen/BasicLoader";
//import axios from "../../utils/axios";


const NewProductForm = () => {
  const inputStyle = "focus:outline-none border-2 border-blue-500 mb-3 rounded-md p-1";

  const uploadStatus=useSelector(state=>state.products.productPosted_status)

  const dispatch=useDispatch();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //todo: file validation

    if (!title || !desc || !file) {
      console.log("errror");
      setError('*Must include a title,description and image')
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("productImage", file);

    dispatch(postProduct(formData))
    setError(null)
  };

  return (
    <div className="mx-4 px-4 py-2 mb-2 rounded-md bg-gradient-to-r from-purple-400 to-purple-100 relative">
      {uploadStatus==='loading' && <BasicLoader>Posting....</BasicLoader>}
      <h3 className="font-mono text-lg font-semibold text-gray-800">Add new Product</h3>
      <div className="max-w-md w-96">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="font-mono text-gray-600" htmlFor="title">Title</label>
          <input
            className={inputStyle}
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="font-mono text-gray-600" htmlFor="desc">Desciption</label>
          <textarea
            className={inputStyle}
            
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <label className="font-mono text-gray-600" htmlFor="productImage">Image</label>
          <input
            className="mb-3"
            type="file"
            name="productImage"
            id="productImage"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {error && <p className="font-mono text-red-600 my-1">{error}</p>}
          <button className="border border-gray-500 bg-purple-400 focus:bg-purple-500 text-gray-100 font-mono text-lg rounded-md h-9">Post</button>
          
        </form>
      </div>
    </div>
  );
};

export default NewProductForm;
