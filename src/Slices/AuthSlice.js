import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}

const signUpUser = createAsyncThunk('signupuser', async()=> {
    const res= await fetch("")
})



const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        
    },
    extraReducers: {
        
    }
})

export default authSlice.reducer;