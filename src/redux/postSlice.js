import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../utils/axios'

const initialState={
    allPosts:null,
    ownPosts:null,
    featuredPosts:null,
    allposts_status:'empty',
    allposts_error:null,
    ownposts_status:'empty',
    ownposts_error:null,
    featuredposts_status:'empty',
    featuredposts_error:null,
}

const postSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{},
})

export default postSlice.reducer