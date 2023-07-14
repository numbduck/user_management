import { Box, Button, TextField } from '@mui/material'
// import { Axios } from 'axios';
import { useState } from 'react';
import { addUser } from '../redux/reducers';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';




const Page2 = () => {
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [phone, setPhone]= useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate()

  function handleClick(e){
      e.preventDefault();
      dispatch(addUser({id: Math.floor(Math.random()*100), name, email, phone}));
      navigate("/")
      
  }

  return (
    <Box component="form" sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}>
      <TextField id="outlined-basic" label="Name" variant="outlined" color="secondary"  inputProps={{ style: { color: "white" } }} focused onChange={(event)=>setName(event.target.value)}/>
      <TextField id="filled-basic" label="Email" variant="outlined" color="secondary" inputProps={{ style: { color: "white" } }} focused onChange={(event)=>setEmail(event.target.value)}/>
      <TextField id="standard-basic" label="Phone" variant="outlined" color="secondary" inputProps={{ style: { color: "white" } }} focused onChange={(event)=>setPhone(event.target.value)}/>
      <Button type='submit' variant='contained' size="large" onClick={handleClick} >Create User</Button>
    </Box>
  )
}

export default Page2