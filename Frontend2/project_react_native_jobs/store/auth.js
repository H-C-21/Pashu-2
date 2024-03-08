
import { createSlice } from "@reduxjs/toolkit";



export const  authSlice = createSlice({
    name:'auth',
    initialState: {isLoggedin: false, firstName: null, lastName : null , phone: null,email: null, token: null},

    reducers:{
        login(state, action){
            state.isLoggedin = true;
            state.id = action.payload.id;
            state.phone = action.payload.phone;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.token = action.payload.token;
 
        },
        
        logout(state){
            state.isLoggedin = false;
            state.id = null;
            state.firstName = null;
            state.lastName = null;
            state.email = null;
            state.phone = null;
            state.token = null;
        }
    }
})

export const {login , logout} = authSlice.actions;

export default authSlice.reducer;