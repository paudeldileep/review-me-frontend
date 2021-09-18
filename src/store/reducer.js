import { combineReducers } from 'redux'

import userReducer from "../redux/userSlice";
import productReducer from '../redux/productSlice';


const rootReducer=combineReducers({
    user:userReducer,
    product:productReducer
})

export default rootReducer