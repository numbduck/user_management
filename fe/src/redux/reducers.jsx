import { createSlice } from "@reduxjs/toolkit";
// import { useEffect } from "react";
import {usersList} from '../pages/rows.jsx'

// const [userList, setUserList] = useState([]);

// useEffect(() => {
//     Axios.get("http://localhost:3001/users").then((response) => {
//       setUserList(response.data);
//     });
//   },[])

const userSlice = createSlice({
    name : "users", 
    initialState : usersList,
    reducers:{
        addUser : (state, action) => {
            console.log(action)
            console.log(state)
            state.push(action.payload)
        },
        updateUser: (state, action)=>{
            const {id, name, email, phone} = action.payload;
            const updatedUser = state.find((i)=>i.id==id)

            if(updatedUser){
                updatedUser.name = name;
                updatedUser.email = email;
                updatedUser.phone = phone;
            }
        },
        viewUser:(state, action)=>{
            const {id, name, email, phone} = action.payload;
            const updatedUser = state.find((i)=>i.id==id)

            if(updatedUser){
                updatedUser.name = name;
                updatedUser.email = email;
                updatedUser.phone = phone;
            }

        },
        deleteUser: (state, action)=>{
            const {id} = action.payload
            const updatedUser = state.find((i)=>i.id==id)

            if(updatedUser){
                return state.filter((item) => item.id != id)
            }
        }

        
    }
})
export const {addUser, updateUser, deleteUser, viewUser} = userSlice.actions;
export default userSlice.reducer;
