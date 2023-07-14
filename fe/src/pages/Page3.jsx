import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Page3 = () => {

const {id} = useParams();
const users = useSelector((state)=> state.users)
const existingUser = users.filter((i) => i.id==id)
const {name, email, phone} = existingUser[0]


  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow sx={{backgroundColor:"grey"}}>
          
          <TableCell><b>Name</b></TableCell>
          <TableCell><b>Email</b></TableCell>
          <TableCell><b>Phone</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody sx={{}}>
        <TableCell>{name}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{phone}</TableCell>
        
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Page3