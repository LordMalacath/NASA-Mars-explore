import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchImgList = createAsyncThunk(
    'imgList/fetchImgList',
    async ({ rover, roverCam, sol, page }) => {
        try {
            const response = await fetch(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}$camera=${roverCam}&page=${page}&api_key=${process.env.REACT_APP_NASA_OPEN_API_KEY}`
            );
            const data = await response.json();
            return data
        } catch (error) {
            console.log(error);
        }
    }
);

export const fetchMoreImgList = createAsyncThunk(
    'imgList/fetchMoreImgList',
    async ({ rover, roverCam, sol, page }) => {
        try {
            page += 1;
            const response = await fetch(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}$camera=${roverCam}&page=${page}&api_key=${process.env.REACT_APP_NASA_OPEN_API_KEY}`
            );
            const data = await response.json();
            return data
        } catch (error) {
            console.log(error);
        }
    }
);


export const imgListSlice = createSlice({
    name: 'imgList',
    initialState: {
        imgList: [],
        querrySetup: {
            rover: '',
            roverCam: '',
            sol: 1,
            page: 1,
        },
        loadingStatus: false,
        error: null,
    },
    reducers: {
        setQuerrySetupRover: (state, action) => {
            state.querrySetup.rover = action.payload;
        },
        setQuerrySetupRoverCam: (state, action) => {
            state.querrySetup.roverCam = action.payload;
        },
        setQuerrySetupSol: (state, action) => {
            state.querrySetup.sol = Number(action.payload);
        },
        changeLoadingStatus: (state) => {
            state.loadingStatus = !state.loadingStatus;
        },
        setNextPage: (state) => {
            state.querrySetup.page += 1;
        }
    },
    extraReducers: {
        [fetchImgList.fulfilled]: (state, action) => {
            console.log(action.payload.photos)

            state.imgList = action.payload.photos;
            state.error = null;
            state.loadingStatus = false;
        },
        [fetchImgList.pending]: (state) => {
            state.error = null;
            state.loadingStatus = true;
        },
        [fetchImgList.rejected]: (state) => {

        },
        [fetchMoreImgList.fulfilled]: (state, action) => {
            console.log(action.payload.photos)
            state.imgList.push(...action.payload.photos);
            state.error = null;
            state.loadingStatus = false;
        },
        [fetchMoreImgList.pending]: (state) => {
            state.error = null;
            state.loadingStatus = true;
        },
        [fetchMoreImgList.rejected]: (state) => {

        },
    }
});

export const { setQuerrySetupRover, setQuerrySetupRoverCam, setQuerrySetupSol, changeLoadingStatus, setNextPage } = imgListSlice.actions;

export default imgListSlice.reducer;