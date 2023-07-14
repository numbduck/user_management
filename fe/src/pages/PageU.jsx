import { Box, Button, TextField } from '@mui/material'
// import { Axios } from 'axios';
import { useState } from 'react';
import { updateUser } from '../redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';




const PageU = () => {

const {id} = useParams();
const users = useSelector((state)=> state.users)
const existingUser = users.filter((i) => i.id==id)
const {name, email, phone} = existingUser[0]

const [nameu, setName]= useState(name)
const [emailu, setEmail]= useState(email)
const [phoneu, setPhone]= useState(phone)

  const dispatch = useDispatch();
  const navigate = useNavigate()

  function handleClick(e){
      e.preventDefault();
      dispatch(updateUser({id: id, name : nameu, email: emailu, phone: phoneu}));
      navigate("/")
      
  }

  return (
    <Box component="form" sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}>
      <TextField id="outlined-basic" label="Name" variant="outlined" color="secondary"  inputProps={{ style: { color: "white" } }} focused onChange={(event)=>setName(event.target.value)} value={nameu}/>
      <TextField id="filled-basic" label="Email" variant="outlined" color="secondary" inputProps={{ style: { color: "white" } }} focused onChange={(event)=>setEmail(event.target.value)} value={emailu}/>
      <TextField id="standard-basic" label="Phone" variant="outlined" color="secondary" inputProps={{ style: { color: "white" } }} focused onChange={(event)=>setPhone(event.target.value)} value={phoneu}/>
      <Button type='submit' variant='contained' size="large" onClick={handleClick} >Update User</Button>
    </Box>
  )
}

export default PageU;