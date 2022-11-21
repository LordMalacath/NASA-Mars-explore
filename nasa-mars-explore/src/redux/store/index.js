import { configureStore } from "@reduxjs/toolkit";
import imgListReducer from "redux/slices/imgListSlice"


export default configureStore({
    reducer: {
        imgList: imgListReducer,
    }
})