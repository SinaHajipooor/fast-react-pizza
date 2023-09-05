import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from '../../services/apiGeocoding'

// --------- api calls ------------


function getPosition() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

// async function fetchAddress() {
//     // 1) We get the user's geolocation position
//     const positionObj = await getPosition();
//     const position = {
//         latitude: positionObj.coords.latitude,
//         longitude: positionObj.coords.longitude,
//     };

//     // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
//     const addressObj = await getAddress(position);
//     const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//     // 3) Then we return an object with the data that we are interested in
//     return { position, address };
// }


// --------- thunk ------------
// to create thunk first we need to pass the action name and then we need to pass an async function that will return the payload for the reducer later 
export const fetchAddress = createAsyncThunk('user/fetchAddress', async function () {
    //     1) We get the user's geolocation position 
    const positionObj = await getPosition();
    const position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in / this data only comes when the status becomes fulfilled
    return { position, address };
});



// --------- RTk ------------

// initial state 
const initialState = {
    userName: '',
    status: 'idle',
    position: {},
    address: '',
    error: '',
};

// slice 
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        updateUserName(state, action) {
            state.userName = action.payload;
        }
    },
    // in extra reducers we can pass the functions that are fetching some data . we can do this bu using the addCase method and when we are using addCase method , we need to handle the pending , fullfilled ,rejected , status by chaining them
    extraReducers: (builder) => builder
        .addCase(fetchAddress.pending, (state, action) => {
            state.status = 'loading'
        }).addCase(fetchAddress.fulfilled, (state, action) => {
            // here when the  state status become fulfiled , then we can pass the data in to our states
            state.position = action.payload.position;
            state.address = action.payload.address;
            state.status = 'idle';
        }).addCase(fetchAddress.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
        })
})

// export reducers from slice
export const { updateUserName } = userSlice.actions;

// export the entire reducer ( we need it to config the store)
export default userSlice.reducer;