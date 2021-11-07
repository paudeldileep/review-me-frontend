import { UserIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BasicLoader from "../../components/LoadingScreen/BasicLoader";
import { selectUserData } from "../../redux/userSlice";
import { useAPI } from "../../utils/fetchHelper";

const Profile = (props) => {
  const [response, setResponse] = useAPI(`/user/profile/${props.userId}`);

  //const currentUser=useSelector(selectUserData);

  // console.log(currentUser);

  let user = null;

  useEffect(() => {
    return setResponse(`/user/profile/${props.userId}`);
  }, [props.userId]);

  // console.log(response);

  if (response.data) {
    user = response.data;
  }

  //const isLoggedInUser=currentUser._id===props.userId;

  //console.log(isLoggedInUser);

  return (
    <div className="w-full mt-2">
      {response.isLoading && <BasicLoader>Loading Profile...</BasicLoader>}
      {response.error && <p>{response.error.data.errors}</p>}
      <div className="flex flex-col w-full items-center">
        <div>
          {user?.photo ? (
            <img
              src={user.photo}
              alt={user.firstname}
              className="w-20 h-20 rounded-full shadow-sm ring-2 ring-purple-600"
            />
          ) : (
            <UserIcon className="w-20 h-20 rounded-full shadow-sm ring-2 ring-purple-600" />
          )}
        </div>
        <h2>
          {user?.firstname} {user?.lastname}
        </h2>
        <p>{user?.email}</p>
      </div>
      
    </div>
  );
};

export default Profile;
