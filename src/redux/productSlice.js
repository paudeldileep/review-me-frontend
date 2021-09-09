import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../utils/axios'

const initialState={
    allProducts:null,
    ownProducts:null,
    featuredProducts:null,
    allProducts_status:'empty',
    allProducts_error:null,
    ownProducts_status:'empty',
    ownProducts_error:null,
    featuredProducts_status:'empty',
    featuredProducts_error:null,
    loading:'false',
    productPosted_status:null,
    productPosted_error:null
}

export const fetchAllProducts = createAsyncThunk('product/fetchAllProducts', async () => {
    const response = await axios.get('/product/all')
   // const data = await response.json()
    console.log('data:', response.data)
    return response.data
  })

  export const fetchOwnProducts = createAsyncThunk('product/fetchOwnProducts', async () => {
    const response = await axios.get('/product/all')
   // const data = await response.json()
    console.log('data:', response.data)
    return response.data
  })

  export const fetchFeaturedProducts = createAsyncThunk('product/fetchFeaturedProducts', async () => {
    const response = await axios.get('/product/all')
   // const data = await response.json()
    //console.log('data:', data)
    return response.data
  })

  export const postProduct = createAsyncThunk('product/postProduct', async (formData,thunkAPI) => {
    const response = await axios.post('/product/new',formData)
   // const data = await response.json()
    console.log('data:', response.data)
    if(response.data.message){
      thunkAPI.dispatch(fetchAllProducts())
      thunkAPI.dispatch(fetchOwnProducts())
    }
    return response.data
  })

const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
          .addCase(fetchAllProducts.pending, (state, action) => {
            state.allProducts_status = 'loading'
          })
          .addCase(fetchAllProducts.rejected, (state, action) => {
            state.allProducts_status = 'failed'
            state.allProducts_error = action.error.message
          })
          .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload
            state.allProducts_status = 'fulfilled'
            
          })
          .addCase(fetchOwnProducts.pending,(state,action)=>{
            state.ownProducts_status='loading'
    
          })
          .addCase(fetchOwnProducts.rejected,(state,action)=>{
            state.ownProducts_status='failed'
            state.ownProducts_error=action.error.message
            
          })
          .addCase(fetchOwnProducts.fulfilled,(state,action)=>{
            state.ownProducts_status='fulfilled'  
            state.ownProducts=action.payload
          })
          .addCase(fetchFeaturedProducts.pending,(state,action)=>{
            state.featuredProducts_status='loading'
            
          })
          .addCase(fetchFeaturedProducts.rejected,(state,action)=>{
            state.featuredProducts_status='failed'
            state.featuredProducts_error=action.error.message
            
          })
          .addCase(fetchFeaturedProducts.fulfilled,(state,action)=>{
            state.featuredProducts_status='fulfilled'
            state.featuredProducts=action.payload
          })
          .addCase(postProduct.pending,(state,action)=>{
            state.productPosted_status='loading'
            
          })
          .addCase(postProduct.rejected,(state,action)=>{
            state.productPosted_status='failed'
            state.productPosted_error=action.error.message
            
          })
          .addCase(postProduct.fulfilled,(state,action)=>{
            state.productPosted_status='fulfilled'
            state.productPosted=action.payload
          })
      },
})

export default productSlice.reducer

//custom selector functions
export const allProductsSelector=state=>state.products.allProducts
export const ownProductsSelector=state=>state.products.ownProducts
