

// MUI components
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';

// MUI Icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../redux/reducers';
// import Axios, * as others from 'axios';





  
    
 const StyledTableCell = styled(TableCell)(() => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'black',
        color: 'white',
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));



export default function Page1() {

    const users = useSelector((state)=> state.users)
    console.log(users)

    // const [userList, setUserList] = useState([]);
    
    // useEffect(() => {
    //       Axios.get("http://localhost:3001/users").then((response) => {
    //         setUserList(response.data);
    //       });
    //     },[])

    // const updateFun=()=>{
    //     dispatch({
    //         type:"update",
    //         payload:{user}
    //     });
    // }

    const dispatch = useDispatch();
    
    function handleDelete(id){
      dispatch(deleteUser({id: id}))
    }

  

      return (<Box>
        <Link to='/create'><Button variant="contained" startIcon={<AddCircleIcon />} sx={{m:2}} size="large" >Add New User</Button></Link>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {/* <StyledTableCell>Id</StyledTableCell> */}
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
               
                <StyledTableCell align="right"></StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody >
              {users.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  
                  <StyledTableCell align="right">
                    <Link to={`/view/${row.id}`}><Button variant="outlined" startIcon={<OpenInNewIcon />} sx={{mr:2}}>View</Button></Link>
                    <Link to={`/edit/${row.id}`}><Button variant="outlined" endIcon={<EditIcon />} 
                    sx={{mr:2}}>Edit</Button></Link>

                    <Button variant="outlined " startIcon={<DeleteIcon />} color="error" onClick={()=>handleDelete(row.id)}>Delete</Button>
                    </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer></Box>
      );
    }


