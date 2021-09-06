import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../utils/axios'

const initialState = {
  data:null,
  status: "idle",
  error: null,
};

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {


    const response = await axios.get('/auth')
    const data = await response.json()
    //console.log('data:', data)
    return data
  })

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: {
      reducer(state, action) {
        state.data=action.payload;
      },
      prepare(name, id) {
        return {
          payload: {
            name,
            id,
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserData.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.fetchedUsers = action.payload
        state.status = 'fulfilled'
      })
  },
});

export const {loginUser} =userSlice.actions
export default userSlice.reducer

//custom slector functions
export const selectUserData=state=>state.user.data
export const selectFetchedUsers=state=>state.user.fetchedUsers

