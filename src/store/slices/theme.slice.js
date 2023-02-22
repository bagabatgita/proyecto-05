import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice ({
    name: "themes",
    initialState: localStorage.getItem("theme") ?? "light" ,
    reducers:{
        setTheme: (state, action) => {
            localStorage.setItem("themes",action.payload)
            return action.payload 

        },
        resetTheme: () => {
            localStorage.getItem("themes")
            return ""    
            
        },
        
    },
})

export const {setTheme, resetTheme } =  themeSlice.actions

export default themeSlice.reducer