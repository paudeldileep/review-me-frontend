import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data:null,
  status: "idle",
  error: null,
  fetchedUsers:null
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
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
      .addCase(fetchUser.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
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

