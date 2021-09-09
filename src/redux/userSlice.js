import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../utils/axios'
import setAuthToken from "../utils/setAuthToken";

const initialState = {
  userdata:null,
  isAuthenticated: false,
  userdata_status:'idle',
  userdata_error: null,
  signin_status:'idle',
  signin_error:null,
  signup_status:'idle',
  signup_error:null,
};

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
    const response = await axios.get('/auth')
   // const data = await response.json()
    //console.log('data:', data)
    return response.data
  })

  export const userSignIn = createAsyncThunk('user/userSignIn', async (userData,thunkAPI) => {
    const response = await axios.post('/user/login',userData)
    //const data = await response.json()
    console.log('data:', response.data)
    if(response.data){
      localStorage.setItem('user_token',response.data)
      setAuthToken(response.data)
      thunkAPI.dispatch(fetchUserData())
    }
    return response.data
  })

  export const userSignUp = createAsyncThunk('user/userSignUp', async (userData,thunkAPI) => {
    const response = await axios.post('/user/register',userData)
    //const data = await response.json()
    console.log('data:', response.data)
    if(response.data){
      localStorage.setItem('user_token',response.data)
      setAuthToken(response.data)
      thunkAPI.dispatch(fetchUserData())
    }
    return response.data
  })

  
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOut(state,action){
      localStorage.removeItem('user_token');
      state.isAuthenticated=false
      state.userdata=null
      state.userdata_status='idle'
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserData.pending, (state, action) => {
        state.userdata_status = 'loading'
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.userdata_status = 'failed'
        state.userdata_error = action.error.message
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.userdata = action.payload
        state.userdata_status = 'fulfilled'
        state.isAuthenticated=true
        
      })
      .addCase(userSignIn.pending,(state,action)=>{
        state.signin_status='loading'

      })
      .addCase(userSignIn.rejected,(state,action)=>{
        state.signin_status='failed'
        state.signin_error=action.error.message
        
      })
      .addCase(userSignIn.fulfilled,(state,action)=>{
        state.signin_status='fulfilled'  
        //localStorage.setItem('user_token',action.payload)
        
      })
      .addCase(userSignUp.pending,(state,action)=>{
        state.signin_status='loading'
        
      })
      .addCase(userSignUp.rejected,(state,action)=>{
        state.signup_status='failed'
        state.signup_error=action.error.message
        
      })
      .addCase(userSignUp.fulfilled,(state,action)=>{
        state.signup_status='fulfilled'
        //localStorage.setItem('user_token',action.payload)
      })
  },
});

export const {signOut} =userSlice.actions
export default userSlice.reducer

//custom slector functions
export const selectUserData=state=>state.user.userdata
//export const selectFetchedUsers=state=>state.user.fetchedUsers

