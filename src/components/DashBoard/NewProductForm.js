import React,{ useState } from "react";
//import axios from "../../utils/axios";
import axios from 'axios'

const NewProductForm = () => {
  const inputStyle = "focus:outline-none border-2 border-blue-500 mb-3";

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  // const [fileError, setFileError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (file) {
    //   if (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/jpg" ) {
    //     setFileError("Only jpeg and png files supported");
    //     return;
    //   } else if (file.size > 6000) {
    //     setFileError("Choose file with size <6 MB ");
    //     return;
    //   } else {
    //     setFileError(null);
    //   }
    // }

    if (!title || !desc) {
      console.log("errror");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("productImage", file);

    try {
      axios.post("http://localhost:4000/api/product/new", formData, {}).then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3>Add new Product</h3>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            className={inputStyle}
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="desc">Desciption</label>
          <input
            className={inputStyle}
            type="text"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <label htmlFor="productImage">Image</label>
          <input
            className="mb-3"
            type="file"
            name="productImage"
            id="productImage"
            onChange={(e) => setFile(e.target.files[0])}
          />
          
          <button className="border border-blue-500">Post</button>
        </form>
      </div>
    </div>
  );
};

export default NewProductForm;
