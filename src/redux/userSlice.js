import axios from "../utils/axios";
import setAuthToken from "../utils/setAuthToken";

const initialState = {
  userData: null,
  isAuthenticated: false,
  status: "idle",
  error: null,
};

//reducer function
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/userFetched": {
      return {
        ...state,
        userData:action.payload,
        status:'idle',
        error:null,
        isAuthenticated:true
      };
    }
    case "user/userLoading":
    case "user/userSigningIn":
    case "user/userSigningUp": {
      return {
        ...state,
        status:'loading'
      };
    }
    case "user/userError": {
      return {
        ...state,
        error:action.payload,
        status:'idle'
      };
    }
    case "user/userSignedIn":
    case "user/userSignedUp": {
      return {
        ...state,
        status:'idle',
        error:null
      };
    }
    case 'user/userSignOut':{
      localStorage.removeItem('user_token')
      setAuthToken(null)
      return {
        ...state,
        userData:null,
        isAuthenticated:false
      }
    }
    default:
      return state;
  }
}

//action creators
export const userLoading = () => ({ type: "user/userLoading" });
export const userLoaded = (userData) => ({
  type: "user/userFetched",
  payload: userData,
});
export const userError = (error) => ({
  type: "user/userError",
  payload: error,
});
export const userSigningIn = () => ({ type: "user/userSigningIn" });
export const userSignedIn = () => ({ type: "user/userSigningIn" });
export const userSigningUp = () => ({ type: "user/userSigningUp" });
export const userSignedUp = () => ({ type: "user/userSignedUp" });
export const userSignOut = () => ({ type: "user/userSignOut" });

//Thunk functions

//#1. fetch Userdata based on token
export const fetchUser = () => async (dispatch) => {
  dispatch(userLoading());
  axios
    .get("/auth")
    .then((res) => {
      dispatch(userLoaded(res.data));
    })
    .catch((err) => {
      if (err.response) {
        dispatch(userError(err.response.data));
      }
      console.log(err.response);
    });
};

export const userSignIn = (userData) => async (dispatch) => {
  dispatch(userSigningIn());

  axios
    .post("/user/login", userData)
    .then((res) => {
      localStorage.setItem("user_token", res.data);
      setAuthToken(res.data);
      dispatch(userSignedIn());
      dispatch(fetchUser())
    })
    .catch((err) => {
      if (err.response) {
        dispatch(userError(err.response.data));
      }
      console.log(err.response);
    });
};

export const userSignUp = (userData) => async (dispatch) => {
  dispatch(userSigningUp());

  axios
    .post("/user/register", userData)
    .then((res) => {
      localStorage.setItem("user_token", res.data);
      setAuthToken(res.data);
      dispatch(userSignedUp());
      dispatch(fetchUser());
    })
    .catch((err) => {
      if (err.response) {
        dispatch(userError(err.response.data));
      }
      console.log(err.response);
    });
};



//custom selectors 

export const selectUserData=state=>state.user.userData

// export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
//     const response = await axios.get('/auth')
//    // const data = await response.json()
//     //console.log('data:', data)
//     return response.data
//   })

//   export const userSignIn = createAsyncThunk('user/userSignIn', async (userData,thunkAPI) => {
//     try{
//     const response = await axios.post('/user/login',userData)
//     //const data = await response.json()
//     console.log('data:', response.data)
//     if(response.data){
//       localStorage.setItem('user_token',response.data)
//       setAuthToken(response.data)
//       thunkAPI.dispatch(fetchUserData())
//     }

//     return response.data}
//     catch(err){
//       return err.response.data
//     }
//   })

//   export const userSignUp = createAsyncThunk('user/userSignUp', async (userData,thunkAPI) => {
//     const response = await axios.post('/user/register',userData)
//     //const data = await response.json()
//     console.log(response)
//     console.log('data:', response.data)
//     if(response.data){
//       localStorage.setItem('user_token',response.data)
//       setAuthToken(response.data)
//       thunkAPI.dispatch(fetchUserData())
//     }
//     return response.data
//   })

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     signOut(state,action){
//       localStorage.removeItem('user_token');
//       state.isAuthenticated=false
//       state.userdata=null
//       state.userdata_status='idle'
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(fetchUserData.pending, (state, action) => {
//         state.userdata_status = 'loading'
//       })
//       .addCase(fetchUserData.rejected, (state, action) => {
//         state.userdata_status = 'failed'
//         state.userdata_error = action.error.message
//       })
//       .addCase(fetchUserData.fulfilled, (state, action) => {
//         state.userdata = action.payload
//         state.userdata_status = 'fulfilled'
//         state.isAuthenticated=true

//       })
//       .addCase(userSignIn.pending,(state,action)=>{
//         state.signin_status='loading'
//         state.signin_error=null

//       })
//       .addCase(userSignIn.rejected,(state,action)=>{
//         state.signin_status='failed'
//         state.signin_error=action.error.message

//       })
//       .addCase(userSignIn.fulfilled,(state,action)=>{
//         state.signin_status='fulfilled'
//         //localStorage.setItem('user_token',action.payload)
//         state.signin_error=null
//         if(action.payload.error){
//           state.signin_error=action.payload.error.message
//         }

//       })
//       .addCase(userSignUp.pending,(state,action)=>{
//         state.signup_status='loading'

//       })
//       .addCase(userSignUp.rejected,(state,action)=>{
//         state.signup_status='failed'
//         state.signup_error=action.error.message

//       })
//       .addCase(userSignUp.fulfilled,(state,action)=>{
//         state.signup_status='fulfilled'
//         //localStorage.setItem('user_token',action.payload)
//         if(action.payload.error){
//           state.signup_error=action.payload.error.message
//         }
//       })
//   },
// });

// export const {signOut} =userSlice.actions
// export default userSlice.reducer

// //custom slector functions
// export const selectUserData=state=>state.user.userdata
// //export const selectFetchedUsers=state=>state.user.fetchedUsers
